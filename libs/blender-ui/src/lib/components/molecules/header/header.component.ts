import { Component, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  workspaces = input<string[]>(['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading', 'Animation', 'Rendering']);
  activeWorkspace = input<string>('Layout');
  workspaceChange = output<string>();

  activeWorkspaceSignal = signal('Layout');

  constructor() {
    effect(() => {
      this.activeWorkspaceSignal.set(this.activeWorkspace());
    });
  }

  selectWorkspace(ws: string) {
    this.activeWorkspaceSignal.set(ws);
    this.workspaceChange.emit(ws);
  }
}
