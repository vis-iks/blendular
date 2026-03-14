import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bui-toolbar-group',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './toolbar-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'toolbar-group'
  }
})
export class BuiToolbarGroupComponent {}

