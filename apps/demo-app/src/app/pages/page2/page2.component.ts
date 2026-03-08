import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BuiSliderComponent } from '@blender-ui/core';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BuiSliderComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component {
  // Basic slider demos
  sliderValue = signal(50);
  xPosition = signal(0);
  yPosition = signal(0);
  zPosition = signal(0);

  // Scale with different ranges
  scale = signal(1);
  rotation = signal(45);
  opacity = signal(0.75);

  // Reactive form slider
  formSlider = new FormControl(25);
}
