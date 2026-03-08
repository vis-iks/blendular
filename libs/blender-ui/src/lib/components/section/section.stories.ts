import type { Meta, StoryObj } from '@storybook/angular';
import { BuiSectionComponent } from './section.component';

const meta: Meta<BuiSectionComponent> = {
  component: BuiSectionComponent,
  title: 'Layout/Section',
  argTypes: {
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<BuiSectionComponent>;

export const Default: Story = {
  args: { label: 'Scene' },
  render: (args) => ({
    props: args,
    template: `
      <bui-section label="${args['label'] ?? 'Section'}">
        <p style="padding: 8px; margin: 0; color: var(--bui-text-color);">Section content goes here.</p>
      </bui-section>
    `,
  }),
};

export const Units: Story = {
  args: { label: 'Units' },
  render: (args) => ({
    props: args,
    template: `
      <bui-section label="Units">
        <div style="padding: 8px; color: var(--bui-text-color); font-size: 12px;">
          <div>Unit System: Metric</div>
          <div>Unit Scale: 1.000</div>
        </div>
      </bui-section>
    `,
  }),
};

export const Gravity: Story = {
  args: { label: 'Gravity' },
  render: (args) => ({
    props: args,
    template: `
      <bui-section label="Gravity">
        <div style="padding: 8px; color: var(--bui-text-color); font-size: 12px;">
          <div>X: 0.000</div>
          <div>Y: 0.000</div>
          <div>Z: -9.810</div>
        </div>
      </bui-section>
    `,
  }),
};
