import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'bui-toolbar-dropdown',
  standalone: true,
  template: `
    @if (icon()) {
      <span [class]="icon()"></span>
    }
    @if (label()) {
      <span class="toolbar-label">{{ label() }}</span>
    }
    <ng-content></ng-content>
    @if (!hideArrow()) {
      <span class="bl-icons-rightarrow_thin drop-arrow"></span>
    }
  `,
  styleUrl: './toolbar-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'toolbar-tool-dropdown',
    '[class.active-blue]': 'active()',
    '(click)': 'clicked.emit($event)'
  }
})
export class BuiToolbarDropdownComponent {
  label = input<string>();
  icon = input<string>();
  active = input<boolean>(false);
  hideArrow = input<boolean>(false);
  clicked = output<MouseEvent>();
}
