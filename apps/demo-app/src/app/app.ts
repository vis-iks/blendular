import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuiThemeService, LayoutComponent, ModifierPanelComponent, HeaderComponent, FooterComponent, OutlinerComponent, PropertiesComponent, ViewportComponent, TimelineComponent, ContextMenuTriggerDirective, ContextMenuItem } from '@blender-ui/core';

@Component({
  imports: [RouterModule, LayoutComponent, ModifierPanelComponent, HeaderComponent, FooterComponent, OutlinerComponent, PropertiesComponent, ViewportComponent, TimelineComponent, ContextMenuTriggerDirective],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private themeService = inject(BuiThemeService);
  activeTheme = this.themeService.activeThemeSignal;

  // Computed signal for display name if needed, or just use activeTheme().name
  themeName = computed(() => this.activeTheme().name);

  menuItems: ContextMenuItem[] = [
    { label: 'Shade Smooth', icon: 'transform', action: () => console.log('Shade Smooth') },
    { label: 'Shade Flat', action: () => console.log('Shade Flat') },
    { separator: true },
    { label: 'Copy Objects', icon: 'content_copy', shortcut: 'Ctrl C', action: () => console.log('Copy') },
    { label: 'Paste Objects', icon: 'content_paste', shortcut: 'Ctrl V', action: () => console.log('Paste') },
    { separator: true },
    { label: 'Duplicate Objects', icon: 'file_copy', shortcut: 'Shift D', action: () => console.log('Duplicate') },
    { label: 'Duplicate Linked', shortcut: 'Alt D', action: () => console.log('Duplicate Linked') },
    { separator: true },
    { label: 'Mirror', icon: 'flip', children: [
        { label: 'X Global' }, { label: 'Y Global' }, { label: 'Z Global' }
    ] },
    { label: 'Snap', icon: 'magnet', children: [
        { label: 'Selection to Grid' }, { label: 'Selection to Cursor' }
    ] },
    { label: 'Parent', icon: 'link', shortcut: 'Ctrl P', action: () => console.log('Parent') },
    { label: 'Collection', icon: 'folder_open', children: [
        { label: 'Move to Collection', shortcut: 'M' },
        { label: 'New Collection', icon: 'add' },
        { separator: true },
        { label: 'Scene Collection', icon: 'inventory_2' },
        { label: 'Collection 1', icon: 'inventory_2' },
        { label: 'Cameras', icon: 'inventory_2' },
        { label: 'Lights', icon: 'inventory_2' },
    ] },
    { label: 'Delete', shortcut: 'X', action: () => console.log('Delete') },
  ];

  toggleTheme() {
    const current = this.activeTheme().name;
    this.themeService.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
