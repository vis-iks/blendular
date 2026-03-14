import type { Meta, StoryObj } from '@storybook/angular';
import { BuiActivityBarComponent } from '../../molecules/activity-bar/activity-bar.component';
import { BuiExplorerSidebarComponent } from '../explorer-sidebar/explorer-sidebar.component';
import { BuiEditorGroupComponent } from '../editor-group/editor-group.component';
import { BuiStatusBarComponent } from '../../molecules/status-bar/status-bar.component';
import { BuiWorkbenchShellComponent } from './workbench-shell.component';

const meta: Meta<BuiWorkbenchShellComponent> = {
  component: BuiWorkbenchShellComponent,
  title: 'Workspaces/Workbench Shell',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<BuiWorkbenchShellComponent>;

export const IdeRecipe: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [
        BuiWorkbenchShellComponent,
        BuiActivityBarComponent,
        BuiExplorerSidebarComponent,
        BuiEditorGroupComponent,
        BuiStatusBarComponent,
      ],
    },
    props: {
      activity: [
        { id: 'explorer', label: 'Explorer', icon: 'outliner' },
        { id: 'search', label: 'Search', icon: 'viewzoom' },
      ],
      treeNodes: [
        {
          id: 'workspace',
          label: 'blendular/',
          icon: 'filebrowser',
          expanded: true,
          children: [
            { id: 'apps', label: 'apps/', icon: 'filebrowser' },
            { id: 'libs', label: 'libs/', icon: 'filebrowser' },
          ],
        },
      ],
      tabs: [
        { id: 'scene', label: 'scene.component.ts' },
        { id: 'theme', label: 'themes.ts', dirty: true },
      ],
      statusLeft: [{ id: 'branch', label: 'main', icon: 'git' }],
      statusRight: [{ id: 'command', label: 'Palette', shortcut: ['Ctrl', 'P'] }],
    },
    template: `
      <div style="height: 100vh;">
        <bui-workbench-shell>
          <div workbenchTopBar style="min-height: 32px; display:flex; align-items:center; padding:0 12px; background: var(--bui-panel-header); border-bottom: 1px solid var(--bui-border-default);">Workbench Shell</div>
          <bui-activity-bar workbenchActivityBar [items]="activity" activeItemId="explorer"></bui-activity-bar>
          <bui-explorer-sidebar workbenchSidebar [treeNodes]="treeNodes"></bui-explorer-sidebar>
          <bui-editor-group workbenchEditor [tabs]="tabs" activeTabId="scene">
            <div style="height:100%; display:flex; align-items:center; justify-content:center; color: var(--bui-text-muted);">Editor surface</div>
          </bui-editor-group>
          <bui-status-bar workbenchStatusBar [leftItems]="statusLeft" [rightItems]="statusRight"></bui-status-bar>
        </bui-workbench-shell>
      </div>
    `,
  }),
};

