import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSearchFieldComponent } from '../../atoms/search-field/search-field.component';
import { BuiIconButtonComponent } from '../../atoms/icon-button/icon-button.component';

export interface BuiTableToolbarAction {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'bui-table-toolbar',
  standalone: true,
  imports: [CommonModule, BuiSearchFieldComponent, BuiIconButtonComponent],
  template: `
    <div class="bui-table-toolbar">
      <div class="title-group">
        <span class="title">{{ title() }}</span>
        @if (description()) {
          <span class="description">{{ description() }}</span>
        }
      </div>
      <bui-search-field class="search" density="compact" [placeholder]="searchPlaceholder()" [(value)]="searchQuery"></bui-search-field>
      <div class="actions">
        @for (action of actions(); track action.id) {
          <bui-icon-button
            [icon]="action.icon"
            [label]="action.label"
            size="sm"
            (clicked)="actionClick.emit(action.id)"
          ></bui-icon-button>
        }
      </div>
    </div>
  `,
  styles: [`
    .bui-table-toolbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      background: var(--bui-surface-panel-header);
      border-bottom: 1px solid var(--bui-border-default);
    }
    .title-group {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--bui-color-text);
    }
    .description {
      color: var(--bui-color-text-muted);
      font-size: 10px;
    }
    .search {
      flex: 1;
      min-width: 0;
    }
    .actions {
      display: flex;
      gap: 4px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTableToolbarComponent {
  title = input.required<string>();
  description = input('');
  searchPlaceholder = input('Filter rows');
  actions = input<BuiTableToolbarAction[]>([]);
  searchQuery = model('');

  actionClick = output<string>();
}

