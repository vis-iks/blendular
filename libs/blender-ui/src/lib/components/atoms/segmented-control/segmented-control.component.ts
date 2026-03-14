import { Component, ChangeDetectionStrategy, input, model, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface BuiSegmentOption {
  label: string;
  value: any;
}

/**
 * BuiSegmentedControlComponent - Horizontal choices (Radio buttons look).
 * 
 * Replicates Blender's connected buttons where one item is active.
 */
@Component({
  selector: 'bui-segmented-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-segmented-control" [class.disabled]="disabled()">
      @for (option of options(); track option.value) {
        <button
          type="button"
          class="segment-item"
          [class.active]="value() === option.value"
          (click)="select(option.value)"
        >
          {{ option.label }}
        </button>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .bui-segmented-control {
      display: flex;
      width: 100%;
      height: 20px;
      background-color: var(--bui-input-bg, #2c2c2c);
      border-radius: var(--bui-radius-sm);
      overflow: hidden;
      border: 1px solid var(--bui-border-dark, #111);
      
      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }

    .segment-item {
      flex: 1 1 0;
      height: 100%;
      background: none;
      border: none;
      border-right: 1px solid var(--bui-border-dark, #111);
      color: var(--bui-text-color);
      font-size: 11px;
      padding: 0 4px;
      cursor: pointer;
      transition: background-color 0.1s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      justify-content: center;

      &:last-child {
        border-right: none;
      }

      &.active {
        background-color: #4772b3; /* Blender blue */
        color: white;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
      }

      &:hover:not(.active) {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiSegmentedControlComponent),
      multi: true,
    },
  ],
})
export class BuiSegmentedControlComponent implements ControlValueAccessor {
  /** Selectable options */
  options = input<BuiSegmentOption[]>([]);

  /** Two-way value binding */
  value = model<any>();

  /** Disabled state */
  disabled = input(false);

  private onChange: (val: any) => void = () => {};
  private onTouched: () => void = () => {};

  select(val: any) {
    if (this.disabled()) return;
    this.value.set(val);
    this.onChange(val);
    this.onTouched();
  }

  writeValue(val: any): void {
    this.value.set(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
