import type { Meta, StoryObj } from '@storybook/angular';
import { PropertiesComponent } from './properties.component';

const meta: Meta<PropertiesComponent> = {
  component: PropertiesComponent,
  title: 'Panels/Properties',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<PropertiesComponent>;

export const Default: Story = {};
