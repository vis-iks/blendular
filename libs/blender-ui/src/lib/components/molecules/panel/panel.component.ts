import { Component, ChangeDetectionStrategy, input, model, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiCheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { CdkDragHandle } from '@angular/cdk/drag-drop';

/**
 * BuiPanelComponent – Blender-style collapsible accordion panel.
 *
 * Features a compact header with chevron toggle, optional dotted drag-grip,
 * and smooth collapse animation. Uses model() for open/close state.
 */
@Component({
  selector: 'bui-panel',
  standalone: true,
  imports: [CommonModule, BuiCheckboxComponent, CdkDragHandle],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiPanelComponent {
  /** Panel header title */
  title = input('Panel');

  /** Icon in header (Material Symbols, optional) */
  icon = input<string | undefined>(undefined);

  /** Panel layout variant: 'standard' (bordered box) or 'sub' (flat/nested) */
  variant = input<'standard' | 'sub'>('standard');

  /** Whether the panel is expanded (two-way) */
  expanded = model(true);

  /** Whether to show a checkbox in the header */
  hasCheckbox = input(false);

  /** Checkbox state if hasCheckbox is true (two-way) */
  checked = model(false);

  /** Whether to show the dotted drag-grip on the far right */
  showDragHandle = input<boolean | 'auto'>('auto');

  /** Whether the panel itself is draggable in a list */
  draggable = input(false);

  shouldShowDragHandle = computed(() => {
    const val = this.showDragHandle();
    if (val === 'auto') {
      return !this.isSub() && this.draggable();
    }
    return val;
  });

  isSub = computed(() => this.variant() === 'sub');

  toggle() {
    this.expanded.set(!this.expanded());
  }
}
