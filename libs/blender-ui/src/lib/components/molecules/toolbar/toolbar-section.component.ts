import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-toolbar-section',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrl: './toolbar-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.toolbar-left]': 'align() === "left"',
    '[class.toolbar-center]': 'align() === "center"',
    '[class.toolbar-right]': 'align() === "right"',
  }
})
export class BuiToolbarSectionComponent {
  align = input<'left' | 'center' | 'right'>('left');
}
