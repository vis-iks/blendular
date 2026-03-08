import type { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ViewportComponent } from '../viewport/viewport.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { OutlinerComponent } from '../outliner/outliner.component';
import { PropertiesComponent } from '../properties/properties.component';

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
  title: 'Layout/Full Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full Blender-style layout composing Header, Viewport, Timeline, Outliner, Properties, and Footer.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<LayoutComponent>;

export const Default: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [
        HeaderComponent,
        FooterComponent,
        ViewportComponent,
        TimelineComponent,
        OutlinerComponent,
        PropertiesComponent,
      ],
    },
    template: `
      <bui-layout style="display:block; height: 100vh;">
        <bui-header></bui-header>
        <bui-viewport></bui-viewport>
        <bui-timeline></bui-timeline>
        <bui-outliner></bui-outliner>
        <bui-properties></bui-properties>
        <bui-footer></bui-footer>
      </bui-layout>
    `,
  }),
};
