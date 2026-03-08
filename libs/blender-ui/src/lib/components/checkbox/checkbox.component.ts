import { Component, ChangeDetectionStrategy, input, model, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * BuiCheckboxComponent – Blender-style minimalist checkbox.
 *
 * Supports two-way binding via `[(checked)]` model signal
 * and works with Angular Reactive Forms via ControlValueAccessor.
 */
@Component({
  selector: 'bui-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-checkbox-container" [class.disabled]="disabled()" (click)="toggle()">
      <div 
        class="bui-checkbox-box" 
        [class.checked]="checked()"
        [class.filled-variant]="variant() === 'filled'"
      >
        @if (checked()) {
          <span class="bl-icons-checkmark check-icon"></span>
        }
      </div>
      @if (label()) {
        <span class="bui-checkbox-label">{{ label() }}</span>
      }
    </div>
  `,
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiCheckboxComponent),
      multi: true,
    },
  ],
})
export class BuiCheckboxComponent implements ControlValueAccessor {
  /** Two-way binding for checked state */
  checked = model(false);

  /** Label text */
  label = input('');

  /** Variant for the checkbox box */
  variant = input<'standard' | 'filled'>('standard');

  /** Disabled state */
  disabled = input(false);

  // CVA callbacks
  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  toggle() {
    if (this.disabled()) return;
    const newVal = !this.checked();
    this.checked.set(newVal);
    this.onChange(newVal);
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked.set(!!value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // disabled is an input signal, so CVA disabled is handled externally
  }
}
