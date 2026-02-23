import type { Meta, StoryObj } from '@storybook/angular';
import { BuiSelectComponent } from './select.component';

const meta: Meta<BuiSelectComponent> = {
  component: BuiSelectComponent,
  title: 'Form Controls/Select',
  argTypes: {
    options: { control: 'object' },
    value: { control: 'text' },
    valueChange: { action: 'valueChange' },
  },
};
export default meta;

type Story = StoryObj<BuiSelectComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Metric', value: 'metric' },
      { label: 'Imperial', value: 'imperial' },
      { label: 'None', value: 'none' },
    ],
    value: 'metric',
  },
};

export const UnitSystem: Story = {
  args: {
    options: [
      { label: 'Meters', value: 'meters' },
      { label: 'Centimeters', value: 'centimeters' },
      { label: 'Millimeters', value: 'millimeters' },
      { label: 'Feet', value: 'feet' },
      { label: 'Inches', value: 'inches' },
    ],
    value: 'meters',
  },
};

export const ShadingMode: Story = {
  args: {
    options: [
      { label: 'Solid', value: 'solid' },
      { label: 'Wireframe', value: 'wireframe' },
      { label: 'Material Preview', value: 'material' },
      { label: 'Rendered', value: 'rendered' },
    ],
    value: 'solid',
  },
};

export const SingleOption: Story = {
  args: {
    options: [{ label: 'Only Option', value: 'only' }],
    value: 'only',
  },
};
