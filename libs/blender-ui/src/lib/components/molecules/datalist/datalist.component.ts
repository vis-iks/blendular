import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  TemplateRef,
  computed,
  input,
  model,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiBadgeComponent } from '../../atoms/badge/badge.component';
import { BuiSearchFieldComponent } from '../../atoms/search-field/search-field.component';
import { BuiTone } from '../../../foundation/types';

export interface BuiDatalistAction {
  id: string;
  icon: string;
  label?: string;
  active?: boolean;
}

export interface BuiDatalistItem {
  id: string;
  label: string;
  icon?: string;
  description?: string;
  meta?: string;
  disabled?: boolean;
  badge?: {
    text: string;
    tone?: BuiTone;
  };
}

@Directive({
  selector: '[buiDatalistItemActions]',
  standalone: true,
})
export class BuiDatalistItemActionsDirective {
  constructor(public templateRef: TemplateRef<{ $implicit: BuiDatalistItem }>) {}
}

@Component({
  selector: 'bui-datalist',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent, BuiSearchFieldComponent],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiDatalistComponent {
  items = input<BuiDatalistItem[]>([]);
  searchPlaceholder = input('Search');
  headerActions = input<BuiDatalistAction[]>([]);
  showFilterSort = input(false);
  loading = input(false);
  emptyMessage = input('No items found');

  selectedItemId = model<string | null>(null);
  searchQuery = model('');

  selectionChange = output<BuiDatalistItem | null>();
  add = output<void>();
  remove = output<BuiDatalistItem>();
  moveUp = output<BuiDatalistItem>();
  moveDown = output<BuiDatalistItem>();
  actionClick = output<BuiDatalistAction>();
  filterClick = output<void>();
  sortClick = output<void>();

  @ContentChild(TemplateRef) itemTemplate?: TemplateRef<{ $implicit: BuiDatalistItem }>;

  @ContentChild(BuiDatalistItemActionsDirective)
  private itemActionsDirective?: BuiDatalistItemActionsDirective;

  itemActionsTemplate = computed(() => this.itemActionsDirective?.templateRef ?? null);

  filteredItems = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return this.items();
    }

    return this.items().filter((item) => {
      const haystack = [item.label, item.description, item.meta].filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(query);
    });
  });

  selectedItem = computed(() => this.items().find((item) => item.id === this.selectedItemId()) ?? null);

  selectItem(item: BuiDatalistItem) {
    if (item.disabled) {
      return;
    }

    this.selectedItemId.set(item.id);
    this.selectionChange.emit(item);
  }

  onRemove() {
    const item = this.selectedItem();
    if (item) {
      this.remove.emit(item);
    }
  }

  onMoveUp() {
    const item = this.selectedItem();
    if (item) {
      this.moveUp.emit(item);
    }
  }

  onMoveDown() {
    const item = this.selectedItem();
    if (item) {
      this.moveDown.emit(item);
    }
  }
}

