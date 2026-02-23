import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  component: FooterComponent,
  title: 'Layout/Footer',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer status bar — in progress.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<FooterComponent>;

export const Default: Story = {};
