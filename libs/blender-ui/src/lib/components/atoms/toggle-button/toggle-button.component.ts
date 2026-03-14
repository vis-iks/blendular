import { ChangeDetectionStrategy, Component, booleanAttribute, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiDensity } from '../../../foundation/types';

@Component({
  selector: 'bui-toggle-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="bui-toggle-button"
      [class.active]="pressed()"
      [class.compact]="density() === 'compact'"
      [disabled]="disabled()"
      (click)="toggle()"
    >
      @if (icon()) {
        <span class="toggle-icon" [ngClass]="'bl-icons-' + icon()"></span>
      }
      <span class="toggle-label">{{ label() }}</span>
    </button>
  `,
  styles: [`
    .bui-toggle-button {
      min-height: var(--bui-control-height-md);
      padding: 0 var(--bui-spacing-md);
      display: inline-flex;
      align-items: center;
      gap: var(--bui-spacing-sm);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      background: var(--bui-surface-panel-header);
      color: var(--bui-color-text);
      cursor: pointer;
      font: inherit;
    }
    .bui-toggle-button.compact {
      min-height: var(--bui-control-height-sm);
      padding-inline: var(--bui-spacing-sm);
    }
    .bui-toggle-button.active {
      border-color: var(--bui-color-primary);
      background: color-mix(in srgb, var(--bui-color-primary) 20%, var(--bui-surface-panel-header) 80%);
      color: #fff;
    }
    .bui-toggle-button:hover:not(:disabled) {
      border-color: var(--bui-border-hover);
    }
    .bui-toggle-button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .toggle-icon {
      font-size: var(--bui-icon-size-sm);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiToggleButtonComponent {
  label = input.required<string>();
  icon = input<string | null>(null);
  density = input<BuiDensity>('comfortable');
  disabled = input(false, { transform: booleanAttribute });
  pressed = model(false);

  toggle() {
    if (!this.disabled()) {
      this.pressed.set(!this.pressed());
    }
  }
}

