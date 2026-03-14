import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ContentChild, 
  TemplateRef,
  ChangeDetectionStrategy,
  computed,
  signal,
  Directive
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface BuiDatalistAction {
  id: string;
  icon: string;
  label?: string;
  active?: boolean;
}

/** Directive to mark the per-item actions template */
@Directive({
  selector: '[buiDatalistItemActions]',
  standalone: true
})
export class BuiDatalistItemActionsDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'bui-datalist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiDatalistComponent {
  /** The full array of items */
  @Input() set items(val: any[]) {
    this._items.set(val || []);
  }
  private _items = signal<any[]>([]);

  /** Currently selected item */
  @Input() selectedItem: any = null;

  /** Which object property to check when filtering text */
  @Input() filterKey: string = 'name';

  /** Placeholder for text search input */
  @Input() searchPlaceholder: string = 'Search...';

  /** Optional Extra Header Actions */
  @Input() headerActions: BuiDatalistAction[] = [];

  /** Whether to show filter/sort buttons in bottom row */
  @Input() showFilterSort: boolean = false;

  /** Emitted when selected item changes */
  @Output() selectionChange = new EventEmitter<any>();

  /** Emitted when "+" is clicked */
  @Output() add = new EventEmitter<void>();

  /** Emitted when "-" is clicked */
  @Output() remove = new EventEmitter<any>();

  /** Emitted when "^" is clicked */
  @Output() moveUp = new EventEmitter<any>();

  /** Emitted when "v" is clicked */
  @Output() moveDown = new EventEmitter<any>();

  @Output() actionClick = new EventEmitter<BuiDatalistAction>();

  /** Emitted when filter button is clicked */
  @Output() filterClick = new EventEmitter<void>();

  /** Emitted when sort button is clicked */
  @Output() sortClick = new EventEmitter<void>();

  /** Custom template for rendering each row's main content */
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;

  /** Custom template for per-item right-aligned actions */
  @ContentChild(BuiDatalistItemActionsDirective) 
  private _itemActionsDir!: BuiDatalistItemActionsDirective;

  get itemActionsTemplate(): TemplateRef<any> | null {
    return this._itemActionsDir?.templateRef || null;
  }

  searchQuery = signal('');
  menuOpen = signal(false);

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const items = this._items();
    
    if (!query) return items;
    
    return items.filter(item => {
      if (typeof item === 'string') {
        return item.toLowerCase().includes(query);
      }
      
      if (this.filterKey && item[this.filterKey]) {
         return String(item[this.filterKey]).toLowerCase().includes(query);
      }
      
      return false;
    });
  });

  selectItem(item: any) {
    this.selectedItem = item;
    this.selectionChange.emit(item);
  }

  onAdd() {
    this.add.emit();
  }

  onRemove() {
    if (this.selectedItem) {
      this.remove.emit(this.selectedItem);
    }
  }

  onMoveUp() {
    if (this.selectedItem) {
      this.moveUp.emit(this.selectedItem);
    }
  }

  onMoveDown() {
    if (this.selectedItem) {
      this.moveDown.emit(this.selectedItem);
    }
  }
}
