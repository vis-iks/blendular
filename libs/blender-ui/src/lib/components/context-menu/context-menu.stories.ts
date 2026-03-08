import type { Meta, StoryObj } from '@storybook/angular';
import { ContextMenuComponent } from './context-menu.component';
import type { ContextMenuItem } from './context-menu.interface';

const OBJECT_CONTEXT_MENU: ContextMenuItem[] = [
  { label: 'Shade Smooth', icon: 'auto_fix_high' },
  { label: 'Shade Flat', icon: 'grid_4x4' },
  { separator: true },
  { label: 'Duplicate Objects', icon: 'content_copy', shortcut: 'Shift D' },
  { label: 'Duplicate Linked', shortcut: 'Alt D' },
  {
    label: 'Mirror',
    icon: 'flip',
    children: [
      { label: 'X Global', shortcut: 'Ctrl M, X' },
      { label: 'Y Global', shortcut: 'Ctrl M, Y' },
      { label: 'Z Global', shortcut: 'Ctrl M, Z' },
      { separator: true },
      { label: 'X Local' },
      { label: 'Y Local' },
      { label: 'Z Local' },
    ],
  },
  {
    label: 'Snap',
    icon: 'near_me',
    children: [
      { label: 'Cursor to Selected', shortcut: 'Shift S' },
      { label: 'Cursor to World Origin' },
      { label: 'Selection to Cursor' },
      { label: 'Selection to Grid' },
    ],
  },
  { separator: true },
  { label: 'Copy Objects', icon: 'content_copy', shortcut: 'Ctrl C' },
  { label: 'Paste Objects', icon: 'content_paste', shortcut: 'Ctrl V' },
  { separator: true },
  {
    label: 'Parent',
    icon: 'account_tree',
    children: [
      { label: 'Object', shortcut: 'Ctrl P' },
      { label: 'Armature Deform' },
      { label: 'Clear Parent', shortcut: 'Alt P' },
    ],
  },
  {
    label: 'Collections',
    icon: 'folder',
    children: [
      { label: 'Move to Collection', shortcut: 'M' },
      { label: 'Link to Collection', shortcut: 'Shift M' },
    ],
  },
  { separator: true },
  { label: 'Delete', icon: 'delete', shortcut: 'X' },
];

const meta: Meta<ContextMenuComponent> = {
  component: ContextMenuComponent,
  title: 'Interaction/Context Menu',
  argTypes: {
    items: { control: 'object' },
  },
  decorators: [
    (story) => ({
      ...story(),
      template: `
        <div style="padding: 16px; min-height: 400px;">
          <p style="color: var(--bui-text-muted); font-size: 11px; margin: 0 0 12px;">
            Note: The context menu is rendered inline below for preview purposes.
            In production it is triggered by right-click via ContextMenuTriggerDirective.
          </p>
          <bui-context-menu [items]="items"></bui-context-menu>
        </div>
      `,
    }),
  ],
};
export default meta;

type Story = StoryObj<ContextMenuComponent>;

export const ObjectContextMenu: Story = {
  args: {
    items: OBJECT_CONTEXT_MENU,
  },
};

export const SimpleMenu: Story = {
  args: {
    items: [
      { label: 'Select All', shortcut: 'A' },
      { label: 'Deselect All', shortcut: 'Alt A' },
      { separator: true },
      { label: 'Invert Selection', shortcut: 'Ctrl I' },
      { label: 'Select Random' },
      { separator: true },
      { label: 'Disabled Item', disabled: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Add Mesh', icon: 'deployed_code' },
      { label: 'Add Curve', icon: 'timeline' },
      { label: 'Add Surface', icon: 'landscape' },
      { label: 'Add Empty', icon: 'radio_button_unchecked' },
      { label: 'Add Light', icon: 'lightbulb' },
      { label: 'Add Camera', icon: 'videocam' },
    ],
  },
};
