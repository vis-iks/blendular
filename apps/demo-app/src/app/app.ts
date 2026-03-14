import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  BuiThemeService, ContextMenuTriggerDirective, ContextMenuItem
} from '@blender-ui/core';

interface Tab {
  id: string;
  label: string;
}

interface Category {
  name: string;
  tabs: Tab[];
}

@Component({
  imports: [
    CommonModule, RouterModule,
    ContextMenuTriggerDirective
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private themeService = inject(BuiThemeService);
  activeTheme = this.themeService.activeThemeSignal;
  themeName = computed(() => this.activeTheme().name);

  categories: Category[] = [
    {
      name: 'Standard Components',
      tabs: [
        { id: 'checkbox', label: 'Checkbox' },
        { id: 'context-menu', label: 'Context Menu' },
        { id: 'number-input', label: 'Number Input' },
        { id: 'select', label: 'Select' },
        { id: 'section', label: 'Section' },
      ]
    },
    {
      name: 'Application Layout',
      tabs: [
        { id: 'header', label: 'Header' },
        { id: 'footer', label: 'Footer' },
        { id: 'layout', label: 'Layout' },
      ]
    },
    {
      name: 'Blender Specific',
      tabs: [
        { id: 'file-browser', label: 'File Browser' },
        { id: 'graph-editor', label: 'Graph Editor' },
        { id: 'modifier-panel', label: 'Modifier Panel' },
        { id: 'outliner', label: 'Outliner' },
        { id: 'properties', label: 'Properties' },
        { id: 'scene-properties', label: 'Scene Properties' },
        { id: 'shader-editor', label: 'Shader Editor' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'viewport', label: 'Viewport' },
      ]
    }
  ];

  selectedTab = signal<string>('checkbox');

  menuItems: ContextMenuItem[] = [
    { label: 'Shade Smooth', icon: 'transform', action: () => console.log('Shade Smooth') },
    { label: 'Shade Flat', action: () => console.log('Shade Flat') },
    { separator: true },
    { label: 'Copy Objects', icon: 'content_copy', shortcut: 'Ctrl C', action: () => console.log('Copy') },
    { label: 'Paste Objects', icon: 'content_paste', shortcut: 'Ctrl V', action: () => console.log('Paste') },
  ];

  selectTab(tabId: string) {
    this.selectedTab.set(tabId);
  }

  toggleTheme() {
    const current = this.activeTheme().name;
    this.themeService.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
