import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSegmentedControlComponent, BuiSegmentOption } from '../../atoms/segmented-control/segmented-control.component';
import { BuiCheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { SnapTargetItem, SnapIndividualItem, SnapRotationIncrement } from './snap-popover.interface';
import { BuiPopoverContainerComponent, BuiPopoverHeaderComponent, BuiPopoverSectionComponent } from '../../molecules/popover';

@Component({
  selector: 'bui-snap-popover',
  standalone: true,
  imports: [
    CommonModule, 
    BuiSegmentedControlComponent, 
    BuiCheckboxComponent,
    BuiPopoverContainerComponent,
    BuiPopoverHeaderComponent,
    BuiPopoverSectionComponent
  ],
  templateUrl: './snap-popover.component.html',
  styleUrl: './snap-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiSnapPopoverComponent {
  // ── Snap Base ────────────────────────────────────────────────
  /** Options for the Snap Base segmented control */
  snapBaseOptions = input<BuiSegmentOption[]>([]);
  /** Two-way bound selected snap base value */
  snapBase = model<string>('');

  // ── Snap Target ───────────────────────────────────────────────
  /** Target mode items (Increment, Grid, Vertex, Edge, Face, Volume…) */
  snapTargetItems = input<SnapTargetItem[]>([]);
  /** Two-way bound selected snap target value */
  snapTarget = model<string>('');

  // ── Individual Elements ───────────────────────────────────────
  /** Rows shown in "Snap Target for Individual Elements" */
  individualItems = input<SnapIndividualItem[]>([]);
  /** Two-way bound checked state for each individual item (by index) */
  individualChecked = model<boolean[]>([]);

  toggleIndividual(index: number) {
    const current = [...this.individualChecked()];
    current[index] = !current[index];
    this.individualChecked.set(current);
  }

  // ── Checkboxes ────────────────────────────────────────────────
  absoluteIncrementSnap = model(false);
  alignRotationToTarget = model(false);
  backfaceCulling = model(false);

  // ── Affect ────────────────────────────────────────────────────
  /** Options for the Affect segmented control */
  affectOptions = input<BuiSegmentOption[]>([]);
  /** Two-way bound selected affect value */
  affect = model<string>('');

  // ── Rotation Increment ────────────────────────────────────────
  /** Buttons shown in Rotation Increment, e.g. [{label:'5°'},{label:'1°'}] */
  rotationIncrements = input<SnapRotationIncrement[]>([]);
}
