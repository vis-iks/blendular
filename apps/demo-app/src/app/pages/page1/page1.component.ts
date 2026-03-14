import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BuiButtonComponent, BuiCheckboxComponent, BuiButtonGroupComponent, BuiPopoverDirective, BuiPopoverContainerComponent, BuiPopoverSectionComponent } from '@blender-ui/core';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    BuiButtonComponent, 
    BuiCheckboxComponent, 
    BuiButtonGroupComponent,
    BuiPopoverDirective,
    BuiPopoverContainerComponent,
    BuiPopoverSectionComponent
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component {
  // Button demos
  buttonClickCount = signal(0);
  toggleState = signal(false);

  // Checkbox demos
  checkboxA = signal(false);
  checkboxB = signal(true);

  // Reactive form checkbox
  checkboxFormControl = new FormControl(false);

  onButtonClick() {
    this.buttonClickCount.update(c => c + 1);
  }
}
