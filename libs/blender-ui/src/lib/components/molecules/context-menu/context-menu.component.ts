import {
  Component, ChangeDetectionStrategy, Input, Output, 
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuItem } from './context-menu.interface';

/**
 * ContextMenuComponent – Floating right-click menu.
 * 
 * Works with ContextMenuTriggerDirective or can be used manually in templates.
 */
@Component({
  selector: 'bui-context-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible) {
      <div 
        class="bui-context-menu"
        [style.left.px]="x"
        [style.top.px]="y"
        (click)="$event.stopPropagation()"
      >
        @for (item of items; track $index) {
          @if (item.separator) {
            <div class="menu-separator"></div>
          } @else {
            <button 
              class="menu-item" 
              [class.disabled]="item.disabled"
              (click)="$event.stopPropagation(); onItemClick(item)"
            >
              @if (item.icon) {
                <span class="menu-icon" [ngClass]="'bl-icons-' + item.icon"></span>
              } @else {
                <span class="menu-spacer"></span>
              }
              <span class="menu-label">{{ item.label }}</span>
              @if (item.shortcut) {
                <span class="menu-shortcut">{{ item.shortcut }}</span>
              }
            </button>
          }
        }
      </div>
    }
  `,
  styleUrl: './context-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  @Input() items: ContextMenuItem[] = [];
  @Input() x = 0;
  @Input() y = 0;
  @Input() visible = true; // Default to true if used via Overlay
  
  @Output() itemClick = new EventEmitter<ContextMenuItem>();
  @Output() close = new EventEmitter<void>();

  onItemClick(item: ContextMenuItem) {
    if (item.disabled) return;
    if (item.action) item.action();
    this.itemClick.emit(item);
    this.close.emit();
  }
}
