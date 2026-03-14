import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-divider',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="bui-divider" [class.vertical]="orientation() === 'vertical'"></div>`,
  styles: [`
    :host {
      display: block;
    }
    .bui-divider {
      width: 100%;
      height: 1px;
      background: var(--bui-border-default);
    }
    .bui-divider.vertical {
      width: 1px;
      height: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiDividerComponent {
  orientation = input<'horizontal' | 'vertical'>('horizontal');
}

