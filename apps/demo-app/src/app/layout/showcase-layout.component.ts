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
      name: 'Foundations',
      links: [
        { path: '/foundations', label: 'Overview & Catalog' },
        { path: '/token-playground', label: 'Theme + Tokens' },
        { path: '/icon-browser', label: 'Icon Browser' },
      ]
    },
    {
      name: 'Navigation & Data',
      links: [
        { path: '/navigation-data', label: 'Trees, Lists & Grids' },
      ]
    },
    {
      name: 'Inspector & Panels',
      links: [
        { path: '/inspector-panels', label: 'Inspector Sidebar' },
      ]
    },
    {
      name: 'Workbench Layouts',
      links: [
        { path: '/workbench-blender', label: 'Blender Workspace' },
        { path: '/workbench-ide', label: 'IDE Workspace' },
        { path: '/shader-editor', label: 'Shader Editor' },
      ]
    },
    {
      name: 'Legacy Demos',
      links: [
        { path: '/page1', label: 'Page 1: Buttons & Checkboxes' },
        { path: '/page2', label: 'Page 2: Numeric Controls' },
        { path: '/page3', label: 'Page 3: Dropdowns & Color Pickers' },
        { path: '/page4', label: 'Page 4: Panels & Tabs' },
        { path: '/page5', label: 'Page 5: Data & Hierarchies' },
        { path: '/page6', label: 'Page 6: Dialogs & Overlays' },
        { path: '/page7', label: 'Page 7: Complex Property Panels' },
      ]
    }
  ];
}
