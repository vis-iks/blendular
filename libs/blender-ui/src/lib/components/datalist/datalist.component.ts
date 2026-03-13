import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ContentChild, 
  TemplateRef,
  ChangeDetectionStrategy,
  computed,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface BuiDatalistAction {
  id: string;
  icon: string;
  label?: string;
  active?: boolean;
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

  /** Custom template for rendering each row */
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;

  searchQuery = signal('');

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const items = this._items();
    
    if (!query) return items;
    
    return items.filter(item => {
      // If it's a primitive string array
      if (typeof item === 'string') {
        return item.toLowerCase().includes(query);
      }
      
      // If filterKey is provided and exists on item
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
