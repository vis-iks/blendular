import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BuiButtonComponent, BuiDialogComponent, ContextMenuComponent, 
  ContextMenuItem, BuiToastService, BuiToastContainerComponent,
  BuiProgressComponent, BuiGitGraphComponent, GitNode
} from '@blender-ui/core';

@Component({
  selector: 'app-page6',
  standalone: true,
  imports: [
    CommonModule, 
    BuiButtonComponent, 
    BuiDialogComponent, 
    ContextMenuComponent,
    BuiToastContainerComponent,
    BuiProgressComponent,
    BuiGitGraphComponent
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
    { label: 'Move', icon: 'object_origin' },
    { label: 'Rotate', icon: 'orientation_gimbal' },
    { label: 'Scale', icon: 'fullscreen_enter' },
    { label: 'Delete', icon: 'trash', disabled: true },
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

  // --- Progress Demo ---
  renderProgress = signal(0);
  isRendering = signal(false);
  private renderInterval: any = null;

  startRender() {
    this.renderProgress.set(0);
    this.isRendering.set(true);
    this.renderInterval = setInterval(() => {
      const next = this.renderProgress() + Math.random() * 5;
      if (next >= 100) {
        this.renderProgress.set(100);
        this.stopRender();
      } else {
        this.renderProgress.set(Math.round(next));
      }
    }, 200);
  }

  stopRender() {
    if (this.renderInterval) {
      clearInterval(this.renderInterval);
      this.renderInterval = null;
    }
    this.isRendering.set(false);
  }

  // --- Git Graph Demo ---
  commitHistory: GitNode[] = [
    { id: 'a1', message: 'feat: add datagrid component', author: 'dev1', date: '2 hours ago', parents: ['b2'], refs: ['main', 'HEAD'] },
    { id: 'b2', message: 'fix: tab switching in workspace demo', author: 'dev1', date: '3 hours ago', parents: ['c3'] },
    { id: 'c3', message: 'Merge branch \'feature/datalist\'', author: 'dev1', date: '5 hours ago', parents: ['d4', 'f6'] },
    { id: 'd4', message: 'refactor: remove unused imports', author: 'dev2', date: '6 hours ago', parents: ['e5'] },
    { id: 'e5', message: 'chore: update dependencies', author: 'dev2', date: '1 day ago', parents: ['g7'] },
    { id: 'f6', message: 'feat: implement datalist component', author: 'dev1', date: '1 day ago', parents: ['g7'], refs: ['feature/datalist'] },
    { id: 'g7', message: 'feat: add breadcrumbs component', author: 'dev1', date: '2 days ago', parents: ['h8'] },
    { id: 'h8', message: 'Merge branch \'feature/toolbar\'', author: 'dev2', date: '3 days ago', parents: ['i9', 'k11'] },
    { id: 'i9', message: 'docs: update component roadmap', author: 'dev1', date: '3 days ago', parents: ['j10'] },
    { id: 'j10', message: 'fix: panel collapse animation', author: 'dev2', date: '4 days ago', parents: [] },
    { id: 'k11', message: 'feat: toolbar sections and groups', author: 'dev1', date: '4 days ago', parents: ['j10'], refs: ['feature/toolbar'] },
  ];
}
