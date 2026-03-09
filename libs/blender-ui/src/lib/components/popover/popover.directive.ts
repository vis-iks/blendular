import { Directive, Input, ElementRef, ViewContainerRef, HostListener, TemplateRef, OnDestroy, Optional } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BuiPopoverService } from './popover.service';

@Directive({
  selector: '[buiPopover]',
  standalone: true
})
export class BuiPopoverDirective implements OnDestroy {
  @Input('buiPopover') popoverTemplate!: TemplateRef<any>;
  
  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    @Optional() private popoverService: BuiPopoverService
  ) {}

  @HostListener('click', ['$event'])
  toggle(event: MouseEvent) {
    event.stopPropagation();
    if (this.overlayRef) {
      this.close();
    } else {
      this.open(true);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.popoverService?.canSwitchOnHover() && !this.overlayRef) {
      this.open();
    }
  }

  open(isClick = false) {
    if (this.overlayRef) return;

    this.popoverService?.setActivePopover(this, isClick);

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 8
      }, {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: 8
      }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());
    
    // Allow closing popover from inside (e.g. clicking a menu action) by listening to custom events on the template wrapper
    const portal = new TemplatePortal(this.popoverTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  close(isSwitching = false) {
    if (this.overlayRef) {
      if (!isSwitching) {
        this.popoverService?.notifyClosed(this);
      }
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  ngOnDestroy() {
    this.close();
  }
}
