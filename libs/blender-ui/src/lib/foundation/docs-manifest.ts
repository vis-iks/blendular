import { BuiComponentMaturity } from './types';

export interface ComponentDocMeta {
  id: string;
  title: string;
  family: 'Foundations' | 'Components' | 'Patterns' | 'Workspaces';
  group: string;
  compositionLevel: 'atom' | 'molecule' | 'organism';
  maturity: BuiComponentMaturity;
  since: string;
  variants: string[];
  themeSupport: Array<'dark' | 'light'>;
  dependencies?: string[];
  notes?: string;
}

export interface RecipeDocMeta {
  id: string;
  title: string;
  family: 'Foundations' | 'Navigation & Data' | 'Inspector & Panels' | 'Workbench Layouts' | 'Theme + Token Playground' | 'Icon Browser';
  components: string[];
  description: string;
}

export const BUI_COMPONENT_DOCS: ComponentDocMeta[] = [
  { id: 'button', title: 'Button', family: 'Components', group: 'Inputs', compositionLevel: 'atom', maturity: 'stable', since: '0.1.0', variants: ['standard', 'primary', 'toggle', 'icon'], themeSupport: ['dark', 'light'] },
  { id: 'icon-button', title: 'Icon Button', family: 'Components', group: 'Inputs', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['ghost', 'raised', 'active'], themeSupport: ['dark', 'light'] },
  { id: 'toggle-button', title: 'Toggle Button', family: 'Components', group: 'Inputs', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['default', 'accent'], themeSupport: ['dark', 'light'] },
  { id: 'text-input', title: 'Text Input', family: 'Components', group: 'Inputs', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['default', 'inline'], themeSupport: ['dark', 'light'] },
  { id: 'search-field', title: 'Search Field', family: 'Components', group: 'Inputs', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['default', 'compact'], themeSupport: ['dark', 'light'] },
  { id: 'divider', title: 'Divider', family: 'Components', group: 'Layout Primitives', compositionLevel: 'atom', maturity: 'stable', since: '0.2.0', variants: ['horizontal', 'vertical'], themeSupport: ['dark', 'light'] },
  { id: 'badge', title: 'Badge', family: 'Components', group: 'Data Display', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['neutral', 'info', 'success', 'warning', 'danger'], themeSupport: ['dark', 'light'] },
  { id: 'shortcut', title: 'Shortcut Keycap', family: 'Components', group: 'Navigation', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['single', 'combo'], themeSupport: ['dark', 'light'] },
  { id: 'disclosure', title: 'Disclosure', family: 'Components', group: 'Navigation', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['compact', 'regular'], themeSupport: ['dark', 'light'] },
  { id: 'scroll-area', title: 'Scroll Area', family: 'Components', group: 'Layout Primitives', compositionLevel: 'atom', maturity: 'beta', since: '0.2.0', variants: ['default', 'subtle'], themeSupport: ['dark', 'light'] },
  { id: 'splitter', title: 'Splitter', family: 'Components', group: 'Layout Primitives', compositionLevel: 'atom', maturity: 'beta', since: '0.1.0', variants: ['horizontal', 'vertical', 'controlled'], themeSupport: ['dark', 'light'], notes: 'Supports nested workbench layouts.' },
  { id: 'tree', title: 'Tree', family: 'Components', group: 'Navigation', compositionLevel: 'molecule', maturity: 'beta', since: '0.1.0', variants: ['outliner', 'files', 'selection'], themeSupport: ['dark', 'light'] },
  { id: 'datalist', title: 'Datalist', family: 'Components', group: 'Data Display', compositionLevel: 'molecule', maturity: 'beta', since: '0.1.0', variants: ['toolbar', 'search', 'actions'], themeSupport: ['dark', 'light'] },
  { id: 'datagrid', title: 'Datagrid', family: 'Components', group: 'Data Display', compositionLevel: 'molecule', maturity: 'beta', since: '0.1.0', variants: ['sortable', 'templated', 'dense'], themeSupport: ['dark', 'light'] },
  { id: 'workspace-tabs', title: 'Workspace Tabs', family: 'Components', group: 'Navigation', compositionLevel: 'molecule', maturity: 'beta', since: '0.1.0', variants: ['closable', 'dirty', 'icon'], themeSupport: ['dark', 'light'] },
  { id: 'activity-bar', title: 'Activity Bar', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['left', 'right'], themeSupport: ['dark', 'light'] },
  { id: 'sidebar-section-header', title: 'Sidebar Section Header', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['collapsible', 'actions'], themeSupport: ['dark', 'light'] },
  { id: 'explorer-row', title: 'Explorer Row', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['icon', 'badge', 'actions'], themeSupport: ['dark', 'light'] },
  { id: 'inspector-row', title: 'Inspector Row', family: 'Patterns', group: 'Inspector', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['inline', 'stacked'], themeSupport: ['dark', 'light'] },
  { id: 'status-bar', title: 'Status Bar', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['default', 'segmented'], themeSupport: ['dark', 'light'] },
  { id: 'command-palette', title: 'Command Palette', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'experimental', since: '0.2.0', variants: ['inline', 'overlay-ready'], themeSupport: ['dark', 'light'] },
  { id: 'panel-stack', title: 'Panel Stack', family: 'Patterns', group: 'Inspector', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['default', 'nested'], themeSupport: ['dark', 'light'] },
  { id: 'tab-strip', title: 'Tab Strip', family: 'Patterns', group: 'Workbench', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['editor', 'closable'], themeSupport: ['dark', 'light'] },
  { id: 'table-toolbar', title: 'Table Toolbar', family: 'Patterns', group: 'Data Display', compositionLevel: 'molecule', maturity: 'beta', since: '0.2.0', variants: ['filters', 'actions'], themeSupport: ['dark', 'light'] },
  { id: 'explorer-sidebar', title: 'Explorer Sidebar', family: 'Workspaces', group: 'Workbench', compositionLevel: 'organism', maturity: 'beta', since: '0.2.0', variants: ['tree', 'list'], themeSupport: ['dark', 'light'], dependencies: ['activity-bar', 'sidebar-section-header', 'tree', 'datalist'] },
  { id: 'inspector-sidebar', title: 'Inspector Sidebar', family: 'Workspaces', group: 'Inspector', compositionLevel: 'organism', maturity: 'beta', since: '0.2.0', variants: ['panels', 'rows'], themeSupport: ['dark', 'light'], dependencies: ['panel-stack', 'inspector-row'] },
  { id: 'editor-group', title: 'Editor Group', family: 'Workspaces', group: 'Workbench', compositionLevel: 'organism', maturity: 'beta', since: '0.2.0', variants: ['tabs', 'toolbar'], themeSupport: ['dark', 'light'], dependencies: ['tab-strip'] },
  { id: 'workbench-shell', title: 'Workbench Shell', family: 'Workspaces', group: 'Workbench', compositionLevel: 'organism', maturity: 'beta', since: '0.2.0', variants: ['ide', 'blender'], themeSupport: ['dark', 'light'], dependencies: ['activity-bar', 'explorer-sidebar', 'editor-group', 'status-bar'] },
];

