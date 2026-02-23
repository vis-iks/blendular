import type { Meta, StoryObj } from '@storybook/angular';
import { GraphEditorComponent } from './graph-editor.component';

const meta: Meta<GraphEditorComponent> = {
  component: GraphEditorComponent,
  title: 'Editors/Graph Editor',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Node-based graph editor (Shader/Geometry Nodes) — in progress.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<GraphEditorComponent>;

export const Default: Story = {};
