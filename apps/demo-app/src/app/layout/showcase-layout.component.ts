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
  navLinks = [
    { path: '/page1', label: 'Page 1: Basic Inputs' },
    { path: '/page2', label: 'Page 2: Numeric Controls' },
    { path: '/page3', label: 'Page 3: Advanced Form Controls' },
    { path: '/page4', label: 'Page 4: Layout & Splitters' },
    { path: '/page5', label: 'Page 5: Data & Hierarchies' },
    { path: '/page6', label: 'Page 6: Overlays & Messaging' },
    { path: '/page7', label: 'Page 7: Blender Property Panels' },
  ];
}
