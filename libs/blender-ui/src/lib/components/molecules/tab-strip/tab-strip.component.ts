import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BuiTabStripItem {
  id: string;
  label: string;
  icon?: string;
  closable?: boolean;
  dirty?: boolean;
}

@Component({
  selector: 'bui-tab-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-tab-strip">
      <div class="tabs">
        @for (tab of tabs(); track tab.id) {
          <button
            type="button"
            class="tab"
            [class.active]="tab.id === activeTabId()"
            (click)="selectTab(tab.id)"
          >
            @if (tab.icon) {
              <span [ngClass]="'bl-icons-' + tab.icon"></span>
            }
            <span>{{ tab.label }}</span>
            @if (tab.dirty) {
              <span class="dirty-indicator"></span>
            }
            @if (tab.closable) {
              <span class="close bl-icons-x" (click)="closeTab($event, tab.id)"></span>
            }
          </button>
        }
      </div>
      <div class="actions">
        <ng-content select="[tabStripActions]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .bui-tab-strip {
      min-height: 32px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 8px;
      background: var(--bui-surface-panel-header);
      border-bottom: 1px solid var(--bui-border-default);
    }
    .tabs {
      min-width: 0;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 2px;
      overflow-x: auto;
    }
    .tab {
      min-height: 26px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border: none;
      border-radius: 4px 4px 0 0;
      background: transparent;
      color: var(--bui-color-text);
      cursor: pointer;
      font: inherit;
      white-space: nowrap;
    }
    .tab.active {
      background: var(--bui-surface-tab-active);
      color: #fff;
    }
    .dirty-indicator {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--bui-color-warning);
    }
    .close {
      font-size: 10px;
      opacity: 0.6;
    }
    .actions {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTabStripComponent {
  tabs = input<BuiTabStripItem[]>([]);
  activeTabId = model<string | null>(null);

  tabSelected = output<string>();
  tabClosed = output<string>();

  selectTab(id: string) {
    this.activeTabId.set(id);
    this.tabSelected.emit(id);
  }

  closeTab(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.tabClosed.emit(id);
  }
}
