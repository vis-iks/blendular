import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSectionComponent } from '../section/section.component';
import { BuiSelectComponent, SelectOption } from '../select/select.component';
import { BuiNumberInputComponent } from '../number-input/number-input.component';
import { BuiCheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'bui-scene-properties',
  standalone: true,
  imports: [
    CommonModule,
    BuiSectionComponent,
    BuiSelectComponent,
    BuiNumberInputComponent,
    BuiCheckboxComponent,
  ],
  templateUrl: './scene-properties.component.html',
  styleUrl: './scene-properties.component.scss',
})
export class ScenePropertiesComponent {
  // Search
  searchText = signal('');

  // Scene Section
  cameraOptions: SelectOption[] = [
    { label: 'Camera', value: 'Camera' },
  ];
  camera = signal('Camera');
  backgroundScene = signal('Scene');
  activeClip = signal('Movie Clip');

  // Units Section
  unitSystemOptions: SelectOption[] = [
    { label: 'Metric', value: 'Metric' },
    { label: 'Imperial', value: 'Imperial' },
    { label: 'None', value: 'None' },
  ];
  unitSystem = signal('Metric');
  unitScale = signal(1.0);

  // Gravity Section
  gravityEnabled = signal(true);
  gravityX = signal(0);
  gravityY = signal(0);
  gravityZ = signal(-9.8);

  // Audio Section
  volume = signal(1.0);
  dopplerSpeed = signal(343.3);
  dopplerFactor = signal(1.0);

  // Rigid Body World
  rigidBodyEnabled = signal(false);

  // Toggle handlers for sections are handled by BuiSectionComponent internally
}
