import {
  Component, ChangeDetectionStrategy, input, model, signal, computed,
  forwardRef, ElementRef, viewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * BuiSliderComponent – Blender's iconic "Draggable Number Slider".
 *
 * Interaction Mechanics:
 * - Click + drag horizontally: changes value smoothly (ew-resize cursor)
 * - Single click (no drag): focuses as a text input for direct editing
 * - Supports min/max/step constraints
 * - Shows a progress bar fill proportional to value within range
 *
 * Uses model() for two-way binding and implements ControlValueAccessor
 * for Reactive Forms compatibility.
 */
@Component({
  selector: 'bui-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiSliderComponent),
      multi: true,
    },
  ],
})
export class BuiSliderComponent implements ControlValueAccessor, OnDestroy {
  /** Two-way binding for the current value */
  value = model(0);

  /** Minimum allowed value */
  min = input(0);

  /** Maximum allowed value */
  max = input(100);

  /** Step increment */
  step = input(1);

  /** Label shown on the left side */
  label = input('');

  /** Slider style variant */
  variant = input<'standard' | 'progress'>('standard');

  /** Label shown inside the slider on the far left */
  internalLabel = input<string>('');

  /** Suffix shown after the value (e.g., "px", "°", "m", "%") */
  suffix = input('');

  /** Decimal precision for display */
  precision = input(2);

  /** Whether the slider is disabled */
  disabled = input(false);

  /** Reference to the hidden text input */
  inputRef = viewChild<ElementRef<HTMLInputElement>>('editInput');

  /** Internal state: whether the user is in text-editing mode */
  editing = signal(false);

  /** Internal state: whether the user is currently dragging */
  dragging = signal(false);

  /** Progress bar width as a percentage */
  progressWidth = computed(() => {
    const val = this.value();
    const mn = this.min();
    const mx = this.max();
    if (mx === mn) return '0%';
    const pct = ((val - mn) / (mx - mn)) * 100;
    return `${Math.min(100, Math.max(0, pct))}%`;
  });

  /** Formatted display value */
  displayValue = computed(() => {
    const p = this.precision();
    const val = this.value();
    if (this.suffix() === '%') {
      return (val * 100).toFixed(p);
    }
    return val.toFixed(p);
  });

  // CVA callbacks
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  // Drag tracking
  private startX = 0;
  private startVal = 0;
  private hasDragged = false;
  private readonly DRAG_THRESHOLD = 3; // px before we consider it a drag

  // Bound handlers for cleanup
  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseUp = this.onMouseUp.bind(this);

  // ──────────────────────────────────────────────
  // Mouse interaction
  // ──────────────────────────────────────────────

  onMouseDown(event: MouseEvent) {
    if (this.disabled() || this.editing()) return;
    event.preventDefault();

    this.startX = event.clientX;
    this.startVal = this.value();
    this.hasDragged = false;

    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
  }

  private onMouseMove(event: MouseEvent) {
    const dx = event.clientX - this.startX;

    // Check if we've exceeded the drag threshold
    if (!this.hasDragged && Math.abs(dx) >= this.DRAG_THRESHOLD) {
      this.hasDragged = true;
      this.dragging.set(true);
    }

    if (this.hasDragged) {
      // Sensitivity: 200px of drag = full range
      const range = this.max() - this.min();
      const sensitivity = range / 200;
      const rawVal = this.startVal + dx * sensitivity;
      this.updateValue(rawVal);
    }
  }

  private onMouseUp(event: MouseEvent) {
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);

    const wasDragging = this.hasDragged;
    this.dragging.set(false);
    this.hasDragged = false;

    // If we didn't drag, it was a click → enter edit mode
    if (!wasDragging) {
      this.enterEditMode();
    }

    this.onTouched();
  }

  // ──────────────────────────────────────────────
  // Text editing mode
  // ──────────────────────────────────────────────

  enterEditMode() {
    if (this.disabled()) return;
    this.editing.set(true);

    // Focus the input after it renders
    setTimeout(() => {
      const input = this.inputRef()?.nativeElement;
      if (input) {
        input.value = this.displayValue();
        input.focus();
        input.select();
      }
    });
  }

  onEditKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.commitEdit(event);
    } else if (event.key === 'Escape') {
      this.editing.set(false);
    }
  }

  commitEdit(event: Event) {
    const input = event.target as HTMLInputElement;
    const parsed = parseFloat(input.value);
    if (!isNaN(parsed)) {
      this.updateValue(parsed);
    }
    this.editing.set(false);
  }

  onEditBlur(event: Event) {
    this.commitEdit(event);
  }

  // ──────────────────────────────────────────────
  // Value management
  // ──────────────────────────────────────────────

  private updateValue(raw: number) {
    const clamped = Math.min(this.max(), Math.max(this.min(), raw));
    const s = this.step();
    const snapped = s ? Math.round(clamped / s) * s : clamped;
    const final = parseFloat(snapped.toFixed(this.precision()));

    this.value.set(final);
    this.onChange(final);
  }

  increment(event: MouseEvent) {
    event.stopPropagation();
    if (this.disabled()) return;
    const step = this.step() || Math.pow(10, -this.precision());
    this.updateValue(this.value() + step);
    this.onTouched();
  }

  decrement(event: MouseEvent) {
    event.stopPropagation();
    if (this.disabled()) return;
    const step = this.step() || Math.pow(10, -this.precision());
    this.updateValue(this.value() - step);
    this.onTouched();
  }

  // ──────────────────────────────────────────────
  // ControlValueAccessor
  // ──────────────────────────────────────────────

  writeValue(val: number): void {
    this.value.set(val ?? 0);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
  }
}
