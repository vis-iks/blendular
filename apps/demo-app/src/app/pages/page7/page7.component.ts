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
  BuiRadioGroupComponent,
  BuiSegmentOption,
  BuiDropdownOption,
  BuiRadioOption
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
    BuiRadioGroupComponent
  ],
  templateUrl: './page7.component.html',
  styleUrl: './page7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page7Component {
  // Curves Data
  shapeOptions: BuiSegmentOption[] = [
    { label: 'Strand', value: 'strand' },
    { label: 'Strip', value: 'strip' },
    { label: 'Cylinder', value: 'cylinder' }
  ];
  selectedShape = signal('strand');

  // Panel Reordering
  panels = signal([
    { id: '3d_cursor', title: '3D Cursor', expanded: true },
    { id: 'volumes', title: 'Volumes', expanded: true },
    { id: 'curves', title: 'Curves', expanded: true },
    { id: 'sampling', title: 'Sampling', expanded: true },
    { id: 'film', title: 'Film', expanded: false }
  ]);

  onDrop(event: CdkDragDrop<any[]>) {
    const list = [...this.panels()];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.panels.set(list);
  }

  // 3D Cursor
  cursorLocation = signal({ x: 0, y: 0, z: 0 });
  cursorRotation = signal({ x: 0, y: 0, z: 0 });
  rotationMode = signal('xyz_euler');
  rotationModeOptions: BuiDropdownOption[] = [
    { label: 'XYZ Euler', value: 'xyz_euler' },
    { label: 'XZY Euler', value: 'xzy_euler' },
    { label: 'YXZ Euler', value: 'yxz_euler' },
    { label: 'YZX Euler', value: 'yzx_euler' },
    { label: 'ZXY Euler', value: 'zxy_euler' },
    { label: 'ZYX Euler', value: 'zyx_euler' },
    { label: 'Axis Angle', value: 'axis_angle' },
    { label: 'Quaternion', value: 'quaternion' }
  ];

  // Sampling

  samplingExpanded = signal(true);

  // Volumes
  volumesExpanded = signal(true);
  resolution = signal('1:8');
  steps = signal(64);
  distribution = signal(0.8);
  maxDepth = signal(16);
  
  customRangeEnabled = signal(false);
  customRange = signal(0.5);

  // Curves
  curvesExpanded = signal(true);
  additionalSubdivision = signal(0);

  // Film
  filmExpanded = signal(true);
  filterSize = signal(1.5);
  transparent = signal(false);
  overscanEnabled = signal(false);
  overscan = signal(0.03);

  // Dropdown options (mock)
  resolutionOptions: BuiDropdownOption[] = [
    { label: '1:1', value: '1:1' },
    { label: '1:2', value: '1:2' },
    { label: '1:4', value: '1:4' },
    { label: '1:8', value: '1:8' }
  ];

  // Radio Options
  selectedRadio = signal('opt1');
  radioOptions: BuiRadioOption[] = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' }
  ];
}
