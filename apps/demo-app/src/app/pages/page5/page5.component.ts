import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiTreeComponent, BuiTreeNode, BuiTreeAction, BuiDatagridComponent, DatagridColumn, BuiDatagridSort, BuiDatagridRow } from '@blender-ui/core';

@Component({
  selector: 'app-page5',
  standalone: true,
  imports: [CommonModule, BuiTreeComponent, BuiDatagridComponent],
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
        { id: 'toggle', icon: 'checkbox_hlt', active: true },
        { id: 'visibility', icon: 'hide_off', active: true },
        { id: 'render', icon: 'camera_data', active: true }
      ];
    }
    return [
      { id: 'visibility', icon: 'hide_off', active: true },
      { id: 'render', icon: 'camera_data', active: true }
    ];
  }

  // Blender-like scene hierarchy with actions
  sceneTree: BuiTreeNode[] = [
    {
      id: 'scene', label: 'Scene Collection', icon: 'outliner_collection', expanded: true,
      checked: true,
      actions: this.outlinerActions('collection'),
      children: [
        {
          id: 'collection-1', label: 'Collection', icon: 'outliner_collection', expanded: true,
          checked: true,
          actions: this.outlinerActions('collection'),
          children: [
            { id: 'cube', label: 'Cube', icon: 'outliner_ob_mesh', actions: this.outlinerActions('object') },
            { id: 'camera', label: 'Camera', icon: 'camera_data', actions: this.outlinerActions('object') },
            { id: 'light', label: 'Light', icon: 'light', actions: this.outlinerActions('object') },
          ]
        },
        {
          id: 'collection-2', label: 'Characters', icon: 'outliner_collection',
          checked: true,
          actions: this.outlinerActions('collection'),
          children: [
            {
              id: 'armature', label: 'Armature', icon: 'armature_data',
              actions: this.outlinerActions('object'),
              children: [
                { id: 'mesh-body', label: 'Body', icon: 'outliner_ob_mesh', actions: this.outlinerActions('object') },
                { id: 'mesh-head', label: 'Head', icon: 'outliner_ob_mesh', actions: this.outlinerActions('object') },
              ]
            },
            { id: 'material-skin', label: 'Skin Material', icon: 'material' },
          ]
        }
      ]
    }
  ];

  fileTree: BuiTreeNode[] = [
    {
      id: 'root', label: 'project/', icon: 'filebrowser', expanded: true,
      children: [
        {
          id: 'src', label: 'src/', icon: 'filebrowser', expanded: true,
          children: [
            { id: 'app-ts', label: 'app.component.ts', icon: 'text' },
            { id: 'main-ts', label: 'main.ts', icon: 'text' },
          ]
        },
        { id: 'package', label: 'package.json', icon: 'preferences' },
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
      event.action.icon = event.node.checked ? 'checkbox_hlt' : 'checkbox_dehlt';
    } else {
      // Toggle the action itself (visibility/render)
      event.action.active = !event.action.active;
    }
    
    // Trigger CDR
    this.sceneTree = [...this.sceneTree];
  }

  // --- Datagrid (Spreadsheet) Demo ---
  gridColumns: DatagridColumn[] = [
    { key: 'id', label: 'ID', width: '50px', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'size', label: 'Size', sortable: true }
  ];

  private defaultData: BuiDatagridRow[] = [
    { id: 1, name: 'Suzanne', type: 'Mesh', size: '2 MB' },
    { id: 2, name: 'Camera', type: 'Camera', size: '1 KB' },
    { id: 3, name: 'Point Light', type: 'Light', size: '1 KB' },
    { id: 4, name: 'Rig', type: 'Armature', size: '150 KB' },
    { id: 5, name: 'Floor', type: 'Mesh', size: '5 MB' },
    { id: 6, name: 'HDRI', type: 'Image', size: '25 MB' }
  ];

  gridData = signal(this.defaultData);
  gridSort = signal<BuiDatagridSort | null>(null);
  selectedGridRowId = signal<string | number | null>(null);
  selectedGridRow = computed(() => this.gridData().find((row) => row.id === this.selectedGridRowId()) ?? null);

  onGridSort(event: BuiDatagridSort | null) {
    this.gridSort.set(event);

    if (!event) {
      this.gridData.set(this.defaultData);
      return;
    }

    const sorted = [...this.defaultData].sort((a: BuiDatagridRow, b: BuiDatagridRow) => {
      const valA = a[event.column];
      const valB = b[event.column];
      
      let comparison = 0;
      if (typeof valA === 'number' && typeof valB === 'number') {
        comparison = valA - valB;
      } else {
        comparison = String(valA).localeCompare(String(valB));
      }

      return event.direction === 'asc' ? comparison : -comparison;
    });

    this.gridData.set(sorted);
  }
}
