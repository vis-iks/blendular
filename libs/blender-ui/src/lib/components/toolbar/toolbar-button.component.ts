import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'bui-toolbar-btn',
  standalone: true,
  template: `
    @if (icon()) {
      <span [class]="icon()"></span>
    }
    @if (label()) {
      <span class="toolbar-label">{{ label() }}</span>
    }
    <ng-content></ng-content>
  `,
  styleUrl: './toolbar-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'toolbar-tool-btn',
    '[class.active]': 'active()',
    '(click)': 'clicked.emit($event)'
  }
})
export class BuiToolbarButtonComponent {
  label = input<string>();
  icon = input<string>();
  active = input<boolean>(false);
  clicked = output<MouseEvent>();
}
