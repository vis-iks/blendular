import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'bui-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class BuiSelectComponent {
  options = input<SelectOption[]>([]);
  value = input<any>(null);
  valueChange = output<any>();

  onChange(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    // Find the original value from options if needed, but for string values it's fine.
    // If value is complex object, we might need to map it back.
    // Assuming simple string/number values for now.
    this.valueChange.emit(val);
  }
}
