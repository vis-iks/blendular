import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiBadgeComponent } from '../../atoms/badge/badge.component';

export interface BuiActivityBarItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  disabled?: boolean;
}

@Component({
  selector: 'bui-activity-bar',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent],
  template: `
    <nav class="bui-activity-bar" [class.right]="position() === 'right'">
      @for (item of items(); track item.id) {
        <button
          type="button"
          class="activity-item"
          [class.active]="item.id === activeItemId()"
          [disabled]="item.disabled"
          [title]="item.label"
          (click)="selectItem(item.id)"
        >
          <span [ngClass]="'bl-icons-' + item.icon"></span>
          @if (item.badge) {
            <bui-badge [text]="item.badge"></bui-badge>
          }
        </button>
      }
    </nav>
  `,
  styles: [`
    .bui-activity-bar {
      width: 44px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 8px 6px;
      background: color-mix(in srgb, var(--bui-surface-app) 86%, black 14%);
      border-right: 1px solid var(--bui-border-default);
    }
    .bui-activity-bar.right {
      border-right: none;
      border-left: 1px solid var(--bui-border-default);
    }
    .activity-item {
      width: 30px;
      min-height: 30px;
      border: none;
      border-radius: var(--bui-radius-md);
      background: transparent;
      color: var(--bui-color-text-muted);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    }
    .activity-item.active {
      background: color-mix(in srgb, var(--bui-color-primary) 28%, transparent);
      color: #fff;
    }
    .activity-item:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.06);
      color: #fff;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiActivityBarComponent {
  items = input<BuiActivityBarItem[]>([]);
  position = input<'left' | 'right'>('left');
  activeItemId = model<string | null>(null);

  itemSelected = output<string>();

  selectItem(id: string) {
    this.activeItemId.set(id);
    this.itemSelected.emit(id);
  }
}

