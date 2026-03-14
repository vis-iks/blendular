import { ChangeDetectionStrategy, Component, booleanAttribute, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiComponentSize, BuiDensity } from '../../../foundation/types';

@Component({
  selector: 'bui-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="bui-icon-button"
      [class.active]="active()"
      [class.raised]="variant() === 'raised'"
      [class.compact]="density() === 'compact'"
      [class.sm]="size() === 'sm'"
      [class.lg]="size() === 'lg'"
      [disabled]="disabled()"
      [attr.aria-label]="label() || icon()"
      [title]="label() || icon()"
      (click)="clicked.emit($event)"
    >
      <span class="button-icon" [ngClass]="'bl-icons-' + icon()"></span>
    </button>
  `,
  styles: [`
    .bui-icon-button {
      width: var(--bui-control-height-md);
      height: var(--bui-control-height-md);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      background: color-mix(in srgb, var(--bui-surface-panel) 88%, black 12%);
      color: var(--bui-color-text);
      cursor: pointer;
      transition: background var(--bui-motion-fast), border-color var(--bui-motion-fast), color var(--bui-motion-fast);
    }
    .bui-icon-button.compact,
    .bui-icon-button.sm {
      width: var(--bui-control-height-sm);
      height: var(--bui-control-height-sm);
    }
    .bui-icon-button.lg {
      width: 32px;
      height: 32px;
    }
    .bui-icon-button.raised {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
      background: var(--bui-surface-panel-header);
    }
    .bui-icon-button.active {
      border-color: var(--bui-color-primary);
      background: color-mix(in srgb, var(--bui-color-primary) 28%, var(--bui-surface-panel) 72%);
      color: #fff;
    }
    .bui-icon-button:hover:not(:disabled) {
      border-color: var(--bui-border-hover);
      background: color-mix(in srgb, var(--bui-surface-panel-header) 84%, white 8%);
    }
    .bui-icon-button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .button-icon {
      font-size: var(--bui-icon-size-md);
      line-height: 1;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiIconButtonComponent {
  icon = input.required<string>();
  label = input('');
  active = input(false, { transform: booleanAttribute });
  disabled = input(false, { transform: booleanAttribute });
  size = input<BuiComponentSize>('md');
  density = input<BuiDensity>('comfortable');
  variant = input<'ghost' | 'raised'>('ghost');

  clicked = output<MouseEvent>();
}

