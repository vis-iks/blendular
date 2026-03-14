import { Injectable, signal } from '@angular/core';

export interface BuiPopoverTarget {
  close(isSwitching?: boolean): void;
}

@Injectable()
export class BuiPopoverService {
  /** The currently open popover in this group */
  private activePopover = signal<BuiPopoverTarget | null>(null);

  /** If true, the popover group is "primed" (one has been clicked) */
  private isGroupActive = signal<boolean>(false);

  setActivePopover(popover: BuiPopoverTarget, wasClicked = false) {
    if (wasClicked) {
      this.isGroupActive.set(true);
    }

    const current = this.activePopover();
    if (current && current !== popover) {
      current.close(true);
    }

    this.activePopover.set(popover);
  }

  notifyClosed(popover: BuiPopoverTarget) {
    if (this.activePopover() === popover) {
      this.activePopover.set(null);
      this.isGroupActive.set(false);
    }
  }

  canSwitchOnHover(): boolean {
    return this.isGroupActive();
  }

  getActivePopover(): BuiPopoverTarget | null {
    return this.activePopover();
  }
}
