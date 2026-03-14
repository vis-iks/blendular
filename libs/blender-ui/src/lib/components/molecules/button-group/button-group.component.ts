import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiButtonGroupComponent - Groups buttons with a configurable gap.
 * Replicates Blender's grouped button layout.
 *
 * Usage:
 *   <bui-button-group gap="1px">
 *     <bui-button variant="icon" icon="add"></bui-button>
 *     <bui-button variant="icon" icon="remove"></bui-button>
 *   </bui-button-group>
 */
@Component({
  selector: 'bui-button-group',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrl: './button-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'bui-button-group',
    '[class.vertical]': 'orientation() === "vertical"',
    '[style.--bui-group-gap]': 'gap()'
  }
})
export class BuiButtonGroupComponent {
  /** Spacing between buttons (e.g., '1px', '2px', '4px') */
  gap = input<string>('1px');

  /** Layout orientation */
  orientation = input<'horizontal' | 'vertical'>('horizontal');
}
