import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiBadgeComponent } from '../../atoms/badge/badge.component';

export interface BuiExplorerRowAction {
  id: string;
  icon: string;
}

@Component({
  selector: 'bui-explorer-row',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent],
  template: `
    <button type="button" class="bui-explorer-row" [class.selected]="selected()" (click)="rowClick.emit()">
      @if (expandable()) {
        <span class="bl-icons-rightarrow expand-icon" [class.expanded]="expanded()" (click)="toggleExpanded($event)"></span>
      }
      @if (icon()) {
        <span class="row-icon" [ngClass]="'bl-icons-' + icon()"></span>
      }
      <span class="row-label">{{ label() }}</span>
      @if (badge()) {
        <bui-badge [text]="badge()!"></bui-badge>
      }
      <span class="spacer"></span>
      @for (action of actions(); track action.id) {
        <span class="row-action" [ngClass]="'bl-icons-' + action.icon" (click)="onActionClick($event, action.id)"></span>
      }
    </button>
  `,
  styles: [`
    .bui-explorer-row {
      width: 100%;
      min-height: 24px;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border: none;
      background: transparent;
      color: var(--bui-color-text);
      cursor: pointer;
      font: inherit;
    }
    .bui-explorer-row.selected {
      background: color-mix(in srgb, var(--bui-color-primary) 28%, transparent);
    }
    .expand-icon {
      font-size: 10px;
      transition: transform var(--bui-motion-fast);
    }
    .expand-icon.expanded {
      transform: rotate(90deg);
    }
    .row-icon {
      color: var(--bui-color-text-muted);
    }
    .row-label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .spacer {
      flex: 1;
    }
    .row-action {
      color: var(--bui-color-text-muted);
      font-size: 12px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiExplorerRowComponent {
  label = input.required<string>();
  icon = input<string | null>(null);
  badge = input<string | null>(null);
  actions = input<BuiExplorerRowAction[]>([]);
  selected = input(false);
  expandable = input(false);
  expanded = model(false);

  rowClick = output<void>();
  actionClick = output<string>();

  toggleExpanded(event: MouseEvent) {
    event.stopPropagation();
    this.expanded.set(!this.expanded());
  }

  onActionClick(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.actionClick.emit(id);
  }
}

