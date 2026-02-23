import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiCheckboxComponent } from '../checkbox/checkbox.component';
import { BuiNumberInputComponent } from '../number-input/number-input.component';
import { BuiSelectComponent, SelectOption } from '../select/select.component';
import { BuiSectionComponent } from '../section/section.component';

@Component({
  selector: 'bui-modifier-panel',
  standalone: true,
  imports: [
    CommonModule,
    BuiCheckboxComponent,
    BuiNumberInputComponent,
    BuiSelectComponent,
    BuiSectionComponent,
  ],
  templateUrl: './modifier-panel.component.html',
  styleUrl: './modifier-panel.component.scss',
})
export class ModifierPanelComponent {
  // State for the inputs
  levelsViewport = signal(1);
  levelsRender = signal(2);
  optimalDisplay = signal(true);

  // Advanced section
  useLimitSurface = signal(true);
  quality = signal(3);
  uvSmooth = signal('Keep Boundaries');
  boundarySmooth = signal('All');
  useCreases = signal(true);
  useCustomNormals = signal(false);

  // Options
  uvSmoothOptions: SelectOption[] = [
    { label: 'Keep Boundaries', value: 'Keep Boundaries' },
    { label: 'None', value: 'None' },
    { label: 'Keep Corners', value: 'Keep Corners' },
    { label: 'Keep Corners, Junctions', value: 'Keep Corners, Junctions' },
    { label: 'Keep Corners, Junctions, Concave', value: 'Keep Corners, Junctions, Concave' },
    { label: 'Keep Boundaries, Junctions', value: 'Keep Boundaries, Junctions' },
    { label: 'All', value: 'All' },
  ];

  boundarySmoothOptions: SelectOption[] = [
    { label: 'All', value: 'All' },
    { label: 'Keep Corners', value: 'Keep Corners' },
  ];
}
