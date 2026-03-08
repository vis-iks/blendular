import {
  Component, ChangeDetectionStrategy, input, signal, ElementRef,
  viewChild, OnDestroy
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

  /** First pane size as a percentage */
  firstPaneSize = signal(50);

  /** Whether the user is currently dragging the divider */
  dragging = signal(false);

  containerRef = viewChild<ElementRef<HTMLDivElement>>('container');

  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseUp = this.onMouseUp.bind(this);

  constructor() {
    // We'll set the initial size after input is available
    setTimeout(() => this.firstPaneSize.set(this.initialSize()));
  }

  onDividerMouseDown(event: MouseEvent) {
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

    // Clamp between 10% and 90%
    this.firstPaneSize.set(Math.min(90, Math.max(10, pct)));
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
}
