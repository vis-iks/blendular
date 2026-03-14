import {
  Component, ChangeDetectionStrategy, input, output, signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

/** Action icon on the right side of a tree node (e.g., visibility, renderable) */
export interface BuiTreeAction {
  id: string;
  /** Material Symbols icon name */
  icon: string;
  /** Whether the action is currently active/on */
  active?: boolean;
}

/** Data model for tree nodes */
export interface BuiTreeNode {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Material Symbols icon name */
  icon?: string;
  /** Child nodes */
  children?: BuiTreeNode[];
  /** Whether this node is expanded (for nodes with children) */
  expanded?: boolean;
  /** Whether this node is disabled (individual) */
  disabled?: boolean;
  /** Whether the collection is enabled (checkbox toggle) */
  checked?: boolean;
  /** Action icons on the right side */
  actions?: BuiTreeAction[];
}

/**
 * BuiTreeNodeComponent – Renders a single tree node recursively.
 * Internal component used by BuiTreeComponent.
 */
@Component({
  selector: 'bui-tree-node',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bui-tree-node"
      [style.padding-left.px]="depth() * 20 + 4"
      [class.selected]="isSelected()"
      [class.disabled]="node().disabled || hierarchyDisabled() || isNodeUnchecked()"
      (click)="onNodeClick($event)"
    >
      <!-- Expand/collapse chevron -->
      @if (node().children && node().children!.length > 0) {
        <button class="node-toggle" (click)="toggleExpand($event)">
          <span class="chevron bl-icons-rightarrow_thin" [class.expanded]="expanded()"></span>
        </button>
      } @else {
        <span class="node-spacer"></span>
      }

      <!-- Node icon -->
      @if (node().icon) {
        <span class="node-icon" [ngClass]="'bl-icons-' + node().icon"></span>
      }

      <!-- Node label -->
      <span class="node-label">{{ node().label }}</span>

      <!-- Flex spacer to push actions to the right -->
      <div class="flex-spacer"></div>

      <!-- Actions on the right -->
      @if (node().actions) {
        <div class="node-actions">
          @for (action of node().actions; track action.id) {
            <button
              class="node-action"
              [ngClass]="[action.icon ? 'bl-icons-' + action.icon : '', action.active ? 'active' : '']"
              (click)="onActionClick($event, action)"
            >
            </button>
          }
        </div>
      }
    </div>

    <!-- Children (recursive) with indent guide line -->
    @if (expanded() && node().children && node().children!.length > 0) {
      <div class="children-group" [class.hierarchy-disabled]="isNodeUnchecked() || hierarchyDisabled()">
        @if (node().checked !== undefined) {
          <div class="indent-guide" [style.left.px]="depth() * 20 + 12"></div>
        }
        @for (child of node().children; track child.id) {
          <bui-tree-node
            [node]="child"
            [depth]="depth() + 1"
            [selectedId]="selectedId()"
            [parentDisabled]="isNodeUnchecked() || hierarchyDisabled()"
            (nodeSelect)="onChildSelect($event)"
            (actionClick)="onChildActionClick($event)"
          ></bui-tree-node>
        }
      </div>
    }
  `,
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTreeNodeComponent {
  node = input.required<BuiTreeNode>();
  depth = input(0);
  selectedId = input<string | null>(null);
  parentDisabled = input<boolean>(false);

  nodeSelect = output<BuiTreeNode>();
  actionClick = output<{ node: BuiTreeNode, action: BuiTreeAction }>();

  expanded = signal(false);

  hierarchyDisabled(): boolean {
    return this.parentDisabled();
  }

  isNodeUnchecked(): boolean {
    return this.node().checked === false;
  }

  constructor() {
    // Use effect-like initialization after input is set
    setTimeout(() => {
      if (this.node().expanded) {
        this.expanded.set(true);
      }
    });
  }

  isSelected(): boolean {
    return this.selectedId() === this.node().id;
  }

  toggleExpand(event: MouseEvent) {
    event.stopPropagation();
    this.expanded.set(!this.expanded());
  }

  onNodeClick(event: MouseEvent) {
    if (this.node().disabled) return;
    this.nodeSelect.emit(this.node());
  }

  onChildSelect(node: BuiTreeNode) {
    this.nodeSelect.emit(node);
  }

  onActionClick(event: MouseEvent, action: BuiTreeAction) {
    event.stopPropagation();
    this.actionClick.emit({ node: this.node(), action });
  }

  onChildActionClick(event: { node: BuiTreeNode, action: BuiTreeAction }) {
    this.actionClick.emit(event);
  }
}

/**
 * BuiTreeComponent – Blender-style hierarchical tree view (Outliner).
 *
 * Renders a nested list of expandable/collapsible tree nodes with
 * selection support, icons, and indentation.
 */
@Component({
  selector: 'bui-tree',
  standalone: true,
  imports: [CommonModule, BuiTreeNodeComponent],
  template: `
    <div class="bui-tree">
      @for (node of nodes(); track node.id) {
        <bui-tree-node
          [node]="node"
          [depth]="0"
          [selectedId]="selectedId()"
          (nodeSelect)="onNodeSelect($event)"
          (actionClick)="onActionSelect($event)"
        ></bui-tree-node>
      }
    </div>
  `,
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTreeComponent {
  /** Tree data */
  nodes = input<BuiTreeNode[]>([]);

  /** Currently selected node ID */
  selectedId = signal<string | null>(null);

  /** Emits when a node is selected */
  nodeSelected = output<BuiTreeNode>();

  /** Emits when a node action is clicked */
  actionSelected = output<{ node: BuiTreeNode, action: BuiTreeAction }>();

  onNodeSelect(node: BuiTreeNode) {
    this.selectedId.set(node.id);
    this.nodeSelected.emit(node);
  }

  onActionSelect(event: { node: BuiTreeNode, action: BuiTreeAction }) {
    this.actionSelected.emit(event);
  }
}
