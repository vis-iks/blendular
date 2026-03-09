import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiTopBarComponent } from '@blender-ui/core';
import { MenuItem } from '@blender-ui/core';

@Component({
  selector: 'app-workspace-demo',
  standalone: true,
  imports: [CommonModule, BuiTopBarComponent],
  template: `
    <div class="demo-container">
      <bui-top-bar 
        [menuItems]="mainMenu" 
        [workspaces]="workspaces()" 
        [(activeWorkspace)]="activeWorkspace"
      ></bui-top-bar>
      
      <div class="workspace-content">
        <div class="placeholder-viewport">
          <div class="viewport-overlay">
            <h2>Active Workspace: {{ activeWorkspace() }}</h2>
            <p>This page demonstrates the Blender-style Top Bar with Menu and Workspace Tabs.</p>
          </div>
        </div>
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
      padding: 1px; // gutter
      background-color: #000;
      overflow: hidden;
    }

    .placeholder-viewport {
      width: 100%;
      height: 100%;
      background-color: #393939;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceDemoComponent {
  workspaces = signal(['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Texture Paint', 'Shading', 'Animation', 'Rendering', 'Compositing', 'Geometry Nodes', 'Scripting']);
  activeWorkspace = signal('Layout');

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
