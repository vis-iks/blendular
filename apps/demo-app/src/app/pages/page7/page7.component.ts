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
  BuiPopoverDirective
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
    BuiPopoverDirective
  ],
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page7Component {
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
  snapBaseOptions: BuiSegmentOption[] = [
    { label: 'Closest', value: 'closest' },
    { label: 'Center', value: 'center' },
    { label: 'Median', value: 'median' },
    { label: 'Active', value: 'active' }
  ];
  snapBase = signal('closest');
  snapTargetIndividualsEnabled1 = signal(false);
  snapTargetIndividualsEnabled2 = signal(false);
  absoluteIncrementSnap = signal(false);
  alignRotationToTarget = signal(false);
  backfaceCulling = signal(false);
  
  affectOptions: BuiSegmentOption[] = [
    { label: 'Move', value: 'move' },
    { label: 'Rotate', value: 'rotate' },
    { label: 'Scale', value: 'scale' }
  ];
  affect = signal('move');

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
