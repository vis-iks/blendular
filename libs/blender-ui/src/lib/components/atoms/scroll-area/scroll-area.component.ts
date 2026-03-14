import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-scroll-area',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="bui-scroll-area" [class.subtle]="variant() === 'subtle'"><ng-content></ng-content></div>`,
  styles: [`
    .bui-scroll-area {
      width: 100%;
      height: 100%;
      overflow: auto;
      scrollbar-width: thin;
      scrollbar-color: #555 transparent;
    }
    .bui-scroll-area::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .bui-scroll-area::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 6px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .bui-scroll-area.subtle::-webkit-scrollbar-thumb {
      background: #4a4a4a;
      background-clip: content-box;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiScrollAreaComponent {
  variant = input<'default' | 'subtle'>('default');
}

