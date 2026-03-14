import type { Meta, StoryObj } from '@storybook/angular';
import { BuiDatagridComponent, BuiDatagridRow, DatagridColumn } from './datagrid.component';

const columns: DatagridColumn[] = [
  { key: 'file', label: 'File', sortable: true },
  { key: 'owner', label: 'Owner', width: '120px', sortable: true },
  { key: 'status', label: 'Status', width: '120px', sortable: true },
];

const data: BuiDatagridRow[] = [
  { id: '1', file: 'tree.component.ts', owner: 'library', status: 'updated' },
  { id: '2', file: 'datalist.component.ts', owner: 'library', status: 'updated' },
  { id: '3', file: 'workbench-shell.component.ts', owner: 'recipes', status: 'new' },
];

const meta: Meta<BuiDatagridComponent> = {
  component: BuiDatagridComponent,
  title: 'Components/Data Display/Datagrid',
  args: {
    columns,
    data,
    title: 'Component Changelog',
  },
};

export default meta;

type Story = StoryObj<BuiDatagridComponent>;

export const DenseGrid: Story = {};

