import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BuiActivityBarComponent,
  BuiActivityBarItem,
  BuiCommandPaletteComponent,
  BuiCommandPaletteItem,
  BuiEditorGroupComponent,
  BuiExplorerSidebarComponent,
  BuiStatusBarComponent,
  BuiTableToolbarComponent,
  BuiDatagridComponent,
  DatagridColumn,
  BuiDatagridRow,
  BuiTabStripItem,
  BuiWorkbenchShellComponent,
  BuiTreeNode,
} from '@blender-ui/core';

@Component({
  selector: 'app-ide-workbench',
  standalone: true,
  imports: [
    CommonModule,
    BuiWorkbenchShellComponent,
    BuiActivityBarComponent,
    BuiExplorerSidebarComponent,
    BuiEditorGroupComponent,
    BuiStatusBarComponent,
    BuiCommandPaletteComponent,
    BuiTableToolbarComponent,
    BuiDatagridComponent,
  ],
  template: `
    <div class="page">
      <header class="header">
        <p class="eyebrow">Workbench Layouts</p>
        <h1>IDE recipe built from the same Blender-first system</h1>
      </header>

      <div class="shell-frame">
        <bui-workbench-shell [showBottomPanel]="true">
          <div workbenchTopBar class="ide-titlebar">Blendular IDE Recipe</div>
          <bui-activity-bar workbenchActivityBar [items]="activityItems" [(activeItemId)]="activeActivity"></bui-activity-bar>
          <bui-explorer-sidebar workbenchSidebar title="Explorer" [treeNodes]="fileTree"></bui-explorer-sidebar>

          <bui-editor-group
            workbenchEditor
            [tabs]="editorTabs"
            [(activeTabId)]="activeTab"
          >
            <div editorToolbar>
              <bui-table-toolbar title="Search Results" description="Dense grid + command surfaces"></bui-table-toolbar>
            </div>
            <div class="editor-surface">
              <bui-command-palette [items]="commands" [(open)]="paletteOpen"></bui-command-palette>
            </div>
          </bui-editor-group>

          <div workbenchPanel class="panel-surface">
            <bui-datagrid [columns]="columns" [data]="rows"></bui-datagrid>
          </div>

          <bui-status-bar
            workbenchStatusBar
            [leftItems]="statusLeft"
            [rightItems]="statusRight"
          ></bui-status-bar>
        </bui-workbench-shell>
      </div>
    </div>
  `,
  styles: [`
    .page {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .eyebrow {
      margin: 0 0 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 11px;
      color: var(--bui-color-primary);
    }
    h1 {
      margin: 0;
    }
    .shell-frame {
      height: 640px;
      border: 1px solid var(--bui-border-default);
      border-radius: 14px;
      overflow: hidden;
    }
    .ide-titlebar {
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      background: color-mix(in srgb, var(--bui-surface-panel-header) 88%, black 12%);
      border-bottom: 1px solid var(--bui-border-default);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .editor-surface {
      height: 100%;
      padding: 16px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background:
        radial-gradient(circle at top left, rgba(71,114,179,0.16), transparent 28%),
        linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.16));
    }
    .panel-surface {
      height: 100%;
      padding: 4px;
      background: var(--bui-surface-panel);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeWorkbenchComponent {
  activeActivity = signal<string | null>('explorer');
  activeTab = signal<string | null>('scene');
  paletteOpen = signal(true);

  activityItems: BuiActivityBarItem[] = [
    { id: 'explorer', label: 'Explorer', icon: 'outliner' },
    { id: 'search', label: 'Search', icon: 'viewzoom' },
    { id: 'source', label: 'Source Control', icon: 'git' },
    { id: 'extensions', label: 'Extensions', icon: 'asset_manager', badge: '4' },
  ];

  fileTree: BuiTreeNode[] = [
    {
      id: 'workspace',
      label: 'blendular/',
      icon: 'filebrowser',
      expanded: true,
      children: [
        {
          id: 'apps',
          label: 'apps',
          icon: 'filebrowser',
          expanded: true,
          children: [
            { id: 'demo', label: 'demo-app', icon: 'outliner_ob_mesh' },
            { id: 'storybook', label: '.storybook', icon: 'preferences' },
          ],
        },
        {
          id: 'libs',
          label: 'libs',
          icon: 'filebrowser',
          expanded: true,
          children: [
            { id: 'core', label: 'blender-ui', icon: 'properties', badge: { text: 'core' } },
          ],
        },
      ],
    },
  ];

  editorTabs: BuiTabStripItem[] = [
    { id: 'scene', label: 'scene.component.ts', dirty: true },
    { id: 'theme', label: 'themes.ts' },
    { id: 'story', label: 'tree.stories.ts', closable: true },
  ];

  commands: BuiCommandPaletteItem[] = [
    { id: 'open-component', label: 'Open Component Docs', group: 'Navigation', shortcut: ['Ctrl', 'K'] },
    { id: 'switch-theme', label: 'Switch Theme', group: 'Appearance', shortcut: ['Ctrl', 'Shift', 'T'] },
    { id: 'focus-tree', label: 'Focus Explorer Tree', group: 'Workbench', shortcut: ['Alt', '1'] },
  ];

  columns: DatagridColumn[] = [
    { key: 'file', label: 'File' },
    { key: 'owner', label: 'Owner', width: '120px' },
    { key: 'status', label: 'Status', width: '120px' },
  ];

  rows: BuiDatagridRow[] = [
    { id: '1', file: 'tree.component.ts', owner: 'library', status: 'updated' },
    { id: '2', file: 'datalist.component.ts', owner: 'library', status: 'updated' },
    { id: '3', file: 'workbench-shell.component.ts', owner: 'recipes', status: 'new' },
  ];

  statusLeft = [
    { id: 'branch', label: 'main', icon: 'git' },
    { id: 'workspace', label: 'Blendular Workspace' },
  ];

  statusRight = [
    { id: 'palette', label: 'Command Palette', shortcut: ['Ctrl', 'P'] },
    { id: 'focus', label: 'Explorer', shortcut: ['Alt', '1'] },
  ];
}

