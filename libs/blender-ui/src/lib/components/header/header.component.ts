import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Mock data for workspace tabs
  workspaces = ['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading', 'Animation', 'Rendering'];
  activeWorkspace = 'Layout';
}
