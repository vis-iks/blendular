import type { Meta, StoryObj } from '@storybook/angular';
import { BuiCheckboxComponent } from './checkbox.component';

const meta: Meta<BuiCheckboxComponent> = {
  component: BuiCheckboxComponent,
  title: 'Form Controls/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    checkedChange: { action: 'checkedChange' },
  },
};
export default meta;

type Story = StoryObj<BuiCheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
    label: '',
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: '',
    disabled: false,
  },
};

export const WithLabel: Story = {
  args: {
    checked: false,
    label: 'Use Nodes',
    disabled: false,
  },
};

export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'Render Shadows',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    label: 'Disabled Option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Disabled Checked',
    disabled: true,
  },
};
