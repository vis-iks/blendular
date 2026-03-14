import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  BuiThemeService, ContextMenuTriggerDirective, ContextMenuItem
} from '@blender-ui/core';

@Component({
  imports: [
    CommonModule, RouterModule,
    ContextMenuTriggerDirective
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  private themeService = inject(BuiThemeService);
  activeTheme = this.themeService.activeThemeSignal;
  themeName = computed(() => this.activeTheme().name);

  menuItems: ContextMenuItem[] = [
    { label: 'Shade Smooth', icon: 'transform', action: () => console.log('Shade Smooth') },
    { label: 'Shade Flat', action: () => console.log('Shade Flat') },
    { separator: true },
    { label: 'Copy Objects', icon: 'content_copy', shortcut: 'Ctrl C', action: () => console.log('Copy') },
    { label: 'Paste Objects', icon: 'content_paste', shortcut: 'Ctrl V', action: () => console.log('Paste') },
  ];

  toggleTheme() {
    const current = this.activeTheme().name;
    this.themeService.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
