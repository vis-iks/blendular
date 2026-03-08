import { Directive, Input, ElementRef, ViewContainerRef, HostListener, TemplateRef, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

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
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('click')
  toggle() {
    if (this.overlayRef) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.overlayRef) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 4
      }, {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: 4
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

  close() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  ngOnDestroy() {
    this.close();
  }
}
