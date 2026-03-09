import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-popover-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popover-header">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .popover-header {
      color: #888888;
      font-size: 11px;
      padding: 8px 8px 4px;
      font-weight: 500;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiPopoverHeaderComponent {}
