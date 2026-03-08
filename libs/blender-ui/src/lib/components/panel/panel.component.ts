import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiPanelComponent – Blender-style collapsible accordion panel.
 *
 * Features a compact header with chevron toggle, optional dotted drag-grip,
 * and smooth collapse animation. Uses model() for open/close state.
 */
@Component({
  selector: 'bui-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiPanelComponent {
  /** Panel header title */
  title = input('Panel');

  /** Icon in header (Material Symbols) */
  icon = input<string | undefined>(undefined);

  /** Whether the panel is expanded (two-way) */
  expanded = model(true);

  /** Whether to show the dotted drag-grip on the header */
  draggable = input(false);

  toggle() {
    this.expanded.set(!this.expanded());
  }
}
