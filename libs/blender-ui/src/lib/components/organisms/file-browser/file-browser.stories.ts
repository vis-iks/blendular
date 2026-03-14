import type { Meta, StoryObj } from '@storybook/angular';
import { FileBrowserComponent } from './file-browser.component';

const meta: Meta<FileBrowserComponent> = {
  component: FileBrowserComponent,
  title: 'Editors/File Browser',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'File browser panel — in progress.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<FileBrowserComponent>;

export const Default: Story = {};
