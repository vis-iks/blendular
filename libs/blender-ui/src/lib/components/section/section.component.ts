import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class BuiSectionComponent {
  label = input('');
  expanded = signal(false);

  toggle() {
    this.expanded.update((v) => !v);
  }
}
