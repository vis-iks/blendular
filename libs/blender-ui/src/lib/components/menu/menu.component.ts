import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MenuItem } from './menu.interface';
import { BuiTooltipDirective } from '../tooltip/tooltip.directive';

@Component({
  selector: 'bui-menu',
  standalone: true,
  imports: [CommonModule, OverlayModule, BuiTooltipDirective],
  template: `
    <div class="bui-menu" (click)="$event.stopPropagation()">
      @for (item of items; track $index) {
        @if (item.separator) {
          <div class="bui-menu-separator"></div>
        } @else {
          <div
            #menuItemRef
            class="bui-menu-item"
            [class.disabled]="item.disabled"
            [class.active]="activeItem === item"
            [buiTooltip]="item.tooltip || ''"
            [buiTooltipDetails]="item.tooltipDetails || ''"
            [buiTooltipShortcut]="item.shortcut || ''"
            (click)="onItemClick(item, $event)"
            (mouseenter)="onItemMouseEnter(item, menuItemRef)"
          >
            <!-- Prefix Icon / Checkbox area -->
            <div class="bui-menu-item-prefix">
              @if (item.checked !== undefined) {
                <span class="check-icon" [ngClass]="item.checked ? 'bl-icons-checkbox_hlt' : 'bl-icons-checkbox_dehlt'"></span>
                <!-- We do not use the full checkbox to prevent focus trapping or extra clicks,
                     we just display the check visually matching Blender style -->
              } @else if (item.icon) {
                <span class="item-icon" [ngClass]="'bl-icons-' + item.icon"></span>
              }
            </div>

            <!-- Label -->
            <span class="bui-menu-item-label">{{ item.label }}</span>

            <div class="bui-menu-item-suffix">
              @if (item.items && item.items.length > 0) {
                <span class="bl-icons-tria_right submenu-icon"></span>
              } @else if (item.shortcut) {
                <span class="bui-menu-item-shortcut">{{ item.shortcut }}</span>
              }
            </div>
          </div>
        }
      }
    </div>

    <ng-template #subMenuTemplate>
      <bui-menu 
        [items]="activeItem?.items || []" 
        (actionClick)="onSubMenuAction()" 
        (close)="closeSubMenu()"
      ></bui-menu>
    </ng-template>
  `,
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];
  
  @Output() actionClick = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  activeItem: MenuItem | null = null;
  private overlayRef: OverlayRef | null = null;
  private hoverTimeout: any;

  @ViewChild('subMenuTemplate') subMenuTemplate!: any;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {}

  onItemClick(item: MenuItem, event: MouseEvent) {
    if (item.disabled) return;
    
    if (item.checked !== undefined) {
      // Toggle checked state
      item.checked = !item.checked;
    }

    if (item.action) {
      item.action();
    }

    if (!item.items || item.items.length === 0) {
      this.actionClick.emit();
    }
  }

  onItemMouseEnter(item: MenuItem, target: HTMLElement) {
    clearTimeout(this.hoverTimeout);
    
    // Slight delay before opening submenu, to allow diagonal mouse movement
    this.hoverTimeout = setTimeout(() => {
      this.closeSubMenu();
      
      if (item.items && item.items.length > 0 && !item.disabled) {
        this.activeItem = item;
        this.openSubMenu(target);
      } else {
        this.activeItem = null;
      }
      this.cdr.markForCheck();
    }, 150);
  }

  openSubMenu(target: HTMLElement) {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(target)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetX: 3,
          offsetY: -6
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'top',
          offsetX: -3,
          offsetY: -6
        }
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: false, // Don't block parent menu interaction
    });

    const portal = new TemplatePortal(this.subMenuTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  closeSubMenu() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  onSubMenuAction() {
    this.closeSubMenu();
    this.actionClick.emit();
  }
}
