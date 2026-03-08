import { Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bui-number-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class BuiNumberInputComponent {
  value = input(0);
  min = input<number>(0);
  max = input<number>(100);
  step = input(1);
  valueChange = output<number>();

  progressWidth = computed(() => {
    const val = this.value();
    const min = this.min();
    const max = this.max();
    const percentage = ((val - min) / (max - min)) * 100;
    return `${Math.min(100, Math.max(0, percentage))}%`;
  });

  onInput(event: Event) {
    let val = (event.target as HTMLInputElement).valueAsNumber;
    if (isNaN(val)) val = this.min(); // fallback
    this.updateValue(val);
  }

  isDragging = false;
  startX = 0;
  startVal = 0;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.startVal = this.value();
    
    // Add document listeners
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    
    // Prevent text selection while dragging
    event.preventDefault();
  }

  onMouseMove = (event: MouseEvent) => {
    if (!this.isDragging) return;

    const dx = event.clientX - this.startX;
    // Scale the drag distance to steps. E.g., 1px drag = 1 step
    // But for 0.00 to 1.00 inputs, a step is usually 0.01 or so.
    const domain = this.max() - this.min();
    
    // Need a sensitivity factor. e.g. 100px = full domain range
    const sensitivity = domain / 100;
    
    let newVal = this.startVal + dx * sensitivity;
    
    this.updateValue(newVal);
  };

  onMouseUp = (event: MouseEvent) => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  private updateValue(val: number) {
    const clamped = Math.min(this.max(), Math.max(this.min(), val));
    // Round to step if necessary
    const snapped = this.step() ? Math.round(clamped / this.step()) * this.step() : clamped;
    // Fix floating point errors
    const finalVal = parseFloat(snapped.toFixed(3));
    this.valueChange.emit(finalVal);
  }
}
