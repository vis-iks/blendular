import { Directive, Input, ElementRef, ViewContainerRef, HostListener, TemplateRef, OnDestroy, Optional } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BuiPopoverService } from './popover.service';
import { BuiPopoverArrowPosition } from './popover-container.component';

@Directive({
  selector: '[buiPopover]',
  standalone: true
})
export class BuiPopoverDirective implements OnDestroy {
  @Input('buiPopover') popoverTemplate!: TemplateRef<any>;
  @Input() buiPopoverPlacement: 'auto' | 'top' | 'bottom' = 'auto';
  
  private overlayRef: OverlayRef | null = null;
  private readonly arrowOffset = 8;

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
      .withPositions(this.getPositions());

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });

    this.overlayRef.backdropClick().subscribe(() => this.close());
    
    // Subscribe BEFORE attach so we catch the initial position emission
    positionStrategy.positionChanges.subscribe(change => {
      const pair = change.connectionPair;
      let arrowPos: BuiPopoverArrowPosition = 'none';
      
      // Determine arrow position based on the chosen connection pair
      if (pair.overlayY === 'top') {
        arrowPos = 'top';
      } else if (pair.overlayY === 'bottom') {
        arrowPos = 'bottom';
      } else if (pair.overlayX === 'start') {
        arrowPos = 'left';
      } else if (pair.overlayX === 'end') {
        arrowPos = 'right';
      }

      const overlayElement = this.overlayRef?.overlayElement;
      if (overlayElement) {
        // Find the container - it might take a microtask if attach hasn't finished rendering
        setTimeout(() => {
          const container = overlayElement.querySelector('.popover-container') as HTMLElement;
          if (container) {
            container.classList.remove('arrow-top', 'arrow-bottom', 'arrow-left', 'arrow-right', 'arrow-none');
            container.classList.add('arrow-' + arrowPos);

            // Calculate precise pixel offset for the arrow to point at the center of the trigger
            const triggerRect = this.elementRef.nativeElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            if (arrowPos === 'top' || arrowPos === 'bottom') {
              const triggerCenter = triggerRect.left + (triggerRect.width / 2);
              const containerLeft = containerRect.left;
              const relativeOffset = triggerCenter - containerLeft;
              container.style.setProperty('--arrow-offset', `${relativeOffset}px`);
            } else if (arrowPos === 'left' || arrowPos === 'right') {
              const triggerCenter = triggerRect.top + (triggerRect.height / 2);
              const containerTop = containerRect.top;
              const relativeOffset = triggerCenter - containerTop;
              container.style.setProperty('--arrow-offset', `${relativeOffset}px`);
            }
          }
        });
      }
    });

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

  private getPositions() {
    const belowPositions = [{
      originX: 'center' as const,
      originY: 'bottom' as const,
      overlayX: 'center' as const,
      overlayY: 'top' as const,
      offsetY: this.arrowOffset
    }, {
      originX: 'start' as const,
      originY: 'bottom' as const,
      overlayX: 'start' as const,
      overlayY: 'top' as const,
      offsetY: this.arrowOffset
    }, {
      originX: 'end' as const,
      originY: 'bottom' as const,
      overlayX: 'end' as const,
      overlayY: 'top' as const,
      offsetY: this.arrowOffset
    }];

    const abovePositions = [{
      originX: 'center' as const,
      originY: 'top' as const,
      overlayX: 'center' as const,
      overlayY: 'bottom' as const,
      offsetY: -this.arrowOffset
    }, {
      originX: 'start' as const,
      originY: 'top' as const,
      overlayX: 'start' as const,
      overlayY: 'bottom' as const,
      offsetY: -this.arrowOffset
    }, {
      originX: 'end' as const,
      originY: 'top' as const,
      overlayX: 'end' as const,
      overlayY: 'bottom' as const,
      offsetY: -this.arrowOffset
    }];

    if (this.buiPopoverPlacement === 'top') {
      return [...abovePositions, ...belowPositions];
    }

    return [...belowPositions, ...abovePositions];
  }
}
