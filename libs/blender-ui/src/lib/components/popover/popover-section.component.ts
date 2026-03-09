import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-popover-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popover-section" [class.no-border]="noBorder()" [class.flush]="flush()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .popover-section {
      padding: 8px;
      border-bottom: 1px solid #2a2a2a;
      display: flex;
      flex-direction: column;
      
      &.no-border {
        border-bottom: none;
      }

      &.flush {
        padding: 0;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiPopoverSectionComponent {
  noBorder = input(false);
  flush = input(false);
}
