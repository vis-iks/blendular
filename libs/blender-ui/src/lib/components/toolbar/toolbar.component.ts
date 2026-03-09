import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BuiPopoverService } from '../popover/popover.service';

@Component({
  selector: 'bui-toolbar',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BuiPopoverService],
  host: {
    'class': 'blender-toolbar-container'
  }
})
export class BuiToolbarComponent {}

