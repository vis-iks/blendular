import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BuiTopBarComponent, 
  BuiToolbarComponent, 
  BuiToolbarSectionComponent, 
  BuiToolbarGroupComponent, 
  BuiToolbarButtonComponent, 
  BuiToolbarDropdownComponent,
  MenubarComponent,
  MenuItem 
} from '@blender-ui/core';

@Component({
  selector: 'app-workspace-demo',
  standalone: true,
  imports: [
    CommonModule, 
    BuiTopBarComponent, 
    BuiToolbarComponent, 
    BuiToolbarSectionComponent, 
    BuiToolbarGroupComponent, 
    BuiToolbarButtonComponent, 
    BuiToolbarDropdownComponent,
    MenubarComponent
  ],
  template: `
    <div class="demo-container">
      <bui-top-bar 
        [menuItems]="mainMenu" 
        [workspaces]="workspaces()" 
        [(activeWorkspace)]="activeWorkspace"
      ></bui-top-bar>
      
      <div class="workspace-content">
        @if (activeWorkspace() === 'Layout') {
          <div class="viewport-panel">
            <!-- Viewport Toolbar -->
            <bui-toolbar>
              <bui-toolbar-section align="left">
                <bui-toolbar-group>
                  <bui-toolbar-dropdown>
                    <span class="bl-icons-view3d"></span>
                  </bui-toolbar-dropdown>
                </bui-toolbar-group>
                
                <bui-toolbar-group>
                  <bui-toolbar-dropdown>
                    <span class="bl-icons-checkbox_dehlt" style="font-size: 14px; margin-right: 4px;"></span>
                    <span class="toolbar-label">Object Mode</span>
                  </bui-toolbar-dropdown>
                </bui-toolbar-group>

                <bui-menubar [items]="viewportMenu"></bui-menubar>
              </bui-toolbar-section>

              <bui-toolbar-section align="right">
                <bui-toolbar-group>
                  <bui-toolbar-dropdown icon="bl-icons-gizmo"></bui-toolbar-dropdown>
                  <bui-toolbar-dropdown [hideArrow]="true">
                    <span class="bl-icons-cursor"></span>
                  </bui-toolbar-dropdown>
                  <bui-toolbar-dropdown [hideArrow]="true" style="padding-right: 8px;">
                    <span class="toolbar-label">Options</span>
                    <span class="bl-icons-rightarrow_thin drop-arrow" style="margin-left: 2px;"></span>
                  </bui-toolbar-dropdown>
                </bui-toolbar-group>
              </bui-toolbar-section>
            </bui-toolbar>

            <div class="viewport-canvas">
              <div class="viewport-overlay">
                <h2>Active Workspace: Layout</h2>
                <p>This layout includes the main Top Bar and a specific Panel Toolbar (like Blender's 3D Viewport).</p>
              </div>
            </div>
          </div>
        } @else {
          <div class="placeholder-content">
            <div class="viewport-overlay">
              <h2>Active Workspace: {{ activeWorkspace() }}</h2>
              <p>This workspace has a different layout. Switch back to <b>Layout</b> to see the viewport toolbar.</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .demo-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #1e1e1e;
    }

    .workspace-content {
      flex: 1;
      padding: 1px; // gutter between bars/panels
      background-color: #000;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .viewport-panel, .placeholder-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #393939;
      border-radius: 4px;
      overflow: hidden;
    }

    .placeholder-content {
      align-items: center;
      justify-content: center;
    }

    .viewport-canvas {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .viewport-overlay {
      text-align: center;
      color: #9ca3af;
      
      h2 {
        color: #fff;
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 24px;
      }
    }

    .toolbar-label {
      font-size: 11px;
      color: #ccc;
    }

    .drop-arrow {
      font-size: 10px;
      opacity: 0.6;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoComponent {
  workspaces = signal(['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Texture Paint', 'Shading', 'Animation', 'Rendering', 'Compositing', 'Geometry Nodes', 'Scripting']);
  activeWorkspace = signal('Layout');

  viewportMenu: MenuItem[] = [
    { label: 'View', items: [{ label: 'Toolbar' }, { label: 'Sidebar' }] },
    { label: 'Select', items: [{ label: 'All' }, { label: 'None' }] },
    { label: 'Add', items: [{ label: 'Mesh' }, { label: 'Curve' }] },
    { label: 'Object', items: [{ label: 'Transform' }, { label: 'Set Origin' }] },
  ];

  mainMenu: MenuItem[] = [
    {
      label: 'File',
      items: [
        { label: 'New', shortcut: 'Ctrl N' },
        { label: 'Open...', shortcut: 'Ctrl O' },
        { label: 'Open Recent', items: [{ label: 'project1.blend' }, { label: 'character_final.blend' }] },
        { separator: true },
        { label: 'Save', shortcut: 'Ctrl S' },
        { label: 'Save As...', shortcut: 'Ctrl Shift S' },
        { separator: true },
        { label: 'Import', items: [{ label: 'FBX (.fbx)' }, { label: 'OBJ (.obj)' }, { label: 'gLTF 2.0 (.glb/.gltf)' }] },
        { label: 'Export', items: [{ label: 'FBX (.fbx)' }, { label: 'OBJ (.obj)' }, { label: 'gLTF 2.0 (.glb/.gltf)' }] },
        { separator: true },
        { label: 'Quit', shortcut: 'Ctrl Q' },
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: 'Ctrl Z' },
        { label: 'Redo', shortcut: 'Ctrl Shift Z' },
        { separator: true },
        { label: 'Menu Search...', shortcut: 'F3' },
        { label: 'Operator Search...', shortcut: 'F3' },
        { separator: true },
        { label: 'Preferences...' },
      ]
    },
    {
      label: 'Render',
      items: [
        { label: 'Render Image', shortcut: 'F12' },
        { label: 'Render Animation', shortcut: 'Ctrl F12' },
        { label: 'View Render', shortcut: 'F11' },
        { label: 'View Animation', shortcut: 'Ctrl F11' },
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'New Window' },
        { label: 'New Main Window' },
        { label: 'Toggle Window Fullscreen' },
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Manual' },
        { label: 'Tutorials' },
        { label: 'Support' },
        { separator: true },
        { label: 'About Blender' },
      ]
    }
  ];
}
