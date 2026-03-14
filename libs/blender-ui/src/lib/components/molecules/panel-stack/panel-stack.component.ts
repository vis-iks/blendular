import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-panel-stack',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="bui-panel-stack"><ng-content></ng-content></div>`,
  styles: [`
    .bui-panel-stack {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiPanelStackComponent {}

