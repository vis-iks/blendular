import { Component, ChangeDetectionStrategy, input, model, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface BuiRadioOption {
  label: string;
  value: any;
}

/**
 * BuiRadioGroupComponent – Blender-style vertical radio selection group.
 */
@Component({
  selector: 'bui-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-radio-group" [class.disabled]="disabled()">
      @for (opt of options(); track opt.value) {
        <div 
          class="bui-radio-item" 
          (click)="select(opt.value)"
          [class.selected]="value() === opt.value"
        >
          <div class="bui-radio-circle">
            @if (value() === opt.value) {
              <div class="bui-radio-inner-dot"></div>
            }
          </div>
          <span class="bui-radio-label">{{ opt.label }}</span>
        </div>
      }
    </div>
  `,
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiRadioGroupComponent),
      multi: true,
    },
  ],
})
export class BuiRadioGroupComponent implements ControlValueAccessor {
  /** List of selectable radio options */
  options = input<BuiRadioOption[]>([]);

  /** Two-way binding for the current value */
  value = model<any>(null);

  /** Disabled state */
  disabled = input(false);

  // CVA
  private onChange: (val: any) => void = () => {};
  private onTouched: () => void = () => {};

  select(val: any) {
    if (this.disabled()) return;
    this.value.set(val);
    this.onChange(val);
    this.onTouched();
  }

  // ControlValueAccessor
  writeValue(val: any): void {
    this.value.set(val);
  }

  registerOnChange(fn: (val: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
