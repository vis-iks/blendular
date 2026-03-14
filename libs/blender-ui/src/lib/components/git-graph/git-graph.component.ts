import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  computed,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GitNode {
  /** Unique commit hash / id */
  id: string;
  /** Commit message */
  message: string;
  /** Author name */
  author?: string;
  /** Timestamp or date string */
  date?: string;
  /** Parent commit IDs (for branching) */
  parents: string[];
  /** Branch color override */
  color?: string;
  /** Branch / ref label, e.g. 'main', 'feature/ui' */
  refs?: string[];
}

interface TrackEntry {
  node: GitNode;
  column: number;
  color: string;
  parentConnections: { parentId: string; parentColumn: number; parentRow: number; color: string }[];
}

const BRANCH_COLORS = [
  '#4772b3', // Blender blue
  '#4caf50', // green
  '#ff9800', // orange
  '#e91e63', // pink
  '#9c27b0', // purple
  '#00bcd4', // cyan
  '#ff5722', // deep orange
  '#8bc34a', // light green
];

const ROW_HEIGHT = 32;
const COL_WIDTH = 16;
const LEFT_PADDING = 12;

@Component({
  selector: 'bui-git-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git-graph.component.html',
  styleUrl: './git-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiGitGraphComponent {
  @Input() set nodes(val: GitNode[]) {
    this._nodes.set(val || []);
  }
  _nodes = signal<GitNode[]>([]);

  @Output() nodeClick = new EventEmitter<GitNode>();

  /** Computed layout: for each node, assign a column and draw connections */
  layout = computed(() => {
    const nodes = this._nodes();
    if (!nodes.length) return { entries: [] as TrackEntry[], maxCol: 0, svgHeight: 0, svgWidth: 0 };

    const entries: TrackEntry[] = [];
    const nodeRowMap = new Map<string, number>(); // id -> row index
    const nodeColMap = new Map<string, number>(); // id -> column
    const nodeColorMap = new Map<string, string>();

    // Active columns: an array where each slot is either null (free) or a commit id that "owns" that track
    const activeColumns: (string | null)[] = [];

    const findFreeColumn = (): number => {
      const idx = activeColumns.indexOf(null);
      if (idx !== -1) return idx;
      activeColumns.push(null);
      return activeColumns.length - 1;
    };

    const assignColor = (node: GitNode, col: number): string => {
      if (node.color) return node.color;
      return BRANCH_COLORS[col % BRANCH_COLORS.length];
    };

    // Process nodes top-to-bottom (assumed in display order, newest first)
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      let col: number;

      // Check if this node was already reserved by a parent looking ahead
      if (nodeColMap.has(node.id)) {
        col = nodeColMap.get(node.id)!;
      } else {
        col = findFreeColumn();
        nodeColMap.set(node.id, col);
      }

      activeColumns[col] = node.id;
      nodeRowMap.set(node.id, i);

      const color = nodeColorMap.get(node.id) || assignColor(node, col);
      nodeColorMap.set(node.id, color);

      // For each parent, reserve their column if not already assigned
      for (let p = 0; p < node.parents.length; p++) {
        const parentId = node.parents[p];
        if (!nodeColMap.has(parentId)) {
          if (p === 0) {
            // First parent continues on same column
            nodeColMap.set(parentId, col);
            nodeColorMap.set(parentId, color);
          } else {
            // Additional parents get new columns (merge lines)
            const newCol = findFreeColumn();
            nodeColMap.set(parentId, newCol);
            activeColumns[newCol] = parentId;
            nodeColorMap.set(parentId, BRANCH_COLORS[newCol % BRANCH_COLORS.length]);
          }
        }
      }

      // Free this column if no parent continues on it
      if (node.parents.length === 0) {
        activeColumns[col] = null;
      }

      entries.push({
        node,
        column: col,
        color,
        parentConnections: [] // filled in second pass
      });
    }

    // Second pass: compute parent connections
    for (const entry of entries) {
      for (const parentId of entry.node.parents) {
        const parentRow = nodeRowMap.get(parentId);
        const parentCol = nodeColMap.get(parentId);
        if (parentRow !== undefined && parentCol !== undefined) {
          entry.parentConnections.push({
            parentId,
            parentColumn: parentCol,
            parentRow,
            color: nodeColorMap.get(parentId) || entry.color
          });
        }
      }
    }

    const maxCol = Math.max(...entries.map(e => e.column), 0);
    const svgHeight = nodes.length * ROW_HEIGHT;
    const svgWidth = (maxCol + 1) * COL_WIDTH + LEFT_PADDING * 2;

    return { entries, maxCol, svgHeight, svgWidth };
  });

  /** Generate SVG path for a connection line (metro-style: straight + smooth S-curve) */
  getConnectionPath(entry: TrackEntry, conn: { parentColumn: number; parentRow: number }): string {
    const rowIndex = this._nodes().indexOf(entry.node);
    const x1 = LEFT_PADDING + entry.column * COL_WIDTH;
    const y1 = rowIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
    const x2 = LEFT_PADDING + conn.parentColumn * COL_WIDTH;
    const y2 = conn.parentRow * ROW_HEIGHT + ROW_HEIGHT / 2;

    if (x1 === x2) {
      // Straight vertical line (same column)
      return `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    // Smooth S-curve transition between columns
    // The curve occupies exactly one row height for the transition
    const curveStartY = y1 + ROW_HEIGHT / 2;
    const curveEndY = curveStartY + ROW_HEIGHT;

    // Clamp if the parent is too close
    const clampedEndY = Math.min(curveEndY, y2);

    return [
      `M ${x1} ${y1}`,
      `L ${x1} ${curveStartY}`,
      `C ${x1} ${(curveStartY + clampedEndY) / 2}, ${x2} ${(curveStartY + clampedEndY) / 2}, ${x2} ${clampedEndY}`,
      `L ${x2} ${y2}`
    ].join(' ');
  }

  getNodeX(column: number): number {
    return LEFT_PADDING + column * COL_WIDTH;
  }

  getNodeY(index: number): number {
    return index * ROW_HEIGHT + ROW_HEIGHT / 2;
  }

  get graphPaddingLeft(): string {
    const maxCol = this.layout().maxCol;
    return `${(maxCol + 1) * COL_WIDTH + LEFT_PADDING * 2 + 8}px`;
  }

  onCircleHover(el: Element, hover: boolean) {
    el.setAttribute('r', hover ? '7' : '4');
  }

  onNodeClick(node: GitNode) {
    this.nodeClick.emit(node);
  }
}
