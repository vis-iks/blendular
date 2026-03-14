import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiShortcutComponent } from '../../atoms/shortcut/shortcut.component';

export interface BuiStatusBarItem {
  id: string;
  label: string;
  icon?: string;
  shortcut?: string[];
}

@Component({
  selector: 'bui-status-bar',
  standalone: true,
  imports: [CommonModule, BuiShortcutComponent],
  template: `
    <footer class="bui-status-bar">
      <div class="section">
        @for (item of leftItems(); track item.id) {
          <div class="status-item">
            @if (item.icon) {
              <span [ngClass]="'bl-icons-' + item.icon"></span>
            }
            <span>{{ item.label }}</span>
          </div>
        }
      </div>
      <div class="section right">
        @for (item of rightItems(); track item.id) {
          <div class="status-item">
            <span>{{ item.label }}</span>
            @if (item.shortcut?.length) {
              <bui-shortcut [keys]="item.shortcut!"></bui-shortcut>
            }
          </div>
        }
      </div>
    </footer>
  `,
  styles: [`
    .bui-status-bar {
      min-height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 0 8px;
      background: color-mix(in srgb, var(--bui-color-primary) 20%, var(--bui-surface-panel-header) 80%);
      border-top: 1px solid var(--bui-border-default);
      color: #fff;
      font-size: 11px;
    }
    .section {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .section.right {
      margin-left: auto;
    }
    .status-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiStatusBarComponent {
  leftItems = input<BuiStatusBarItem[]>([]);
  rightItems = input<BuiStatusBarItem[]>([]);
}

