import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-showcase-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './showcase-layout.component.html',
  styleUrl: './showcase-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseLayoutComponent {
  categories = [
    {
      name: 'Atoms',
      links: [
        { path: '/page1', label: 'Buttons & Checkboxes' },
        { path: '/page2', label: 'Sliders & Basic Controls' },
        { path: '/page3', label: 'Dropdowns & Color Pickers' },
      ]
    },
    {
      name: 'Molecules',
      links: [
        { path: '/page4', label: 'Panels & Tabs' },
        { path: '/page5', label: 'Trees & Data Grids' },
        { path: '/page6', label: 'Dialogs & Overlays' },
      ]
    },
    {
      name: 'Organisms',
      links: [
        { path: '/page7', label: 'Complex Property Panels' },
        { path: '/shader-editor', label: 'Shader Editor' },
        { path: '/workspace-demo', label: 'Full Workspace Layout' },
      ]
    }
  ];
}
