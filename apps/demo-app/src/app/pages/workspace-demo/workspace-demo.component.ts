import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  BuiEditorTypePopoverComponent,
  BuiSplitterComponent,
  BuiTabsComponent,
  BuiTabComponent,
  BuiTreeComponent,
  BuiTreeNode,
  BuiTreeAction,
  BuiPanelComponent,
  BuiFieldComponent,
  BuiFieldGroupComponent,
  BuiSliderComponent,
  BuiDropdownComponent,
  BuiDropdownOption,
  BuiSegmentOption,
  BuiSegmentedControlComponent,
  BuiBreadcrumbsComponent,
  BreadcrumbItem,
  BuiDatalistComponent,
  BuiDatalistAction,
  BuiDatalistItem,
  BuiDatalistItemActionsDirective,
  BuiDatagridComponent,
  DatagridColumn,
  BuiDatagridSort,
  BuiDatagridRow
} from '@blender-ui/core';

@Component({
  selector: 'app-workspace-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
    BuiTopBarComponent,
    BuiToolbarComponent,
    BuiToolbarSectionComponent,
    BuiToolbarGroupComponent,
    BuiToolbarButtonComponent,
    BuiToolbarDropdownComponent,
    MenubarComponent,
    BuiPopoverDirective,
    BuiEditorTypePopoverComponent,
    MenuComponent,
    BuiSplitterComponent,
    BuiTabsComponent,
    BuiTabComponent,
    BuiTreeComponent,
    BuiPanelComponent,
    BuiFieldComponent,
    BuiFieldGroupComponent,
    BuiSliderComponent,
    BuiDropdownComponent,
    BuiSegmentedControlComponent,
    BuiBreadcrumbsComponent,
    BuiDatalistComponent,
    BuiDatalistItemActionsDirective,
    BuiDatagridComponent
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
          <bui-splitter orientation="horizontal" [initialSize]="60">
            <div first class="viewport-panel">
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
                    <bui-toolbar-btn>
                      <span class="bl-icons-orientation_global"></span>
                      <span class="toolbar-label">Global</span>
                      <span class="bl-icons-rightarrow_thin drop-arrow" style="margin-left: 2px;"></span>
                    </bui-toolbar-btn>
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
              <div style="background-color: #282828; border-bottom: 1px solid #1e1e1e;">
                <bui-breadcrumbs [items]="activePath()" (itemClick)="onBreadcrumbClick($event)"></bui-breadcrumbs>
              </div>

              <div class="viewport-canvas">
                <div class="viewport-overlay">
                  <h2>3D Viewport</h2>
                  <p>Active Workspace: <b>Layout</b></p>
                  <div class="viewport-actions">
                    <bui-toolbar-btn>Add Cube</bui-toolbar-btn>
                    <bui-toolbar-btn>Select All</bui-toolbar-btn>
                  </div>
                </div>
              </div>
            </div>

            <div second class="sidebar-panel">
              <bui-splitter orientation="vertical" [initialSize]="30">
                <div first class="outliner-container">
                  <bui-toolbar>
                    <bui-toolbar-section align="left">
                      <bui-toolbar-group>
                         <bui-toolbar-dropdown [hideArrow]="true" style="padding-left: 8px;">
                           <span class="bl-icons-outliner"></span>
                         </bui-toolbar-dropdown>
                      </bui-toolbar-group>
                      <bui-menubar [items]="outlinerMenu"></bui-menubar>
                    </bui-toolbar-section>
                  </bui-toolbar>
                  <div class="sidebar-content outliner-content">
                    <bui-tree 
                      [nodes]="sceneTree" 
                      (nodeSelected)="onNodeSelected($event)"
                      (actionSelected)="onActionSelected($event)"
                    ></bui-tree>
                  </div>
                </div>
                <div second class="properties-container">
                   <bui-toolbar>
                    <bui-toolbar-section align="left">
                      <bui-toolbar-group>
                         <bui-toolbar-dropdown [hideArrow]="true" style="padding-left: 8px;">
                           <span class="bl-icons-properties"></span>
                         </bui-toolbar-dropdown>
                      </bui-toolbar-group>
                      <bui-menubar [items]="propertiesMenu"></bui-menubar>
                    </bui-toolbar-section>
                  </bui-toolbar>
                  <div class="sidebar-content properties-tabs-content">
                    <bui-tabs orientation="vertical" [iconOnly]="true" [(activeIndex)]="activeTabIndex">
                      <!-- Render Tab (Page 7 Panels) -->
                      <bui-tab label="Render" icon="render">
                        <div class="draggable-panels-wrapper" cdkDropList (cdkDropListDropped)="onDrop($event)">
                          @for (panel of panels(); track panel.id) {
                            @if (panel.id === 'light_paths') {
                              <bui-panel [title]="panel.title" [(expanded)]="panel.expanded" [draggable]="true" cdkDrag cdkDragLockAxis="y">
                                <p class="placeholder-text">Light path settings...</p>
                              </bui-panel>
                            }

                            @if (panel.id === 'raytracing') {
                              <bui-panel [title]="panel.title" [(expanded)]="panel.expanded" [hasCheckbox]="true" [(checked)]="raytracingEnabled"
                                [draggable]="true" cdkDrag cdkDragLockAxis="y">
                                <bui-field-group>
                                  <bui-field label="Method">
                                    <bui-dropdown [options]="rtMethodOptions" [(value)]="rtMethod"></bui-dropdown>
                                  </bui-field>
                                  <bui-field label="Resolution">
                                    <bui-dropdown [options]="rtResolutionOptions" [(value)]="rtResolution"></bui-dropdown>
                                  </bui-field>
                                </bui-field-group>

                                <bui-panel title="Screen Tracing" variant="sub" [(expanded)]="stExpanded">
                                  <bui-field-group>
                                    <bui-field label="Precision">
                                      <bui-slider [value]="stPrecision()" (valueChange)="stPrecision.set($event)" [min]="0" [max]="1"
                                        [precision]="3" variant="progress"></bui-slider>
                                    </bui-field>
                                    <bui-field label="Thickness">
                                      <bui-slider [value]="stThickness()" (valueChange)="stThickness.set($event)" [min]="0" [max]="1"
                                        [precision]="1" suffix=" m"></bui-slider>
                                    </bui-field>
                                  </bui-field-group>
                                </bui-panel>

                                <bui-panel title="Denoising" variant="sub" [hasCheckbox]="true" [(checked)]="denoisingEnabled"
                                  [(expanded)]="denoisingExpanded">
                                </bui-panel>
                              </bui-panel>
                            }

                            @if (panel.id === 'volumes') {
                              <bui-panel [title]="panel.title" [(expanded)]="panel.expanded" [draggable]="true" cdkDrag cdkDragLockAxis="y">
                                <bui-field-group>
                                  <bui-field label="Steps">
                                    <bui-slider [value]="volSteps()" (valueChange)="volSteps.set($event)" [min]="1" [max]="256"
                                      [precision]="0"></bui-slider>
                                  </bui-field>
                                  <bui-field label="Distribution">
                                    <bui-slider [value]="volDistribution()" (valueChange)="volDistribution.set($event)" [min]="0" [max]="1"
                                      [precision]="3" variant="progress"></bui-slider>
                                  </bui-field>
                                </bui-field-group>
                              </bui-panel>
                            }

                            @if (panel.id === 'curves') {
                              <bui-panel [title]="panel.title" [(expanded)]="panel.expanded" [draggable]="true" cdkDrag cdkDragLockAxis="y">
                                <bui-field-group>
                                  <bui-field label="Shape">
                                    <bui-segmented-control [options]="shapeOptions" [(value)]="selectedShape"></bui-segmented-control>
                                  </bui-field>
                                </bui-field-group>
                              </bui-panel>
                            }

                            @if (panel.id === 'simplify') {
                              <bui-panel [title]="panel.title" [(expanded)]="panel.expanded" [hasCheckbox]="true" [(checked)]="simplifyEnabled"
                                [draggable]="true" cdkDrag cdkDragLockAxis="y">
                                <bui-panel title="Viewport" variant="sub" [(expanded)]="viewportExpanded">
                                  <bui-field-group>
                                    <bui-field label="Max Subdivision">
                                      <bui-slider [value]="viewportMaxSubdivision()" (valueChange)="viewportMaxSubdivision.set($event)" [min]="0"
                                        [max]="10" [precision]="0"></bui-slider>
                                    </bui-field>
                                  </bui-field-group>
                                </bui-panel>
                              </bui-panel>
                            }
                          }
                        </div>
                      </bui-tab>

                      <!-- Object Tab -->
                      <bui-tab label="Object" icon="object_data">
                         <bui-panel title="Transform" [(expanded)]="panelExpanded">
                            <bui-field-group>
                              <bui-field label="Location">
                                <bui-slider label="X" [value]="0" suffix="m"></bui-slider>
                                <bui-slider label="Y" [value]="0" suffix="m"></bui-slider>
                                <bui-slider label="Z" [value]="0" suffix="m"></bui-slider>
                              </bui-field>
                            </bui-field-group>
                         </bui-panel>

                         <bui-panel title="Vertex Groups" [expanded]="true">
                           <bui-datalist 
                             [items]="vertexGroups()"
                             [(selectedItemId)]="selectedVertexGroupId"
                             searchPlaceholder="Search Vertex Groups"
                             [headerActions]="datalistActions"
                             (add)="addVertexGroup()"
                             (remove)="removeVertexGroup($event)"
                             (moveUp)="moveVertexGroupUp($event)"
                             (moveDown)="moveVertexGroupDown($event)"
                           >
                              <ng-template let-item>
                                <div style="display: flex; align-items: center; width: 100%;">
                                  <span class="bl-icons-group_vertex" style="margin-right: 6px; font-size: 14px; color: #a5a5a5;"></span>
                                  <span style="flex: 1; overflow: hidden; text-overflow: ellipsis;">{{ item.label }}</span>
                                </div>
                              </ng-template>
                              <ng-template buiDatalistItemActions let-item>
                                <span class="bl-icons-decorate_unlocked" title="Lock" style="font-size: 14px; color: #555; cursor: pointer;"></span>
                              </ng-template>
                           </bui-datalist>

                           @if (selectedVertexGroup()) {
                             <div style="margin-top: 8px;">
                                <bui-field-group>
                                  <bui-field label="Weight">
                                    <bui-slider [value]="1.0" [min]="0" [max]="1" [precision]="3" variant="progress"></bui-slider>
                                  </bui-field>
                                </bui-field-group>
                             </div>
                           }
                         </bui-panel>
                      </bui-tab>

                      <!-- Modifiers Tab -->
                      <bui-tab label="Modifiers" icon="modifier">
                         <bui-panel title="Modifiers" [(expanded)]="panelExpanded">
                            <bui-toolbar-btn style="width: 100%; margin: 8px 0;">Add Modifier</bui-toolbar-btn>
                         </bui-panel>
                      </bui-tab>

                      <!-- Geometry Nodes (Spreadsheet Demo) Tab -->
                      <bui-tab label="Data" icon="node_geometry">
                        <div style="height: 100%; display: flex; flex-direction: column;">
                           <!-- Small local toolbar for spreadsheet -->
                           <div style="padding: 4px; border-bottom: 1px solid #1e1e1e; font-size: 11px; color: #ccc; background: #282828;">
                             <span class="bl-icons-mesh_data" style="margin-right: 4px;"></span> Mesh › Vertex
                           </div>
                           <div style="flex: 1; overflow: hidden; padding: 2px;">
                             <bui-datagrid
                               [columns]="gridColumns"
                               [data]="gridData()"
                               [(sort)]="gridSort"
                               (sortChange)="onGridSort($event)"
                               [(selectedRowId)]="gridSelectedRowId"
                             >
                                <!-- Custom template for the Index column to look like Blender -->
                                <ng-template buiDatagridCell="index" let-row let-col="column">
                                   <div style="color: #888; text-align: right; width: 100%;">{{ row[col.key] }}</div>
                                </ng-template>
                             </bui-datagrid>
                           </div>
                        </div>
                      </bui-tab>
                    </bui-tabs>
                  </div>
                </div>
              </bui-splitter>
            </div>
          </bui-splitter>
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
      padding: 1px;
      background-color: #000;
      overflow: hidden;
      display: flex;
    }

    .viewport-panel, .placeholder-content, .sidebar-panel {
      display: flex;
      flex-direction: column;
      background-color: #393939;
      border-radius: 4px;
      overflow: hidden;
    }

    .viewport-panel {
      flex: 1;
      margin-right: 1px;
    }

    .sidebar-panel {
      flex: 1;
      background-color: #000;
    }

    .outliner-container, .properties-container {
      display: flex;
      flex-direction: column;
      background-color: #393939;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
    }

    .sidebar-content {
      flex: 1;
      overflow: auto;
    }

    .outliner-content {
      padding: 0;
    }

    .properties-tabs-content {
      ::ng-deep .bui-tabs {
        border: none;
        border-radius: 0;
      }
      ::ng-deep .bui-tab-content {
        padding: 0;
      }
    }

    .draggable-panels-wrapper {
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .placeholder-text {
      font-size: 11px;
      color: #777;
      padding: 8px;
      margin: 0;
    }

    .placeholder-content {
      flex: 1;
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

      .viewport-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 16px;
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
  panelExpanded = signal(true);
  activeTabIndex = signal(0);

  // Property Panels Data (Page 7)
  raytracingEnabled = signal(false);
  rtMethodOptions: BuiDropdownOption[] = [{ label: 'Screen-Trace', value: 'screen_trace' }];
  rtMethod = signal('screen_trace');
  rtResolutionOptions: BuiDropdownOption[] = [{ label: '1:2', value: '1:2' }];
  rtResolution = signal('1:2');
  stExpanded = signal(true);
  stPrecision = signal(0.250);
  stThickness = signal(0.2);
  denoisingEnabled = signal(true);
  denoisingExpanded = signal(false);
  volResolutionOptions: BuiDropdownOption[] = [{ label: '1:2', value: '1:2' }];
  volResolution = signal('1:2');
  volSteps = signal(64);
  volDistribution = signal(0.800);
  volMaxDepth = signal(16);
  shapeOptions: BuiSegmentOption[] = [
    { label: 'Strand', value: 'strand' },
    { label: 'Strip', value: 'strip' },
    { label: 'Cylinder', value: 'cylinder' }
  ];
  selectedShape = signal('strand');
  simplifyEnabled = signal(false);
  viewportExpanded = signal(true);
  viewportMaxSubdivision = signal(6);

  panels = signal([
    { id: 'light_paths', title: 'Light Paths', expanded: false },
    { id: 'raytracing', title: 'Raytracing', expanded: true },
    { id: 'volumes', title: 'Volumes', expanded: true },
    { id: 'curves', title: 'Curves', expanded: true },
    { id: 'simplify', title: 'Simplify', expanded: true }
  ]);

  // UIList Datalist Demo Data
  vertexGroups = signal<BuiDatalistItem[]>([
    { id: '1', label: 'Group', icon: 'group_vertex' },
    { id: '2', label: 'Arm_L', icon: 'group_vertex' },
    { id: '3', label: 'Arm_R', icon: 'group_vertex' },
    { id: '4', label: 'Leg_L', icon: 'group_vertex' },
    { id: '5', label: 'Leg_R', icon: 'group_vertex' },
    { id: '6', label: 'Head', icon: 'group_vertex' },
    { id: '7', label: 'Spine', icon: 'group_vertex' }
  ]);
  selectedVertexGroupId = signal<string | null>(this.vertexGroups()[0].id);
  selectedVertexGroup = computed(() => this.vertexGroups().find((item) => item.id === this.selectedVertexGroupId()) ?? null);
  datalistActions: BuiDatalistAction[] = [
    { id: 'options', icon: 'downres' } // Dropdown arrow
  ];

  addVertexGroup() {
    const list = [...this.vertexGroups()];
    const newItem: BuiDatalistItem = { id: String(Date.now()), label: 'Group' + (list.length > 0 ? '.' + list.length.toString().padStart(3, '0') : ''), icon: 'group_vertex' };
    list.push(newItem);
    this.vertexGroups.set(list);
    this.selectedVertexGroupId.set(newItem.id);
  }

  removeVertexGroup(item: BuiDatalistItem) {
    const list = this.vertexGroups().filter(g => g.id !== item.id);
    this.vertexGroups.set(list);
    if (list.length > 0) {
       this.selectedVertexGroupId.set(list[list.length - 1].id);
    } else {
       this.selectedVertexGroupId.set(null);
    }
  }

  moveVertexGroupUp(item: BuiDatalistItem) {
    const list = [...this.vertexGroups()];
    const index = list.findIndex(g => g.id === item.id);
    if (index > 0) {
      const temp = list[index];
      list[index] = list[index - 1];
      list[index - 1] = temp;
      this.vertexGroups.set(list);
    }
  }

  moveVertexGroupDown(item: BuiDatalistItem) {
    const list = [...this.vertexGroups()];
    const index = list.findIndex(g => g.id === item.id);
    if (index < list.length - 1) {
      const temp = list[index];
      list[index] = list[index + 1];
      list[index + 1] = temp;
      this.vertexGroups.set(list);
    }
  }

  // Datagrid (Spreadsheet) Demo Data
  gridColumns: DatagridColumn[] = [
    { key: 'index', label: 'Index', width: '60px', sortable: true },
    { key: 'position', label: 'Position', sortable: false },
    { key: 'selection', label: 'Selection', width: '80px', sortable: true }
  ];

  private baseGridData: BuiDatagridRow[] = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    index: i,
    position: `[${(Math.random() * 2 - 1).toFixed(3)}, ${(Math.random() * 2 - 1).toFixed(3)}, ${(Math.random() * 2 - 1).toFixed(3)}]`,
    selection: Math.random() > 0.8 ? 'true' : 'false'
  }));

  gridData = signal(this.baseGridData);
  gridSort = signal<BuiDatagridSort | null>(null);
  gridSelectedRowId = signal<string | number | null>(null);

  onGridSort(event: BuiDatagridSort | null) {
    this.gridSort.set(event);

    if (!event) {
      this.gridData.set(this.baseGridData);
      return;
    }

    const sorted = [...this.baseGridData].sort((a: BuiDatagridRow, b: BuiDatagridRow) => {
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

  onDrop(event: CdkDragDrop<any[]>) {
    const list = [...this.panels()];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.panels.set(list);
  }

  // Outliner Data
  private outlinerActions(type: 'collection' | 'object'): BuiTreeAction[] {
    return [
      { id: 'visibility', icon: 'hide_off', active: true },
      { id: 'render', icon: 'camera_data', active: true }
    ];
  }

  sceneTree: BuiTreeNode[] = [
    {
      id: 'scene', label: 'Scene Collection', icon: 'outliner_collection', expanded: true,
      actions: this.outlinerActions('collection'),
      children: [
        {
          id: 'collection-1', label: 'Collection', icon: 'outliner_collection', expanded: true,
          actions: this.outlinerActions('collection'),
          children: [
            { id: 'cube', label: 'Cube', icon: 'outliner_ob_mesh', actions: this.outlinerActions('object') },
            { id: 'camera', label: 'Camera', icon: 'camera_data', actions: this.outlinerActions('object') },
            { id: 'light', label: 'Light', icon: 'light', actions: this.outlinerActions('object') },
          ]
        }
      ]
    }
  ];

  onNodeSelected(node: BuiTreeNode) {}
  onActionSelected(event: { node: BuiTreeNode, action: BuiTreeAction }) {
    event.action.active = !event.action.active;
    this.sceneTree = [...this.sceneTree];
  }

  activePath = signal<BreadcrumbItem[]>([
    { label: 'Scene Collection', value: 'scene_collection', icon: 'bl-icons-outliner_collection' },
    { label: 'Collection', value: 'collection', icon: 'bl-icons-outliner_collection' },
    { label: 'Cube', value: 'cube', icon: 'bl-icons-outliner_ob_mesh' },
    { label: 'Material', value: 'material', icon: 'bl-icons-material' }
  ]);

  onBreadcrumbClick(item: BreadcrumbItem) {
    console.log('Breadcrumb clicked:', item);
    // Truncate path up to the clicked item
    const currentPath = this.activePath();
    const index = currentPath.findIndex(i => i.value === item.value);
    if (index !== -1) {
      this.activePath.set(currentPath.slice(0, index + 1));
    }
  }

  editorColumns = [
    {
      category: 'General',
      items: [
        { label: '3D Viewport', icon: 'bl-icons-view3d' },
        { label: 'Image Editor', icon: 'bl-icons-image' },
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
        { label: 'Text Editor', icon: 'bl-icons-text' },
        { label: 'Python Console', icon: 'bl-icons-console' },
        { label: 'Info', icon: 'bl-icons-info' }
      ]
    },
    {
      category: 'Data',
      items: [
        { label: 'Outliner', icon: 'bl-icons-outliner' },
        { label: 'Properties', icon: 'bl-icons-properties' },
        { label: 'File Browser', icon: 'bl-icons-filebrowser' },
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

  outlinerMenu: MenuItem[] = [
    { label: 'Display Mode', icon: 'view_filtered' },
    { label: 'Filter', icon: 'filter' }
  ];

  propertiesMenu: MenuItem[] = [
    { label: 'Tab', items: [{ label: 'Tool' }, { label: 'Render' }, { label: 'Output' }] }
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
