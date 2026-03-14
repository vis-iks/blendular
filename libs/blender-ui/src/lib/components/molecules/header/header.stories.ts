import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'Layout/Header',
  argTypes: {
    workspaces: { control: 'object' },
    activeWorkspace: { control: 'text' },
    workspaceChange: { action: 'workspaceChange' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    workspaces: ['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading', 'Animation', 'Rendering'],
    activeWorkspace: 'Layout',
  },
};

export const ModelingActive: Story = {
  args: {
    workspaces: ['Layout', 'Modeling', 'Sculpting', 'UV Editing', 'Shading', 'Animation', 'Rendering'],
    activeWorkspace: 'Modeling',
  },
};

export const MinimalWorkspaces: Story = {
  args: {
    workspaces: ['Layout', 'Modeling'],
    activeWorkspace: 'Layout',
  },
};
