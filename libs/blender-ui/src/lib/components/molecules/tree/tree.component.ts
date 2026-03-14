import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiBadgeComponent } from '../../atoms/badge/badge.component';
import { BuiTone } from '../../../foundation/types';

export interface BuiTreeAction {
  id: string;
  icon: string;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface BuiTreeNodeBadge {
  text: string;
  tone?: BuiTone;
}

export interface BuiTreeNode {
  id: string;
  label: string;
  icon?: string;
  description?: string;
  children?: BuiTreeNode[];
  expanded?: boolean;
  disabled?: boolean;
  checked?: boolean;
  active?: boolean;
  muted?: boolean;
  badge?: BuiTreeNodeBadge;
  actions?: BuiTreeAction[];
}

interface BuiVisibleTreeNode {
  node: BuiTreeNode;
  depth: number;
  parentId: string | null;
}

const collectNodeIds = (nodes: BuiTreeNode[]): Set<string> => {
  const ids = new Set<string>();
  const visit = (items: BuiTreeNode[]) => {
    items.forEach((item) => {
      ids.add(item.id);
      if (item.children?.length) {
        visit(item.children);
      }
    });
  };
  visit(nodes);
  return ids;
};

const collectExpandedDefaults = (nodes: BuiTreeNode[]): string[] => {
  const expanded: string[] = [];
  const visit = (items: BuiTreeNode[]) => {
    items.forEach((item) => {
      if (item.expanded) {
        expanded.push(item.id);
      }
      if (item.children?.length) {
        visit(item.children);
      }
    });
  };
  visit(nodes);
  return expanded;
};

const flattenVisibleNodes = (
  nodes: BuiTreeNode[],
  expandedIds: Set<string>,
  parentId: string | null = null,
  depth = 0,
): BuiVisibleTreeNode[] => {
  const result: BuiVisibleTreeNode[] = [];

  nodes.forEach((node) => {
    result.push({ node, depth, parentId });
    if (node.children?.length && expandedIds.has(node.id)) {
      result.push(...flattenVisibleNodes(node.children, expandedIds, node.id, depth + 1));
    }
  });

  return result;
};

@Component({
  selector: 'bui-tree-node',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent],
  template: `
    <div
      class="bui-tree-node"
      role="treeitem"
      [style.padding-left.px]="depth() * 16 + 4"
      [class.selected]="selectedId() === node().id"
      [class.focused]="focusedId() === node().id"
      [class.disabled]="node().disabled || parentDisabled() || node().checked === false"
      [class.muted]="node().muted"
      [class.active-row]="node().active"
      [attr.aria-expanded]="hasChildren() ? expanded() : null"
      [attr.aria-level]="depth() + 1"
      [attr.aria-selected]="selectedId() === node().id"
      (click)="nodeSelect.emit(node())"
    >
      @if (hasChildren()) {
        <button type="button" class="node-toggle" (click)="toggleExpand($event)">
          <span class="chevron bl-icons-rightarrow_thin" [class.expanded]="expanded()"></span>
        </button>
      } @else {
        <span class="node-spacer"></span>
      }

      @if (node().icon) {
        <span class="node-icon" [ngClass]="'bl-icons-' + node().icon"></span>
      }

      <div class="node-copy">
        <span class="node-label">{{ node().label }}</span>
        @if (node().description) {
          <span class="node-description">{{ node().description }}</span>
        }
      </div>

      @if (node().badge) {
        <bui-badge [text]="node().badge!.text" [tone]="node().badge!.tone ?? 'neutral'"></bui-badge>
      }

      <div class="flex-spacer"></div>

      @if (node().actions?.length) {
        <div class="node-actions">
          @for (action of node().actions; track action.id) {
            <button
              type="button"
              class="node-action"
              [class.active]="action.active"
              [disabled]="action.disabled"
              [title]="action.tooltip || action.id"
              (click)="onActionClick($event, action)"
            >
              <span [ngClass]="'bl-icons-' + action.icon"></span>
            </button>
          }
        </div>
      }
    </div>

    @if (expanded() && node().children?.length) {
      <div class="children-group" [class.hierarchy-disabled]="parentDisabled() || node().checked === false">
        <div class="indent-guide" [style.left.px]="depth() * 16 + 12"></div>
        @for (child of node().children!; track child.id) {
          <bui-tree-node
            [node]="child"
            [depth]="depth() + 1"
            [selectedId]="selectedId()"
            [focusedId]="focusedId()"
            [expandedIds]="expandedIds()"
            [parentDisabled]="parentDisabled() || node().checked === false"
            (nodeSelect)="nodeSelect.emit($event)"
            (toggleNode)="toggleNode.emit($event)"
            (actionClick)="actionClick.emit($event)"
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
  focusedId = input<string | null>(null);
  expandedIds = input<string[]>([]);
  parentDisabled = input(false);

  nodeSelect = output<BuiTreeNode>();
  toggleNode = output<BuiTreeNode>();
  actionClick = output<{ node: BuiTreeNode; action: BuiTreeAction }>();

  hasChildren = computed(() => Boolean(this.node().children?.length));
  expanded = computed(() => this.expandedIds().includes(this.node().id));

  toggleExpand(event: MouseEvent) {
    event.stopPropagation();
    this.toggleNode.emit(this.node());
  }

  onActionClick(event: MouseEvent, action: BuiTreeAction) {
    event.stopPropagation();
    if (!action.disabled) {
      this.actionClick.emit({ node: this.node(), action });
    }
  }
}

@Component({
  selector: 'bui-tree',
  standalone: true,
  imports: [CommonModule, BuiTreeNodeComponent],
  template: `
    <div class="bui-tree" tabindex="0" role="tree" (keydown)="onKeydown($event)">
      @for (node of nodes(); track node.id) {
        <bui-tree-node
          [node]="node"
          [selectedId]="selectedId()"
          [focusedId]="focusedId()"
          [expandedIds]="expandedIds()"
          (nodeSelect)="selectNode($event)"
          (toggleNode)="toggleExpanded($event)"
          (actionClick)="actionSelected.emit($event)"
        ></bui-tree-node>
      }
    </div>
  `,
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTreeComponent {
  nodes = input<BuiTreeNode[]>([]);
  selectionMode = input<'single' | 'none'>('single');

  selectedId = model<string | null>(null);

  nodeSelected = output<BuiTreeNode>();
  actionSelected = output<{ node: BuiTreeNode; action: BuiTreeAction }>();

  focusedId = signal<string | null>(null);
  expandedIds = signal<string[]>([]);

  private expandedSet = computed(() => new Set(this.expandedIds()));
  private visibleNodes = computed(() => flattenVisibleNodes(this.nodes(), this.expandedSet()));

  constructor() {
    effect(() => {
      const availableIds = collectNodeIds(this.nodes());
      const defaults = collectExpandedDefaults(this.nodes());
      this.expandedIds.update((current) => {
        const next = new Set(current.filter((id) => availableIds.has(id)));
        defaults.forEach((id) => next.add(id));
        return Array.from(next);
      });

      const visible = this.visibleNodes();
      if (!visible.length) {
        this.focusedId.set(null);
        if (this.selectedId()) {
          this.selectedId.set(null);
        }
        return;
      }

      const currentFocus = this.focusedId();
      if (!currentFocus || !availableIds.has(currentFocus)) {
        const fallback = this.selectedId() && availableIds.has(this.selectedId()!)
          ? this.selectedId()
          : visible[0].node.id;
        this.focusedId.set(fallback);
      }
    });
  }

  selectNode(node: BuiTreeNode) {
    this.focusedId.set(node.id);
    if (this.selectionMode() === 'single') {
      this.selectedId.set(node.id);
    }
    this.nodeSelected.emit(node);
  }

  toggleExpanded(node: BuiTreeNode) {
    if (!node.children?.length) {
      return;
    }

    this.expandedIds.update((current) => (
      current.includes(node.id)
        ? current.filter((id) => id !== node.id)
        : [...current, node.id]
    ));
  }

  onKeydown(event: KeyboardEvent) {
    const visible = this.visibleNodes();
    if (!visible.length) {
      return;
    }

    const currentId = this.focusedId() ?? this.selectedId() ?? visible[0].node.id;
    const currentIndex = Math.max(0, visible.findIndex((item) => item.node.id === currentId));
    const current = visible[currentIndex];

    switch (event.key) {
      case 'ArrowDown':
        this.focusVisibleNode(visible[Math.min(currentIndex + 1, visible.length - 1)]);
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.focusVisibleNode(visible[Math.max(currentIndex - 1, 0)]);
        event.preventDefault();
        break;
      case 'ArrowRight':
        if (current.node.children?.length && !this.expandedSet().has(current.node.id)) {
          this.toggleExpanded(current.node);
        } else {
          const next = visible[currentIndex + 1];
          if (next && next.parentId === current.node.id) {
            this.focusVisibleNode(next);
          }
        }
        event.preventDefault();
        break;
      case 'ArrowLeft':
        if (current.node.children?.length && this.expandedSet().has(current.node.id)) {
          this.toggleExpanded(current.node);
        } else if (current.parentId) {
          const parent = visible.find((item) => item.node.id === current.parentId);
          if (parent) {
            this.focusVisibleNode(parent);
          }
        }
        event.preventDefault();
        break;
      case 'Home':
        this.focusVisibleNode(visible[0]);
        event.preventDefault();
        break;
      case 'End':
        this.focusVisibleNode(visible[visible.length - 1]);
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        this.selectNode(current.node);
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  private focusVisibleNode(target: BuiVisibleTreeNode) {
    this.focusedId.set(target.node.id);
    if (this.selectionMode() === 'single') {
      this.selectedId.set(target.node.id);
    }
  }
}
