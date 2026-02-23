import type { Meta, StoryObj } from '@storybook/angular';
import { ModifierPanelComponent } from './modifier-panel.component';

const meta: Meta<ModifierPanelComponent> = {
  component: ModifierPanelComponent,
  title: 'Panels/Modifier Panel',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<ModifierPanelComponent>;

export const Default: Story = {};
