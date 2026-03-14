import { ChangeDetectionStrategy, Component, booleanAttribute, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuiComponentSize, BuiDensity } from '../../../foundation/types';

@Component({
  selector: 'bui-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="bui-text-input" [class.compact]="density() === 'compact'" [class.inline]="variant() === 'inline'">
      @if (label()) {
        <span class="input-label">{{ label() }}</span>
      }
      <input
        [type]="type()"
        [disabled]="disabled()"
        [placeholder]="placeholder()"
        [value]="value()"
        [class.sm]="size() === 'sm'"
        [class.lg]="size() === 'lg'"
        (input)="onInput($event)"
      />
    </label>
  `,
  styles: [`
    .bui-text-input {
      display: flex;
      flex-direction: column;
      gap: var(--bui-spacing-xs);
      color: var(--bui-color-text);
      font: inherit;
    }
    .bui-text-input.inline {
      flex-direction: row;
      align-items: center;
      gap: var(--bui-spacing-sm);
    }
    .input-label {
      font-size: var(--bui-font-size-xs);
      color: var(--bui-color-text-muted);
    }
    input {
      width: 100%;
      min-height: var(--bui-control-height-md);
      padding: 0 var(--bui-spacing-md);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      background: var(--bui-surface-input);
      color: var(--bui-color-text);
      font: inherit;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }
    .compact input,
    input.sm {
      min-height: var(--bui-control-height-sm);
      padding-inline: var(--bui-spacing-sm);
    }
    input.lg {
      min-height: 32px;
    }
    input:focus {
      outline: var(--bui-focus-outline-width) solid var(--bui-border-focus);
      outline-offset: var(--bui-focus-outline-offset);
      border-color: var(--bui-border-focus);
    }
    input:disabled {
      opacity: 0.45;
      cursor: default;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTextInputComponent {
  label = input('');
  placeholder = input('');
  type = input<'text' | 'email' | 'password' | 'search'>('text');
  variant = input<'default' | 'inline'>('default');
  size = input<BuiComponentSize>('md');
  density = input<BuiDensity>('comfortable');
  disabled = input(false, { transform: booleanAttribute });
  value = model('');

  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement | null)?.value ?? '');
  }
}
