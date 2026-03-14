import type { Meta, StoryObj } from '@storybook/angular';
import { ScenePropertiesComponent } from './scene-properties.component';

const meta: Meta<ScenePropertiesComponent> = {
  component: ScenePropertiesComponent,
  title: 'Panels/Scene Properties',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<ScenePropertiesComponent>;

export const Default: Story = {};