export const BUI_RECIPE_DOCS: RecipeDocMeta[] = [
  { id: 'foundations', title: 'Foundations Overview', family: 'Foundations', components: ['button', 'text-input', 'badge'], description: 'Theme tokens, density scales, and component maturity at a glance.' },
  { id: 'navigation-data', title: 'Navigation & Data', family: 'Navigation & Data', components: ['tree', 'datalist', 'datagrid', 'table-toolbar'], description: 'Explorer-style navigation, filtered data lists, and dense grids.' },
  { id: 'inspector-panels', title: 'Inspector & Panels', family: 'Inspector & Panels', components: ['inspector-row', 'panel-stack'], description: 'Property sidebars and grouped panel stacks for Blender-like inspectors.' },
  { id: 'workbench-blender', title: 'Blender Workspace Shell', family: 'Workbench Layouts', components: ['workbench-shell', 'explorer-sidebar', 'inspector-sidebar'], description: 'Viewport, outliner, and properties composed from shared workbench primitives.' },
  { id: 'workbench-ide', title: 'IDE Workbench Shell', family: 'Workbench Layouts', components: ['workbench-shell', 'activity-bar', 'editor-group', 'status-bar'], description: 'VS Code-like shell assembled from the same library.' },
  { id: 'tokens-playground', title: 'Theme + Token Playground', family: 'Theme + Token Playground', components: ['badge', 'text-input'], description: 'Switch themes and inspect grouped token values.' },
  { id: 'icon-browser', title: 'Icon Browser', family: 'Icon Browser', components: ['icon-button'], description: 'Browse common Blender iconography and usage examples.' },
];
