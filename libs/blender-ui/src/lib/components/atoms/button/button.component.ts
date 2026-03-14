import { Component, ChangeDetectionStrategy, input, output, model, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiButtonComponent - Replicates Blender's flat, compact button style.
 *
 * Variants:
 * - Standard push button (default)
 * - Toggle button (uses `pressed` model signal for two-way binding)
 * - Icon-only button (set `icon` input, omit content)
 *
 * Usage:
 *   <bui-button>Save</bui-button>
 *   <bui-button variant="toggle" [(pressed)]="isActive">Lock</bui-button>
 *   <bui-button icon="visibility" variant="icon"></bui-button>
 */
@Component({
  selector: 'bui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiButtonComponent {
  /** Button style variant */
  variant = input<'standard' | 'primary' | 'toggle' | 'icon'>('standard');

  /** Icon name (Material Symbols Outlined) */
  icon = input<string | undefined>(undefined);

  /** Whether the button is disabled */
  disabled = input(false);

  /** Force a square aspect ratio (useful for icons in any variant) */
  square = input(false, { transform: booleanAttribute });

  /** Content horizontal alignment */
  align = input<'left' | 'center' | 'right'>('center');

  /** Whether to show a dropdown menu chevron */
  hasMenu = input(false, { transform: booleanAttribute });

  /** Custom icon size (font-size) */
  iconSize = input<number | string | undefined>();

  /** Two-way binding for toggle state */
  pressed = model(false);

  /** Emitted on click (for standard buttons) */
  clicked = output<MouseEvent>();

  onClick(event: MouseEvent) {
    if (this.disabled()) return;

    if (this.variant() === 'toggle') {
      this.pressed.set(!this.pressed());
    }

    this.clicked.emit(event);
  }
}
