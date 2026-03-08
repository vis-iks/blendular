import type { Meta, StoryObj } from '@storybook/angular';
import { OutlinerComponent, DEFAULT_OUTLINER_NODES } from './outliner.component';

const meta: Meta<OutlinerComponent> = {
  component: OutlinerComponent,
  title: 'Panels/Outliner',
  argTypes: {
    nodes: { control: 'object' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<OutlinerComponent>;

export const Default: Story = {
  args: {
    nodes: DEFAULT_OUTLINER_NODES,
  },
};

export const EmptyScene: Story = {
  args: {
    nodes: [
      {
        name: 'Scene Collection',
        type: 'collection',
        icon: 'format_list_bulleted',
        expanded: true,
        children: [],
      },
    ],
  },
};

export const ComplexScene: Story = {
  args: {
    nodes: [
      {
        name: 'Scene Collection',
        type: 'collection',
        icon: 'format_list_bulleted',
        expanded: true,
        children: [
          {
            name: 'Environment',
            type: 'collection',
            icon: 'folder_open',
            expanded: true,
            children: [
              { name: 'Sun', type: 'light', icon: 'lightbulb' },
              { name: 'HDRI Sphere', type: 'mesh', icon: 'change_history' },
            ],
          },
          {
            name: 'Characters',
            type: 'collection',
            icon: 'folder_open',
            expanded: true,
            children: [
              { name: 'Hero', type: 'mesh', icon: 'change_history', active: true, selected: true },
              { name: 'Villain', type: 'mesh', icon: 'change_history' },
              { name: 'Camera', type: 'camera', icon: 'videocam' },
            ],
          },
        ],
      },
    ],
  },
};
