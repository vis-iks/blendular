import type { Meta, StoryObj } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';

const meta: Meta<TimelineComponent> = {
  component: TimelineComponent,
  title: 'Editors/Timeline',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Animation timeline editor — in progress.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<TimelineComponent>;

export const Default: Story = {};
