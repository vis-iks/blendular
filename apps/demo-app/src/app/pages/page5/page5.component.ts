import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiTreeComponent, BuiTreeNode, BuiTreeAction } from '@blender-ui/core';

@Component({
  selector: 'app-page5',
  standalone: true,
  imports: [CommonModule, BuiTreeComponent],
  templateUrl: './page5.component.html',
  styleUrl: './page5.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page5Component {
  selectedNode = signal<string>('(none)');

  // Helper to create Outliner actions
  private outlinerActions(type: 'collection' | 'object'): BuiTreeAction[] {
    if (type === 'collection') {
      return [
        { id: 'toggle', icon: 'check_box', active: true },
        { id: 'visibility', icon: 'visibility', active: true },
        { id: 'render', icon: 'photo_camera', active: true }
      ];
    }
    return [
      { id: 'visibility', icon: 'visibility', active: true },
      { id: 'render', icon: 'photo_camera', active: true }
    ];
  }

  // Blender-like scene hierarchy with actions
  sceneTree: BuiTreeNode[] = [
    {
      id: 'scene', label: 'Scene Collection', icon: 'folder', expanded: true,
      checked: true,
      actions: this.outlinerActions('collection'),
      children: [
        {
          id: 'collection-1', label: 'Collection', icon: 'folder_open', expanded: true,
          checked: true,
          actions: this.outlinerActions('collection'),
          children: [
            { id: 'cube', label: 'Cube', icon: 'view_in_ar', actions: this.outlinerActions('object') },
            { id: 'camera', label: 'Camera', icon: 'photo_camera', actions: this.outlinerActions('object') },
            { id: 'light', label: 'Light', icon: 'light_mode', actions: this.outlinerActions('object') },
          ]
        },
        {
          id: 'collection-2', label: 'Characters', icon: 'folder_open',
          checked: true,
          actions: this.outlinerActions('collection'),
          children: [
            {
              id: 'armature', label: 'Armature', icon: 'accessibility_new',
              actions: this.outlinerActions('object'),
              children: [
                { id: 'mesh-body', label: 'Body', icon: 'view_in_ar', actions: this.outlinerActions('object') },
                { id: 'mesh-head', label: 'Head', icon: 'view_in_ar', actions: this.outlinerActions('object') },
              ]
            },
            { id: 'material-skin', label: 'Skin Material', icon: 'palette' },
          ]
        }
      ]
    }
  ];

  fileTree: BuiTreeNode[] = [
    {
      id: 'root', label: 'project/', icon: 'folder', expanded: true,
      children: [
        {
          id: 'src', label: 'src/', icon: 'folder', expanded: true,
          children: [
            { id: 'app-ts', label: 'app.component.ts', icon: 'code' },
            { id: 'main-ts', label: 'main.ts', icon: 'code' },
          ]
        },
        { id: 'package', label: 'package.json', icon: 'settings' },
      ]
    }
  ];

  onNodeSelected(node: BuiTreeNode) {
    this.selectedNode.set(node.label);
  }

  onActionSelected(event: { node: BuiTreeNode, action: BuiTreeAction }) {
    if (event.action.id === 'toggle') {
      // Toggle the node's checked state
      event.node.checked = !event.node.checked;
      event.action.icon = event.node.checked ? 'check_box' : 'check_box_outline_blank';
    } else {
      // Toggle the action itself (visibility/render)
      event.action.active = !event.action.active;
    }
    
    // Trigger CDR
    this.sceneTree = [...this.sceneTree];
  }
}
