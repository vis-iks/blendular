import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiTone } from '../../../foundation/types';

@Component({
  selector: 'bui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="bui-badge" [class]="tone()">{{ text() }}</span>`,
  styles: [`
    .bui-badge {
      display: inline-flex;
      align-items: center;
      min-height: 16px;
      padding: 0 6px;
      border-radius: var(--bui-radius-md);
      font-size: var(--bui-font-size-xs);
      background: color-mix(in srgb, var(--bui-surface-panel-header) 88%, white 6%);
      color: var(--bui-color-text-muted);
      border: 1px solid var(--bui-border-default);
    }
    .bui-badge.info { color: var(--bui-color-info); }
    .bui-badge.success { color: var(--bui-color-success); }
    .bui-badge.warning { color: var(--bui-color-warning); }
    .bui-badge.danger { color: var(--bui-color-danger); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiBadgeComponent {
  text = input.required<string>();
  tone = input<BuiTone>('neutral');
}

