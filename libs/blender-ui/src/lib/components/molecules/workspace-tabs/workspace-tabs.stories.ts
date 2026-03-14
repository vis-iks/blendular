import type { Meta, StoryObj } from '@storybook/angular';
import { BuiWorkspaceTabsComponent } from './workspace-tabs.component';

const meta: Meta<BuiWorkspaceTabsComponent> = {
  component: BuiWorkspaceTabsComponent,
  title: 'Components/Navigation/Workspace Tabs',
  args: {
    tabs: [
      { id: 'layout', label: 'Layout' },
      { id: 'shading', label: 'Shading', dirty: true },
      { id: 'scripting', label: 'Scripting', closable: true, icon: 'text' },
    ],
    activeTab: 'layout',
  },
};

export default meta;

type Story = StoryObj<BuiWorkspaceTabsComponent>;

export const BlenderStyle: Story = {};

