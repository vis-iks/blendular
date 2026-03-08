import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  BuiDropdownComponent, BuiDropdownOption,
  BuiColorPickerComponent
} from '@blender-ui/core';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BuiDropdownComponent, BuiColorPickerComponent],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page3Component {
  // Dropdown demos
  shadingOptions: BuiDropdownOption[] = [
    { label: 'Solid', value: 'solid', icon: 'view_in_ar' },
    { label: 'Material Preview', value: 'material', icon: 'palette' },
    { label: 'Wireframe', value: 'wireframe', icon: 'grid_on' },
    { label: 'Rendered', value: 'rendered', icon: 'photo_camera' },
  ];

  interpolationOptions: BuiDropdownOption[] = [
    { label: 'Linear', value: 'linear' },
    { label: 'Bezier', value: 'bezier' },
    { label: 'Constant', value: 'constant' },
    { label: 'B-Spline', value: 'bspline' },
    { label: 'Cardinal', value: 'cardinal' },
    { label: 'Catmull-Rom', value: 'catmullrom' },
  ];

  selectedShading = signal<string>('solid');
  selectedInterpolation = signal<string | undefined>(undefined);

  // Dropdown reactive form
  dropdownFormControl = new FormControl('bezier');

  // Color picker demos
  baseColor = signal('#4772b3');
  emissionColor = signal('#ff6600');
  ambientColor = signal('#1a1a2e');

  // Color picker reactive form
  colorFormControl = new FormControl('#55802b');
}
