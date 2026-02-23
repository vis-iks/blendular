import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class BuiCheckboxComponent {
  checked = input(false);
  label = input('');
  disabled = input(false);
  checkedChange = output<boolean>();

  toggle() {
    if (this.disabled()) return;
    this.checkedChange.emit(!this.checked());
  }
}
