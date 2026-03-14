import type { Meta, StoryObj } from '@storybook/angular';
import { BuiDatalistComponent, BuiDatalistItem } from './datalist.component';

const items: BuiDatalistItem[] = [
  { id: '1', label: 'Group', icon: 'group_vertex' },
  { id: '2', label: 'Arm_L', icon: 'group_vertex', meta: 'Locked' },
  { id: '3', label: 'Arm_R', icon: 'group_vertex', badge: { text: 'New' } },
];

const meta: Meta<BuiDatalistComponent> = {
  component: BuiDatalistComponent,
  title: 'Components/Data Display/Datalist',
  args: {
    items,
    searchPlaceholder: 'Search vertex groups',
  },
};

export default meta;

type Story = StoryObj<BuiDatalistComponent>;

export const Default: Story = {};

