import { Component, Input, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ContextMenuItem } from './context-menu.interface';

@Component({
  selector: 'bui-context-menu',
  standalone: true,
  imports: [CommonModule, CdkMenuModule],
  template: `
    <ng-template #menuTemplate let-items="items">
      <div class="context-menu" cdkMenu>
        <ng-container *ngFor="let item of items">

          <!-- Separator -->
          <div *ngIf="item.separator" class="menu-separator"></div>

          <!-- Submenu -->
          <button *ngIf="item.children && !item.separator"
                  class="menu-item"
                  [cdkMenuTriggerFor]="childMenu"
                  [disabled]="item.disabled">
            <div class="left-content">
              <span *ngIf="item.icon" class="icon material-symbols-outlined">{{item.icon}}</span>
              <span *ngIf="!item.icon" class="icon"></span> <!-- spacer -->
              <span class="label">{{item.label}}</span>
            </div>
            <span class="arrow material-symbols-outlined">arrow_right</span>

            <ng-template #childMenu>
              <ng-container *ngTemplateOutlet="menuTemplate; context: {items: item.children}"></ng-container>
            </ng-template>
          </button>

          <!-- Standard Item -->
          <button *ngIf="!item.children && !item.separator"
                  class="menu-item"
                  cdkMenuItem
                  (cdkMenuItemTriggered)="item.action && item.action()"
                  [disabled]="item.disabled">
            <div class="left-content">
              <span *ngIf="item.icon" class="icon material-symbols-outlined">{{item.icon}}</span>
              <span *ngIf="!item.icon" class="icon"></span> <!-- spacer -->
              <span class="label">{{item.label}}</span>
            </div>
            <span *ngIf="item.shortcut" class="shortcut">{{item.shortcut}}</span>
          </button>

        </ng-container>
      </div>
    </ng-template>

    <!-- Entry point for the recursive template -->
    <ng-container *ngTemplateOutlet="menuTemplate; context: {items: items}"></ng-container>
  `,
  styleUrls: ['./context-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent {
  @Input() items: ContextMenuItem[] = [];
  @ViewChild('menuTemplate') menuTemplate!: TemplateRef<any>;
}
