import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from '../menu/menubar.component';
import { MenuItem } from '../menu/menu.interface';
import { BuiWorkspaceTabsComponent } from '../workspace-tabs/workspace-tabs.component';

@Component({
  selector: 'bui-top-bar',
  standalone: true,
  imports: [CommonModule, MenubarComponent, BuiWorkspaceTabsComponent],
  template: `
    <div class="bui-top-bar">
      <div class="bui-top-bar-left">
        <div class="bui-logo-container">
          <span class="bl-icons-blender bui-logo"></span>
        </div>
        <bui-menubar [items]="menuItems()"></bui-menubar>
      </div>

      <div class="bui-top-bar-center">
        <bui-workspace-tabs 
          [tabs]="workspaces()" 
          [(activeTab)]="activeWorkspace"
          (addTab)="onAddWorkspace()">
        </bui-workspace-tabs>
      </div>

      <div class="bui-top-bar-right">
        <div class="bui-scene-info">
          <div class="bui-info-item">
            <span class="bl-icons-scene"></span>
            <span>Scene</span>
          </div>
          <div class="bui-info-item">
            <span class="bl-icons-view_layer"></span>
            <span>ViewLayer</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @use '../../styles/variables' as *;

    .bui-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      background-color: #212121; // Darker top bar in Blender
      border-bottom: 1px solid $bui-border-dark;
      padding: 0 4px;
      font-family: var(--bui-font-display, 'Inter', system-ui, sans-serif);
      font-size: 11px;
    }

    .bui-top-bar-left {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
    }

    .bui-logo-container {
      display: flex;
      align-items: center;
      padding: 0 4px;
    }

    .bui-logo {
      font-size: 14px;
      color: #e37d36; // Blender orange
      cursor: default;
    }

    .bui-top-bar-center {
      display: flex;
      justify-content: center;
      flex: 1;
      height: 100%;
    }

    .bui-top-bar-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      gap: 12px;
      padding-right: 4px;
    }

    .bui-scene-info {
      display: flex;
      gap: 16px;
      color: $bui-text-color;
      opacity: 0.8;
    }

    .bui-info-item {
      display: flex;
      align-items: center;
      gap: 4px;
      
      span {
        cursor: default;
      }

      .bl-icons-scene, .bl-icons-view_layer {
        font-size: 14px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTopBarComponent {
  menuItems = input<MenuItem[]>([]);
  workspaces = input<string[]>(['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading', 'Animation', 'Rendering']);
  activeWorkspace = model<string>('Layout');

  onAddWorkspace() {
    // Logic for adding a workspace could be here or emitted
  }
}
