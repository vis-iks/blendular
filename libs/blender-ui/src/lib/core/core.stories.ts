import type { Meta, StoryObj } from '@storybook/angular';
import { Core } from './core';
import { expect } from 'storybook/test';

const meta: Meta<Core> = {
  component: Core,
  title: 'Core',
};
export default meta;

type Story = StoryObj<Core>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/core/gi)).toBeTruthy();
  },
};
