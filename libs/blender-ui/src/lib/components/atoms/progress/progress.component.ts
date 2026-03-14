import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiProgressComponent {
  /** Progress value from 0 to 100. Ignored when indeterminate. */
  @Input() value = 0;

  /** Whether the progress is determinate (shows percentage) or indeterminate (animated pulse). */
  @Input() determinate = true;

  /** Text label rendered centered on the bar (e.g., "Rendering 45%"). */
  @Input() label = '';

  /** Whether to show a cancel (X) button on the right side. */
  @Input() cancelable = false;

  /** Color accent for the fill bar. */
  @Input() color: 'blue' | 'green' | 'orange' | 'red' = 'blue';

  /** Emitted when the cancel button is clicked. */
  @Output() cancel = new EventEmitter<void>();

  get clampedValue(): number {
    return Math.max(0, Math.min(100, this.value));
  }

  get displayLabel(): string {
    if (this.label) return this.label;
    if (this.determinate) return `${this.clampedValue}%`;
    return '';
  }

  onCancel(event: MouseEvent) {
    event.stopPropagation();
    this.cancel.emit();
  }
}
