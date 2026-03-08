import { Directive, Input, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BuiTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[buiTooltip]',
  standalone: true
})
export class BuiTooltipDirective implements OnDestroy {
  @Input('buiTooltip') text: string = '';
  @Input() buiTooltipDetails: string = '';
  @Input() buiTooltipShortcut: string = '';

  private overlayRef: OverlayRef | null = null;
  private timeoutId: any;

  constructor(private overlay: Overlay, private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  show() {
    this.timeoutId = setTimeout(() => {
      this.attachTooltip();
    }, 500); // 500ms delay like Blender
  }

  @HostListener('mouseleave')
  hide() {
    clearTimeout(this.timeoutId);
    this.closeTooltip();
  }

  @HostListener('click')
  onClick() {
    clearTimeout(this.timeoutId);
    this.closeTooltip();
  }

  private attachTooltip() {
    if (this.overlayRef || !this.text) return;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
        { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: 8 },
        { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -8 }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false,
    });

    const portal = new ComponentPortal(BuiTooltipComponent);
    const tooltipRef = this.overlayRef.attach(portal);

    tooltipRef.instance.title = this.text;
    tooltipRef.instance.details = this.buiTooltipDetails;
    tooltipRef.instance.shortcut = this.buiTooltipShortcut;
  }

  private closeTooltip() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  ngOnDestroy() {
    this.hide();
  }
}
