import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { MenuItem } from './menu.interface';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'bui-menubar',
  standalone: true,
  imports: [CommonModule, OverlayModule, MenuComponent],
  template: `
    <div class="bui-menubar" #menubar>
      @for (item of items; track $index) {
        <button
          class="bui-menubar-item"
          [class.active]="activeItem === item"
          (click)="onItemClick(item, $event, $index)"
          (mouseenter)="onItemMouseEnter(item, $event, $index)"
        >
          {{ item.label }}
        </button>
      }
    </div>

    <ng-template #menuTemplate>
      <bui-menu 
        [items]="activeItem?.items || []" 
        (actionClick)="closeAll()"
        (close)="closeAll()"
      ></bui-menu>
    </ng-template>
  `,
  styleUrl: './menubar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarComponent {
  @Input() items: MenuItem[] = [];
  
  activeItem: MenuItem | null = null;
  private overlayRef: OverlayRef | null = null;
  
  @ViewChild('menuTemplate') menuTemplate!: any;
  @ViewChild('menubar') menubar!: ElementRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  onItemClick(item: MenuItem, event: MouseEvent, index: number) {
    if (this.activeItem === item) {
      this.closeAll();
    } else {
      this.openMenu(item, event.target as HTMLElement);
    }
  }

  onItemMouseEnter(item: MenuItem, event: MouseEvent, index: number) {
    if (this.activeItem && this.activeItem !== item) {
      // Switch menu on hover if a menu is already open
      this.openMenu(item, event.target as HTMLElement);
    }
  }

  openMenu(item: MenuItem, target: HTMLElement) {
    this.closeAll();
    if (!item.items || item.items.length === 0) {
      if (item.action) {
        item.action();
      }
      return;
    }

    this.activeItem = item;

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(target)
      .withPositions([{
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
      scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.closeAll();
    });

    const portal = new TemplatePortal(this.menuTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
  }

  closeAll() {
    this.activeItem = null;
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
