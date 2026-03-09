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
  MenuComponent,
  MenuItem,
  BuiPopoverDirective,
  BuiEditorTypePopoverComponent
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
    MenubarComponent,
    BuiPopoverDirective,
    BuiEditorTypePopoverComponent,
    MenuComponent
  ],
  template: `
    <div class="workspace-demo-container">
      <bui-top-bar
        [workspaces]="workspaces()"
        [activeWorkspace]="activeWorkspace()"
        (activeWorkspaceChange)="activeWorkspace.set($event)"
        [menuItems]="mainMenu"
      ></bui-top-bar>

      <div class="workspace-content">
        @if (activeWorkspace() === 'Layout') {
          <div class="viewport-panel">
            <!-- Viewport Toolbar -->
            <bui-toolbar>
              <bui-toolbar-section align="left">
                <bui-toolbar-group>
                  <bui-toolbar-dropdown [buiPopover]="editorTypePopover">
                    <span class="bl-icons-view3d"></span>
                  </bui-toolbar-dropdown>
                </bui-toolbar-group>

                <bui-toolbar-group>
                  <bui-toolbar-dropdown [activeBlue]="true" [buiPopover]="objectModePopover">
                    <span [class]="'bl-icons-' + getModeIcon(currentMode())" style="font-size: 14px; margin-right: 4px;"></span>
                    <span class="toolbar-label">{{ currentMode() }}</span>
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

    <ng-template #editorTypePopover>
      <bui-editor-type-popover [columns]="editorColumns"></bui-editor-type-popover>
    </ng-template>

    <ng-template #objectModePopover>
      <bui-menu [items]="objectModesMenu"></bui-menu>
    </ng-template>
  `,
  styles: [`
    .workspace-demo-container {
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
  currentMode = signal('Object Mode');

  editorColumns = [
    {
      category: 'General',
      items: [
        { label: '3D Viewport', icon: 'bl-icons-view3d' },
        { label: 'Image Editor', icon: 'bl-icons-image_data' },
        { label: 'UV Editor', icon: 'bl-icons-uv' },
        { label: 'Compositor', icon: 'bl-icons-node_compositor' },
        { label: 'Texture Node Editor', icon: 'bl-icons-node_texture' },
        { label: 'Geometry Node Editor', icon: 'bl-icons-node_geometry' },
        { label: 'Shader Editor', icon: 'bl-icons-node_material' },
        { label: 'Video Sequencer', icon: 'bl-icons-sequencer' },
        { label: 'Movie Clip Editor', icon: 'bl-icons-movie' }
      ]
    },
    {
      category: 'Animation',
      items: [
        { label: 'Dope Sheet', icon: 'bl-icons-dopesheet' },
        { label: 'Timeline', icon: 'bl-icons-time' },
        { label: 'Graph Editor', icon: 'bl-icons-graph' },
        { label: 'Drivers', icon: 'bl-icons-driver' },
        { label: 'Nonlinear Animation', icon: 'bl-icons-nla' }
      ]
    },
    {
      category: 'Scripting',
      items: [
        { label: 'Text Editor', icon: 'bl-icons-text_data' },
        { label: 'Python Console', icon: 'bl-icons-console' },
        { label: 'Info', icon: 'bl-icons-info' }
      ]
    },
    {
      category: 'Data',
      items: [
        { label: 'Outliner', icon: 'bl-icons-outliner' },
        { label: 'Properties', icon: 'bl-icons-properties' },
        { label: 'File Browser', icon: 'bl-icons-file_browser' },
        { label: 'Asset Browser', icon: 'bl-icons-asset_manager' },
        { label: 'Spreadsheet', icon: 'bl-icons-spreadsheet' }
      ]
    }
  ];

  objectModesMenu: MenuItem[] = [
    { label: 'Object Mode', icon: 'object_data', active: true, action: () => this.setMode('Object Mode') },
    { label: 'Edit Mode', icon: 'editmode_hlt', action: () => this.setMode('Edit Mode') },
    { label: 'Sculpt Mode', icon: 'sculptmode_hlt', action: () => this.setMode('Sculpt Mode') },
    { label: 'Vertex Paint', icon: 'vpaint_hlt', action: () => this.setMode('Vertex Paint') },
    { label: 'Weight Paint', icon: 'wpaint_hlt', action: () => this.setMode('Weight Paint') },
    { label: 'Texture Paint', icon: 'tpaint_hlt', action: () => this.setMode('Texture Paint') }
  ];

  setMode(mode: string) {
    this.currentMode.set(mode);
    this.objectModesMenu.forEach(item => {
      item.active = item.label === mode;
    });
  }

  getModeIcon(mode: string): string {
    const item = this.objectModesMenu.find(m => m.label === mode);
    return item?.icon || 'object_data';
  }

  viewportMenu: MenuItem[] = [
    { label: 'View', items: [{ label: 'Toolbar' }, { label: 'Sidebar' }] },
    { label: 'Select', items: [{ label: 'All', shortcut: 'A' }, { label: 'None', shortcut: 'Alt A' }] },
    { 
      label: 'Add', 
      items: [
        { 
          label: 'Mesh', 
          icon: 'mesh', 
          items: [
            { label: 'Plane', icon: 'mesh_plane' },
            { label: 'Cube', icon: 'mesh_cube' },
            { label: 'Circle', icon: 'mesh_circle' },
            { label: 'UV Sphere', icon: 'mesh_uvsphere' },
            { label: 'Ico Sphere', icon: 'mesh_icosphere' },
            { label: 'Cylinder', icon: 'mesh_cylinder' },
            { label: 'Cone', icon: 'mesh_cone' },
            { label: 'Torus', icon: 'mesh_torus' },
            { separator: true },
            { label: 'Grid', icon: 'mesh_grid' },
            { label: 'Monkey', icon: 'mesh_monkey' },
            { separator: true },
            { label: 'Bolt', icon: 'mesh_bolt' }
          ] 
        },
        { label: 'Curve', icon: 'curve', items: [{ label: 'Bézier' }, { label: 'Circle' }] },
        { label: 'Surface', icon: 'surface' },
        { label: 'Metaball', icon: 'meta' },
        { label: 'Text', icon: 'text' },
        { label: 'Point Cloud', icon: 'pointcloud' },
        { label: 'Volume', icon: 'volume' },
        { label: 'Grease Pencil', icon: 'greasepencil' },
        { separator: true },
        { label: 'Armature', icon: 'armature' },
        { label: 'Lattice', icon: 'lattice' },
        { separator: true },
        { label: 'Empty', icon: 'empty' },
        { label: 'Image', icon: 'image' },
        { separator: true },
        { label: 'Light', icon: 'light' },
        { label: 'Light Probe', icon: 'lightprobe' },
        { separator: true },
        { label: 'Camera', icon: 'camera' },
        { label: 'Speaker', icon: 'speaker' },
        { label: 'Force Field', icon: 'forcefield' },
        { label: 'Collection Instance', icon: 'collection' },
        { separator: true },
        { label: 'Sketch' }
      ] 
    },
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
