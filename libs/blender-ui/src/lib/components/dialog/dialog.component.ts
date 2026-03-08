import {
  Component, ChangeDetectionStrategy, input, output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

/**
 * BuiDialogComponent – Blender-style modal dialog.
 * 
 * A centered modal with a title bar, close button, and dimming backdrop.
 * Usage:
 * <bui-dialog [visible]="show" (close)="show = false">
 *   <ng-template buiDialogContent> ... </ng-template>
 * </bui-dialog>
 */
@Component({
  selector: 'bui-dialog',
  standalone: true,
  imports: [CommonModule, OverlayModule, PortalModule],
  template: `
    @if (visible()) {
      <div class="bui-dialog-backdrop" (click)="onBackdropClick($event)">
        <div class="bui-dialog-container" (click)="$event.stopPropagation()">
          <!-- Header -->
          <div class="bui-dialog-header">
            <span class="bui-dialog-title">{{ title() }}</span>
            <button class="bui-dialog-close material-symbols-outlined" (click)="close.emit()">
              close
            </button>
          </div>
          
          <!-- Content -->
          <div class="bui-dialog-content">
            <ng-content></ng-content>
          </div>

          <!-- Footer (Optional) -->
          <div class="bui-dialog-footer">
            <ng-content select="[footer]"></ng-content>
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiDialogComponent {
  /** Dialog title */
  title = input<string>('Dialog');

  /** Whether the dialog is visible */
  visible = input<boolean>(false);

  /** Emits when the dialog should be closed */
  close = output<void>();

  onBackdropClick(event: MouseEvent) {
    this.close.emit();
  }
}
