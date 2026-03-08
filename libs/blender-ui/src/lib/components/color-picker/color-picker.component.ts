import {
  Component, ChangeDetectionStrategy, model, signal, computed,
  forwardRef, ElementRef, viewChild, OnDestroy, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * BuiColorPickerComponent – Blender-style color picker popup.
 *
 * Features:
 * - Color preview swatch that toggles the popup
 * - Saturation/Value gradient area (click/drag to pick)
 * - Hue strip slider
 * - RGB numeric inputs
 * - Hex input
 *
 * Internal state uses HSV for the gradient. Value is emitted as hex string.
 */
@Component({
  selector: 'bui-color-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuiColorPickerComponent),
      multi: true,
    },
  ],
})
export class BuiColorPickerComponent implements ControlValueAccessor, OnDestroy {
  /** Two-way binding for the hex color value (e.g. "#ff6600") */
  color = model('#4772b3');

  /** Whether the popup is open */
  isOpen = signal(false);

  /** Internal HSV state */
  hue = signal(0);        // 0-360
  saturation = signal(0);  // 0-100
  brightness = signal(0);  // 0-100 (value in HSV)

  /** Computed RGB from HSV */
  rgb = computed(() => {
    return this.hsvToRgb(this.hue(), this.saturation(), this.brightness());
  });

  /** Computed hex from RGB */
  hexValue = computed(() => {
    const { r, g, b } = this.rgb();
    return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
  });

  /** Hue color for the SV gradient background */
  hueColor = computed(() => {
    const { r, g, b } = this.hsvToRgb(this.hue(), 100, 100);
    return `rgb(${r}, ${g}, ${b})`;
  });

  /** Gradient picker ref */
  gradientRef = viewChild<ElementRef<HTMLDivElement>>('gradientArea');
  hueStripRef = viewChild<ElementRef<HTMLDivElement>>('hueStrip');

  // CVA
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  // Drag state
  private draggingGradient = false;
  private draggingHue = false;

  private boundMouseMove = this.onDocMouseMove.bind(this);
  private boundMouseUp = this.onDocMouseUp.bind(this);

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    const el = event.target as HTMLElement;
    if (!el.closest('bui-color-picker')) {
      this.isOpen.set(false);
    }
  }

  togglePopup() {
    if (this.isOpen()) {
      this.isOpen.set(false);
    } else {
      // Parse current hex into HSV
      this.parseHexToHsv(this.color());
      this.isOpen.set(true);
    }
  }

  // ──────────────────────────────────────────────
  // Gradient (Saturation/Value) interaction
  // ──────────────────────────────────────────────

  onGradientMouseDown(event: MouseEvent) {
    this.draggingGradient = true;
    this.updateGradientFromEvent(event);
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
    event.preventDefault();
  }

  // ──────────────────────────────────────────────
  // Hue strip interaction
  // ──────────────────────────────────────────────

  onHueMouseDown(event: MouseEvent) {
    this.draggingHue = true;
    this.updateHueFromEvent(event);
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
    event.preventDefault();
  }

  private onDocMouseMove(event: MouseEvent) {
    if (this.draggingGradient) this.updateGradientFromEvent(event);
    if (this.draggingHue) this.updateHueFromEvent(event);
  }

  private onDocMouseUp() {
    this.draggingGradient = false;
    this.draggingHue = false;
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
  }

  private updateGradientFromEvent(event: MouseEvent) {
    const el = this.gradientRef()?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));
    this.saturation.set(Math.round((x / rect.width) * 100));
    this.brightness.set(Math.round(100 - (y / rect.height) * 100));
    this.emitColor();
  }

  private updateHueFromEvent(event: MouseEvent) {
    const el = this.hueStripRef()?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    this.hue.set(Math.round((x / rect.width) * 360));
    this.emitColor();
  }

  // ──────────────────────────────────────────────
  // RGB inputs
  // ──────────────────────────────────────────────

  onRgbInput(channel: 'r' | 'g' | 'b', event: Event) {
    const val = Math.max(0, Math.min(255, parseInt((event.target as HTMLInputElement).value) || 0));
    const { r, g, b } = this.rgb();
    const newR = channel === 'r' ? val : r;
    const newG = channel === 'g' ? val : g;
    const newB = channel === 'b' ? val : b;
    const hsv = this.rgbToHsv(newR, newG, newB);
    this.hue.set(hsv.h);
    this.saturation.set(hsv.s);
    this.brightness.set(hsv.v);
    this.emitColor();
  }

  // ──────────────────────────────────────────────
  // Hex input
  // ──────────────────────────────────────────────

  onHexInput(event: Event) {
    let hex = (event.target as HTMLInputElement).value.trim();
    if (!hex.startsWith('#')) hex = '#' + hex;
    if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
      this.parseHexToHsv(hex);
      this.emitColor();
    }
  }

  // ──────────────────────────────────────────────
  // Color conversion utilities
  // ──────────────────────────────────────────────

  private parseHexToHsv(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) || 0;
    const g = parseInt(hex.slice(3, 5), 16) || 0;
    const b = parseInt(hex.slice(5, 7), 16) || 0;
    const hsv = this.rgbToHsv(r, g, b);
    this.hue.set(hsv.h);
    this.saturation.set(hsv.s);
    this.brightness.set(hsv.v);
  }

  private emitColor() {
    const hex = this.hexValue();
    this.color.set(hex);
    this.onChange(hex);
    this.onTouched();
  }

  hsvToRgb(h: number, s: number, v: number): { r: number; g: number; b: number } {
    s /= 100;
    v /= 100;
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0, g = 0, b = 0;

    if (h < 60)       { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else              { r = c; g = 0; b = x; }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    };
  }

  rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h = 0;

    if (d !== 0) {
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }

    const s = max === 0 ? 0 : Math.round((d / max) * 100);
    const v = Math.round(max * 100);
    return { h, s, v };
  }

  // CVA
  writeValue(val: string): void {
    if (val) {
      this.color.set(val);
      this.parseHexToHsv(val);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
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
