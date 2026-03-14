import type { Meta, StoryObj } from '@storybook/angular';
import { BuiTreeComponent, BuiTreeNode } from './tree.component';

const nodes: BuiTreeNode[] = [
  {
    id: 'scene',
    label: 'Scene Collection',
    icon: 'outliner_collection',
    expanded: true,
    badge: { text: 'root' },
    children: [
      {
        id: 'collection',
        label: 'Characters',
        icon: 'outliner_collection',
        expanded: true,
        children: [
          { id: 'hero', label: 'Hero Mesh', icon: 'outliner_ob_mesh', description: '3 modifiers', active: true },
          { id: 'camera', label: 'Camera', icon: 'camera_data', muted: true },
        ],
      },
    ],
  },
];

const meta: Meta<BuiTreeComponent> = {
  component: BuiTreeComponent,
  title: 'Components/Navigation/Tree',
  args: {
    nodes,
  },
  parameters: {
    docs: {
      description: {
        component: 'Keyboard-aware tree with badges, row states, action slots, and a controlled selection model.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<BuiTreeComponent>;

export const Outliner: Story = {};

