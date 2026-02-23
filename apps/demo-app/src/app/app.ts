import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuiThemeService, LayoutComponent, ModifierPanelComponent, HeaderComponent, FooterComponent, OutlinerComponent, PropertiesComponent, ViewportComponent, TimelineComponent } from '@blender-ui/core';

@Component({
  imports: [RouterModule, LayoutComponent, ModifierPanelComponent, HeaderComponent, FooterComponent, OutlinerComponent, PropertiesComponent, ViewportComponent, TimelineComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private themeService = inject(BuiThemeService);
  activeTheme = this.themeService.activeThemeSignal;

  // Computed signal for display name if needed, or just use activeTheme().name
  themeName = computed(() => this.activeTheme().name);

  toggleTheme() {
    const current = this.activeTheme().name;
    this.themeService.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
