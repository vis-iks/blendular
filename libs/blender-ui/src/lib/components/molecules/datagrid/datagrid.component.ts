import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
  contentChildren,
  computed,
  signal,
  model,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DatagridColumn {
  key: string;
  label: string;
  width?: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface BuiDatagridRow {
  id: string | number;
  [key: string]: unknown;
}

export interface BuiDatagridSort {
  column: string;
  direction: 'asc' | 'desc';
}

@Directive({
  selector: '[buiDatagridCell]',
  standalone: true,
})
export class BuiDatagridCellDirective {
  @Input('buiDatagridCell') columnKey!: string;

  constructor(public template: TemplateRef<{ $implicit: BuiDatagridRow; column: DatagridColumn }>) {}
}

@Directive({
  selector: '[buiDatagridHeaderActions]',
  standalone: true,
})
export class BuiDatagridHeaderActionsDirective {
  constructor(public template: TemplateRef<unknown>) {}
}

@Component({
  selector: 'bui-datagrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiDatagridComponent {
  columns = input<DatagridColumn[]>([]);
  title = input('');
  loading = input(false);
  emptyMessage = input('No data available');
  striped = input(true);

  @Input() set data(value: BuiDatagridRow[]) {
    this._data.set(value ?? []);
  }
  readonly _data = signal<BuiDatagridRow[]>([]);

  sort = model<BuiDatagridSort | null>(null);
  selectedRowId = model<string | number | null>(null);

  rowClick = output<BuiDatagridRow>();

  @ContentChild(BuiDatagridHeaderActionsDirective)
  headerActionsTemplate?: BuiDatagridHeaderActionsDirective;

  cellTemplates = contentChildren(BuiDatagridCellDirective);

  templateMap = computed(() => {
    const map = new Map<string, TemplateRef<{ $implicit: BuiDatagridRow; column: DatagridColumn }>>();
    this.cellTemplates().forEach((directive) => {
      map.set(directive.columnKey, directive.template);
    });
    return map;
  });

  onRowClick(row: BuiDatagridRow) {
    this.selectedRowId.set(row.id);
    this.rowClick.emit(row);
  }

  onHeaderClick(column: DatagridColumn) {
    if (!column.sortable) {
      return;
    }

    const current = this.sort();
    const nextDirection: 'asc' | 'desc' = current?.column === column.key && current.direction === 'asc' ? 'desc' : 'asc';
    const nextSort = { column: column.key, direction: nextDirection } as BuiDatagridSort;
    this.sort.set(nextSort);
  }

  getSortIcon(column: DatagridColumn): string {
    if (this.sort()?.column !== column.key) {
      return '';
    }
    return this.sort()?.direction === 'asc' ? 'bl-icons-tria_up' : 'bl-icons-tria_down';
  }

  getCellValue(row: BuiDatagridRow, column: DatagridColumn): string {
    const value = row[column.key];
    return value == null ? '' : String(value);
  }
}
