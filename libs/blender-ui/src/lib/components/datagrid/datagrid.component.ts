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
  Directive,
  contentChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DatagridColumn {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
}

@Directive({
  selector: '[buiDatagridCell]',
  standalone: true
})
export class BuiDatagridCellDirective {
  /** The key/column this template corresponds to */
  @Input('buiDatagridCell') columnKey!: string;

  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'bui-datagrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiDatagridComponent {
  /** Column definitions */
  @Input() columns: DatagridColumn[] = [];

  /** Data rows */
  @Input() set data(val: any[]) {
    this._data.set(val || []);
  }
  _data = signal<any[]>([]);

  /** Currently selected row item */
  @Input() selectedRow: any = null;

  /** Current sort column key */
  @Input() sortColumn: string | null = null;

  /** Current sort direction */
  @Input() sortDirection: 'asc' | 'desc' | null = null;

  /** Emitted when a row is clicked */
  @Output() rowClick = new EventEmitter<any>();

  /** Emitted when a sortable header is clicked */
  @Output() sortChange = new EventEmitter<{ column: string, direction: 'asc' | 'desc' }>();

  /** Custom cell templates passed mapped by columnKey */
  @ContentChild(TemplateRef) defaultTemplate?: TemplateRef<any>;
  
  cellTemplates = contentChildren(BuiDatagridCellDirective);

  /** A computed map of columnKey -> TemplateRef for easy lookup in the HTML */
  templateMap = computed(() => {
    const map = new Map<string, TemplateRef<any>>();
    this.cellTemplates().forEach(dir => {
      map.set(dir.columnKey, dir.template);
    });
    return map;
  });

  onRowClick(row: any) {
    this.selectedRow = row;
    this.rowClick.emit(row);
  }

  onHeaderClick(column: DatagridColumn) {
    if (!column.sortable) return;

    let newDirection: 'asc' | 'desc' = 'asc';
    
    if (this.sortColumn === column.key) {
      // Toggle direction if already sorting by this column
      newDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }

    this.sortColumn = column.key;
    this.sortDirection = newDirection;

    this.sortChange.emit({ column: column.key, direction: newDirection });
  }

  getSortIcon(column: DatagridColumn): string {
    if (this.sortColumn !== column.key) {
      return '';
    }
    return this.sortDirection === 'asc' ? 'bl-icons-tria_up' : 'bl-icons-tria_down';
  }
}
