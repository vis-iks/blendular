import { BuiSegmentOption } from '../segmented-control/segmented-control.component';

export type { BuiSegmentOption };

export interface SnapTargetItem {
  /** value key, e.g. 'increment', 'grid', 'vertex' */
  value: string;
  /** Display label */
  label: string;
  /** bl-icons class name */
  icon: string;
}

export interface SnapIndividualItem {
  /** Display label */
  label: string;
  /** Optional bl-icons class name */
  icon?: string;
}

export interface SnapRotationIncrement {
  label: string;
}
