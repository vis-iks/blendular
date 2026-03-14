import { Injectable, signal } from '@angular/core';

export type BuiToastType = 'info' | 'success' | 'warning' | 'error';

export interface BuiToast {
  id: number;
  message: string;
  type: BuiToastType;
  duration?: number;
}

/**
 * BuiToastService – Programmatic notification system.
 * 
 * Manages a list of active toasts.
 */
@Injectable({
  providedIn: 'root',
})
export class BuiToastService {
  private nextId = 1;
  toasts = signal<BuiToast[]>([]);

  show(message: string, type: BuiToastType = 'info', duration: number = 3000) {
    const id = this.nextId++;
    const toast: BuiToast = { id, message, type, duration };
    
    this.toasts.update(t => [...t, toast]);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  remove(id: number) {
    this.toasts.update(t => t.filter(toast => toast.id !== id));
  }

  success(message: string) { this.show(message, 'success'); }
  info(message: string) { this.show(message, 'info'); }
  warning(message: string) { this.show(message, 'warning'); }
  error(message: string) { this.show(message, 'error'); }
}
