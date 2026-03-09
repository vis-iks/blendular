import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { 
  BuiPanelComponent, 
  BuiFieldComponent, 
  BuiFieldGroupComponent, 
  BuiSliderComponent, 
  BuiSegmentedControlComponent,
  BuiCheckboxComponent,
  BuiDropdownComponent,
  BuiSegmentOption,
  BuiDropdownOption,
  MenubarComponent,
  MenuItem,
  BuiPopoverDirective,
  TimelineComponent,
  BuiToolbarComponent,
  BuiToolbarSectionComponent,
  BuiToolbarGroupComponent,
  BuiToolbarButtonComponent,
  BuiToolbarDropdownComponent,
  BuiEditorTypePopoverComponent,
  EditorTypeColumn,
  BuiSnapPopoverComponent,
  SnapTargetItem,
  SnapIndividualItem,
  SnapRotationIncrement,
  BuiGizmosPopoverComponent
} from '@blender-ui/core';

@Component({
  selector: 'app-page7',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    CdkDropList,
    CdkDrag,
    BuiPanelComponent, 
    BuiFieldComponent, 
    BuiFieldGroupComponent, 
    BuiSliderComponent, 
    BuiSegmentedControlComponent,
    BuiCheckboxComponent,
    BuiDropdownComponent,
    MenubarComponent,
    BuiPopoverDirective,
    TimelineComponent,
    BuiToolbarComponent,
    BuiToolbarSectionComponent,
    BuiToolbarGroupComponent,
    BuiToolbarButtonComponent,
    BuiToolbarDropdownComponent,
    BuiEditorTypePopoverComponent,
    BuiSnapPopoverComponent,
    BuiGizmosPopoverComponent
  ],
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page7Component {
  // Editor Type Popover Data
  editorColumns: EditorTypeColumn[] = [
    {
      category: 'General',
      items: [
        { label: '<u>3</u>D Viewport', icon: 'bl-icons-view3d', shortcut: 'Shift F5', active: true },
        { label: '<u>I</u>mage Editor', icon: 'bl-icons-image', shortcut: 'Shift F10' },
        { label: '<u>U</u>V Editor', icon: 'bl-icons-uv', shortcut: 'Shift F10' },
        { label: '<u>G</u>eometry Node Editor', icon: 'bl-icons-geometry_nodes', shortcut: 'Shift F3' },
        { label: '<u>C</u>ompositor', icon: 'bl-icons-node_compositing', shortcut: 'Shift F3' },
        { label: '<u>S</u>hader Editor', icon: 'bl-icons-node_material', shortcut: 'Shift F3' },
        { label: '<u>T</u>exture Node Editor', icon: 'bl-icons-node_texture', shortcut: 'Shift F3' },
        { label: '<u>V</u>ideo Sequencer', icon: 'bl-icons-sequence', shortcut: 'Shift F8' },
        { label: '<u>M</u>ovie Clip Editor', icon: 'bl-icons-tracker', shortcut: 'Shift F2' },
      ]
    },
    {
      category: 'Animation',
      items: [
        { label: 'Dope <u>S</u>heet', icon: 'bl-icons-action', shortcut: 'Shift F12' },
        { label: 'Time<u>l</u>ine', icon: 'bl-icons-time', shortcut: 'Shift F12' },
        { label: 'Graph <u>E</u>ditor', icon: 'bl-icons-graph', shortcut: 'Shift F6' },
        { label: '<u>D</u>rivers', icon: 'bl-icons-driver', shortcut: 'Shift F6' },
        { label: '<u>N</u>onlinear Animation', icon: 'bl-icons-nla' },
      ]
    },
    {
      category: 'Scripting',
      items: [
        { label: 'Te<u>x</u>t Editor', icon: 'bl-icons-text', shortcut: 'Shift F11' },
        { label: '<u>P</u>ython Console', icon: 'bl-icons-console', shortcut: 'Shift F4' },
        { label: 'I<u>n</u>fo', icon: 'bl-icons-info' },
      ]
    },
    {
      category: 'Data',
      items: [
        { label: '<u>O</u>utliner', icon: 'bl-icons-outliner', shortcut: 'Shift F9' },
        { label: 'P<u>r</u>operties', icon: 'bl-icons-properties', shortcut: 'Shift F7' },
        { label: '<u>F</u>ile Browser', icon: 'bl-icons-filebrowser', shortcut: 'Shift F1' },
        { label: '<u>A</u>sset Browser', icon: 'bl-icons-asset_manager', shortcut: 'Shift F1' },
        { label: 'S<u>p</u>readsheet', icon: 'bl-icons-spreadsheet' },
        { label: 'Preferences', icon: 'bl-icons-preferences' },
      ]
    }
  ];

  // Light Paths
  // Nothing specific

  // Raytracing
  raytracingEnabled = signal(false);
  rtMethodOptions: BuiDropdownOption[] = [
    { label: 'Screen-Trace', value: 'screen_trace' }
  ];
  rtMethod = signal('screen_trace');
  rtResolutionOptions: BuiDropdownOption[] = [
    { label: '1:2', value: '1:2' }
  ];
  rtResolution = signal('1:2');

  stExpanded = signal(true);
  stPrecision = signal(0.250);
  stThickness = signal(0.2);

  denoisingEnabled = signal(true);
  denoisingExpanded = signal(false);
  fastGIEnabled = signal(true);
  fastGIExpanded = signal(false);

  // Volumes
  volResolutionOptions: BuiDropdownOption[] = [
    { label: '1:2', value: '1:2' }
  ];
  volResolution = signal('1:2');
  volSteps = signal(64);
  volDistribution = signal(0.800);
  volMaxDepth = signal(16);
  customRangeExpanded = signal(false);
  customRangeEnabled = signal(false);
  customRangeStart = signal(0.1);
  customRangeEnd = signal(100);

  // Curves Data
  shapeOptions: BuiSegmentOption[] = [
    { label: 'Strand', value: 'strand' },
    { label: 'Strip', value: 'strip' },
    { label: 'Cylinder', value: 'cylinder' }
  ];
  selectedShape = signal('strand');
  additionalSubdivision = signal(0);

  // Simplify
  simplifyEnabled = signal(false);
  viewportExpanded = signal(true);
  viewportMaxSubdivision = signal(6);
  viewportMaxChildParticles = signal(1.000);
  viewportVolumeResolution = signal(1.000);
  viewportNormals = signal(false);

  // Panel Reordering
  panels = signal([
    { id: 'light_paths', title: 'Light Paths', expanded: false },
    { id: 'raytracing', title: 'Raytracing', expanded: true },
    { id: 'volumes', title: 'Volumes', expanded: true },
    { id: 'curves', title: 'Curves', expanded: true },
    { id: 'simplify', title: 'Simplify', expanded: true }
  ]);

  onDrop(event: CdkDragDrop<{ id: string, title: string, expanded: boolean }[]>) {
    const list = [...this.panels()];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.panels.set(list);
  }

  // Snap Panel Data
  snapTargetMode = signal('increment');

  snapTargetItems: SnapTargetItem[] = [
    { value: 'increment', label: 'Increment', icon: 'bl-icons-snap_on' },
    { value: 'grid',      label: 'Grid',      icon: 'bl-icons-snap_grid' },
    { value: 'vertex',    label: 'Vertex',    icon: 'bl-icons-snap_vertex' },
    { value: 'edge',      label: 'Edge',      icon: 'bl-icons-snap_edge' },
    { value: 'face',      label: 'Face',      icon: 'bl-icons-snap_face' },
    { value: 'volume',    label: 'Volume',    icon: 'bl-icons-snap_volume' },
  ];

  snapBaseOptions: BuiSegmentOption[] = [
    { label: 'Closest', value: 'closest' },
    { label: 'Center',  value: 'center' },
    { label: 'Median',  value: 'median' },
    { label: 'Active',  value: 'active' }
  ];
  snapBase = signal('closest');

  snapIndividualItems: SnapIndividualItem[] = [
    { label: 'Face Project' },
    { label: 'Face Nearest', icon: 'bl-icons-snap_face_nearest' },
  ];
  snapIndividualChecked = signal([false, false]);

  absoluteIncrementSnap = signal(false);
  alignRotationToTarget = signal(false);
  backfaceCulling = signal(false);
  
  affectOptions: BuiSegmentOption[] = [
    { label: 'Move',   value: 'move' },
    { label: 'Rotate', value: 'rotate' },
    { label: 'Scale',  value: 'scale' }
  ];
  affect = signal('move');

  rotationIncrements: SnapRotationIncrement[] = [
    { label: '5°' },
    { label: '1°' },
  ];

  snapTargetSelection = signal('Exclude Non-Selectable');

  // Menubar data
  mainMenu: MenuItem[] = [
    {
      label: 'View',
      items: [
        { label: 'Toolbar', shortcut: 'T', checked: false, tooltip: 'Show/hide the Toolbar' },
        { label: 'Sidebar', shortcut: 'N', checked: true, tooltip: 'Show/hide the Sidebar' },
        { label: 'Tool Settings', checked: true, tooltip: 'Show/hide the tool settings' },
        { label: 'Asset Shelf', checked: true, disabled: true },
        { label: 'Adjust Last Operation', checked: true },
        { separator: true },
        { label: 'Frame Selected', shortcut: 'Numpad .' },
        { label: 'Frame All', shortcut: 'Home' },
        { label: 'Perspective/Orthographic', shortcut: 'Numpad 5' },
        { 
          label: 'Local View', 
          items: [
            { label: 'Toggle Local View', shortcut: 'Numpad /', tooltip: 'Toggle Local View', tooltipDetails: 'Toggle local view for selected objects\nPython: bpy.ops.view3d.localview()' },
            { label: 'Remove from Local View', shortcut: 'Alt Numpad /' }
          ]
        },
        { label: 'Viewer Node', checked: true },
        { separator: true },
        { label: 'Cameras', items: [{ label: 'Active Camera', shortcut: 'Numpad 0' }] },
        { label: 'Viewpoint', items: [{ label: 'Top', shortcut: 'Numpad 7' }] },
        { label: 'Navigation', items: [{ label: 'Walk Navigation' }] },
        { label: 'Align View', items: [{ label: 'Align Active Camera to View', shortcut: 'Ctrl Alt Numpad 0' }] },
        { 
          label: 'View Regions', 
          items: [
            { 
              label: 'Clipping Region', 
              shortcut: 'Alt B',
              tooltip: 'Clipping Region',
              tooltipDetails: 'Set the view clipping region\nPython: bpy.ops.view3d.clip_border()'
            }
          ] 
        },
        { separator: true },
        { label: 'Play Animation', shortcut: 'Space Bar' },
        { separator: true },
        { label: 'Render Viewport Preview', icon: 'camera_roll' },
        { label: 'Render Playblast', icon: 'animation' },
        { label: 'Render Playblast on Keyframes', icon: 'animation' },
        { separator: true },
        { label: 'Area', items: [{ label: 'Horizontal Split' }] }
      ]
    },
    {
      label: 'Select',
      items: [
        { label: 'All', shortcut: 'A' },
        { label: 'None', shortcut: 'Alt A' }
      ]
    },
    {
      label: 'Add',
      items: [
        { label: 'Mesh', items: [{ label: 'Cube' }, { label: 'Sphere' }] },
        { label: 'Curve' }
      ]
    },
    {
      label: 'Object',
      items: [
        { label: 'Transform' },
        { label: 'Set Origin' }
      ]
    }
  ];
}
