import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BuiButtonComponent, BuiDialogComponent, ContextMenuComponent, 
  ContextMenuItem, BuiToastService, BuiToastContainerComponent
} from '@blender-ui/core';

@Component({
  selector: 'app-page6',
  standalone: true,
  imports: [
    CommonModule, 
    BuiButtonComponent, 
    BuiDialogComponent, 
    ContextMenuComponent,
    BuiToastContainerComponent
  ],
  templateUrl: './page6.component.html',
  styleUrl: './page6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page6Component {
  toastService = inject(BuiToastService);

  // Dialog State
  isDialogVisible = signal(false);

  // Context Menu State
  isMenuVisible = signal(false);
  menuX = signal(0);
  menuY = signal(0);
  
  menuItems: ContextMenuItem[] = [
    { label: 'Move', icon: 'open_with' },
    { label: 'Rotate', icon: 'sync' },
    { label: 'Scale', icon: 'aspect_ratio' },
    { label: 'Delete', icon: 'delete', disabled: true },
  ];

  openDialog() {
    this.isDialogVisible.set(true);
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.menuX.set(event.clientX);
    this.menuY.set(event.clientY);
    this.isMenuVisible.set(true);
  }

  onMenuItemClick(item: ContextMenuItem) {
    this.toastService.info(`Clicked: ${item.label}`);
  }

  showToast(type: 'success' | 'info' | 'warning' | 'error') {
    const messages = {
      success: 'Operation completed successfully!',
      info: 'New update available for your scene.',
      warning: 'Memory usage is nearing limits.',
      error: 'Failed to export the current object.'
    };
    this.toastService.show(messages[type], type);
  }
}
