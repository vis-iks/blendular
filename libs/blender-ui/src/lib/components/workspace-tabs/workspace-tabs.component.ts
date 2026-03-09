import { Component, ChangeDetectionStrategy, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-workspace-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-workspace-tabs">
      @for (tab of tabs(); track tab) {
        <button
          class="bui-workspace-tab"
          [class.active]="tab === activeTab()"
          (click)="selectTab(tab)"
        >
          {{ tab }}
        </button>
      }
      <button class="bui-add-workspace" (click)="addTab.emit()">+</button>
    </div>
  `,
  styles: [`
    @use '../../styles/variables' as *;

    .bui-workspace-tabs {
      display: flex;
      align-items: center;
      height: 100%;
      overflow-x: auto;
      scrollbar-width: none;
      user-select: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .bui-workspace-tab {
      height: 100%;
      padding: 0 12px;
      background: transparent;
      border: none;
      color: $bui-text-color;
      font-family: var(--bui-font-display, 'Inter', system-ui, sans-serif);
      font-size: 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      white-space: nowrap;
      opacity: 0.7;
      transition: opacity 0.1s, background-color 0.1s;
      border-radius: 4px 4px 0 0;
      margin-top: 2px; // slightly down

      &:hover {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.05);
      }

      &.active {
        opacity: 1;
        background-color: #3d3d3d; // Blender-like active tab color in top bar
        color: #ffffff;
        font-weight: 500;
      }
    }

    .bui-add-workspace {
      height: 100%;
      padding: 0 8px;
      background: transparent;
      border: none;
      color: $bui-text-color;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      opacity: 0.5;

      &:hover {
        opacity: 1;
        color: #ffffff;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiWorkspaceTabsComponent {
  tabs = input<string[]>([]);
  activeTab = model<string>('');
  addTab = output<void>();

  selectTab(tab: string) {
    this.activeTab.set(tab);
  }
}
