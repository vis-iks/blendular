import type { Meta, StoryObj } from '@storybook/angular';
import { BuiNumberInputComponent } from './number-input.component';

const meta: Meta<BuiNumberInputComponent> = {
  component: BuiNumberInputComponent,
  title: 'Form Controls/Number Input',
  argTypes: {
    value: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    valueChange: { action: 'valueChange' },
  },
};
export default meta;

type Story = StoryObj<BuiNumberInputComponent>;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Subdivisions: Story = {
  args: {
    value: 2,
    min: 0,
    max: 6,
    step: 1,
  },
};

export const FloatStep: Story = {
  args: {
    value: 1.5,
    min: 0,
    max: 10,
    step: 0.1,
  },
};

export const AtMinimum: Story = {
  args: {
    value: 0,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const AtMaximum: Story = {
  args: {
    value: 100,
    min: 0,
    max: 100,
    step: 1,
  },
};
