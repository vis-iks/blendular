import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiToastService } from './toast.service';

/**
 * BuiToastContainerComponent – Renders active toasts.
 * 
 * Place this once in your app.component.html:
 * <bui-toast-container></bui-toast-container>
 */
@Component({
  selector: 'bui-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="bui-toast" [class]="toast.type" (click)="remove(toast.id)">
          <span class="toast-icon" [ngClass]="getIcon(toast.type)">
          </span>
          <span class="toast-message">{{ toast.message }}</span>
          <button class="toast-close bl-icons-cancel"></button>
        </div>
      }
    </div>
  `,
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiToastContainerComponent {
  toastService = inject(BuiToastService);

  remove(id: number) {
    this.toastService.remove(id);
  }

  getIcon(type: string): string {
    switch (type) {
      case 'success': return 'bl-icons-checkmark';
      case 'warning': return 'bl-icons-warning_large';
      case 'error': return 'bl-icons-error';
      default: return 'bl-icons-info';
    }
  }
}
