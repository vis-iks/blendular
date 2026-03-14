import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BuiPopoverArrowPosition = 'top' | 'bottom' | 'left' | 'right' | 'none';

@Component({
  selector: 'bui-popover-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="popover-container" 
         [style.width]="width()"
         [class]="'arrow-' + arrowPosition()"
         [style.--arrow-offset]="arrowOffset()">
      <div class="popover-arrow"></div>
      <div class="popover-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrl: './popover-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiPopoverContainerComponent {
  width = input<string | undefined>(undefined);
  arrowPosition = input<BuiPopoverArrowPosition>('top');
  arrowOffset = input<string>('50%');
}
