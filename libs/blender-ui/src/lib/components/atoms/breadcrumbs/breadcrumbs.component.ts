import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem<T = any> {
  label: string;
  value: T;
  icon?: string;
}

@Component({
  selector: 'bui-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiBreadcrumbsComponent {
  /** Array of breadcrumb items to display */
  items = input<BreadcrumbItem[]>([]);

  /** Emitted when a breadcrumb item is clicked */
  itemClick = output<BreadcrumbItem>();
}
