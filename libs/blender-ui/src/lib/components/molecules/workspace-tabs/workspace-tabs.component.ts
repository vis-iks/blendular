import { ChangeDetectionStrategy, Component, input, model, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiIconButtonComponent } from '../../atoms/icon-button/icon-button.component';

export interface BuiWorkspaceTab {
  id: string;
  label: string;
  icon?: string;
  dirty?: boolean;
  closable?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'bui-workspace-tabs',
  standalone: true,
  imports: [CommonModule, BuiIconButtonComponent],
  template: `
    <div class="bui-workspace-tabs" role="tablist" aria-label="Workspace tabs">
      <div class="bui-workspace-tabs__scroll">
        @for (tab of normalizedTabs(); track tab.id) {
          <button
            type="button"
            role="tab"
            class="bui-workspace-tab"
            [class.active]="tab.id === activeTab()"
            [class.disabled]="tab.disabled"
            [attr.aria-selected]="tab.id === activeTab()"
            [disabled]="tab.disabled"
            (click)="selectTab(tab.id)"
          >
            @if (tab.icon) {
              <span class="tab-icon" [ngClass]="'bl-icons-' + tab.icon"></span>
            }
            <span class="tab-label">{{ tab.label }}</span>
            @if (tab.dirty) {
              <span class="dirty-indicator"></span>
            }
            @if (tab.closable) {
              <span
                class="close-icon bl-icons-x"
                (click)="closeTab($event, tab.id)"
              ></span>
            }
          </button>
        }
      </div>

      @if (showAddButton()) {
        <bui-icon-button
          class="add-button"
          icon="add"
          label="Add workspace"
          size="sm"
          variant="ghost"
          (clicked)="addTab.emit()"
        ></bui-icon-button>
      }
    </div>
  `,
  styles: [`
    .bui-workspace-tabs {
      display: flex;
      align-items: center;
      gap: var(--bui-spacing-sm);
      width: 100%;
      min-width: 0;
      height: 100%;
    }
    .bui-workspace-tabs__scroll {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 2px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .bui-workspace-tabs__scroll::-webkit-scrollbar {
      display: none;
    }
    .bui-workspace-tab {
      height: calc(100% - 2px);
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      margin-top: 2px;
      border: none;
      border-radius: 4px 4px 0 0;
      background: transparent;
      color: var(--bui-color-text);
      white-space: nowrap;
      cursor: pointer;
      opacity: 0.8;
      font: inherit;
    }
    .bui-workspace-tab:hover:not(.disabled) {
      opacity: 1;
      background: rgba(255, 255, 255, 0.06);
    }
    .bui-workspace-tab.active {
      opacity: 1;
      background: var(--bui-surface-tab-active);
      color: #fff;
    }
    .bui-workspace-tab.disabled {
      opacity: 0.45;
      cursor: default;
    }
    .tab-icon {
      font-size: var(--bui-icon-size-sm);
    }
    .dirty-indicator {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--bui-color-warning);
      flex-shrink: 0;
    }
    .close-icon {
      font-size: 10px;
      opacity: 0.6;
      flex-shrink: 0;
    }
    .bui-workspace-tab:hover .close-icon {
      opacity: 1;
    }
    .add-button {
      flex-shrink: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiWorkspaceTabsComponent {
  tabs = input<Array<string | BuiWorkspaceTab>>([]);
  activeTab = model<string>('');
  showAddButton = input(true);

  addTab = output<void>();
  tabSelected = output<string>();
  tabClosed = output<string>();

  normalizedTabs = computed<BuiWorkspaceTab[]>(() => this.tabs().map((tab) => (
    typeof tab === 'string'
      ? { id: tab, label: tab }
      : { closable: false, ...tab }
  )));

  selectTab(id: string) {
    this.activeTab.set(id);
    this.tabSelected.emit(id);
  }

  closeTab(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.tabClosed.emit(id);
  }
}
