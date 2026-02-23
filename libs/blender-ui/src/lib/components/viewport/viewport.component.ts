import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-viewport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
})
export class ViewportComponent {
  showTools = input(true);

  tools = [
    { icon: 'crop_square', name: 'Select Box', active: false },
    { icon: 'ads_click', name: 'Cursor', active: false },
    { icon: 'open_with', name: 'Move', active: false },
    { icon: 'sync', name: 'Rotate', active: false },
    { icon: 'aspect_ratio', name: 'Scale', active: false },
    { icon: 'transform', name: 'Transform', active: true },
    { icon: 'edit', name: 'Annotate', active: false },
    { icon: 'straighten', name: 'Measure', active: false },
    { icon: 'add_box', name: 'Add Cube', active: false },
  ];
}
