import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifierPanelComponent } from '../modifier-panel/modifier-panel.component';
import { ScenePropertiesComponent } from '../scene-properties/scene-properties.component';

@Component({
  selector: 'bui-properties',
  standalone: true,
  imports: [CommonModule, ModifierPanelComponent, ScenePropertiesComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  activeTab = signal<'scene' | 'modifiers' | 'other'>('scene');
}
