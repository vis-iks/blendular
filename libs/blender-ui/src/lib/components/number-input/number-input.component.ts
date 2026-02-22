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
    const val = (event.target as HTMLInputElement).valueAsNumber;
    this.valueChange.emit(val);
  }
}
