import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-shortcut',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="bui-shortcut">
      @for (part of keys(); track part; let last = $last) {
        <kbd>{{ part }}</kbd>
        @if (!last) {
          <span class="sep">+</span>
        }
      }
    </span>
  `,
  styles: [`
    .bui-shortcut {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: var(--bui-font-size-xs);
      color: var(--bui-color-text-muted);
    }
    kbd {
      padding: 1px 4px;
      border-radius: var(--bui-radius-sm);
      border: 1px solid var(--bui-border-default);
      background: var(--bui-surface-panel-header);
      color: var(--bui-color-text);
      font: inherit;
      min-width: 16px;
      text-align: center;
    }
    .sep {
      opacity: 0.6;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiShortcutComponent {
  keys = input<string[]>([]);
}

