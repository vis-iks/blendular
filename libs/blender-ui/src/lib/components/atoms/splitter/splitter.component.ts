import {
  Component, ChangeDetectionStrategy, input, signal, ElementRef,
  viewChild, OnDestroy, model, effect, booleanAttribute
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiSplitterComponent – Blender-style resizable split pane.
 *
 * Renders two content areas separated by a draggable divider.
 * Drag the border to resize panes, mimicking Blender's area resizers.
 *
 * Usage:
 *   <bui-splitter orientation="horizontal">
 *     <div first>Left pane</div>
 *     <div second>Right pane</div>
 *   </bui-splitter>
 */
@Component({
  selector: 'bui-splitter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splitter.component.html',
  styleUrl: './splitter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiSplitterComponent implements OnDestroy {
  /** Orientation of the split */
  orientation = input<'horizontal' | 'vertical'>('horizontal');

  /** Initial size of the first pane in percent */
  initialSize = input(50);

  /** Controlled first pane size in percent */
  size = model<number | null>(null);

  /** Minimum size of the first pane in percent */
  minFirstPaneSize = input(10);

  /** Minimum size of the second pane in percent */
  minSecondPaneSize = input(10);

  /** Whether the divider can be dragged */
  disabled = input(false, { transform: booleanAttribute });

  /** First pane size as a percentage */
  firstPaneSize = signal(50);

  /** Whether the user is currently dragging the divider */
  dragging = signal(false);

  containerRef = viewChild<ElementRef<HTMLDivElement>>('container');

  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseUp = this.onMouseUp.bind(this);

  constructor() {
    effect(() => {
      const controlledSize = this.size();
      const fallbackSize = this.initialSize();
      this.firstPaneSize.set(this.clampSize(controlledSize ?? fallbackSize));
    });
  }

  onDividerMouseDown(event: MouseEvent) {
    if (this.disabled()) return;
    this.dragging.set(true);
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
    event.preventDefault();
  }

  private onMouseMove(event: MouseEvent) {
    const container = this.containerRef()?.nativeElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let pct: number;

    if (this.orientation() === 'horizontal') {
      pct = ((event.clientX - rect.left) / rect.width) * 100;
    } else {
      pct = ((event.clientY - rect.top) / rect.height) * 100;
    }

    const clamped = this.clampSize(pct);
    this.firstPaneSize.set(clamped);
    this.size.set(clamped);
  }

  private onMouseUp() {
    this.dragging.set(false);
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
  }

  private clampSize(value: number): number {
    const min = this.minFirstPaneSize();
    const max = 100 - this.minSecondPaneSize();
    return Math.min(max, Math.max(min, value));
  }
}
