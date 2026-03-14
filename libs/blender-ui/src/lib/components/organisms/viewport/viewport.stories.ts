import type { Meta, StoryObj } from '@storybook/angular';
import { ViewportComponent } from './viewport.component';

const meta: Meta<ViewportComponent> = {
  component: ViewportComponent,
  title: 'Editors/Viewport',
  argTypes: {
    showTools: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<ViewportComponent>;

export const Default: Story = {
  args: {
    showTools: true,
  },
};

export const NoToolbar: Story = {
  args: {
    showTools: false,
  },
};
