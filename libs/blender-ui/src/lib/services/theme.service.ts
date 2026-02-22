import { Injectable, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { blenderDark, blenderLight, Theme } from './themes';

@Injectable({
  providedIn: 'root',
})
export class BuiThemeService {
  private activeTheme = signal<Theme>(blenderDark);
  private document = inject(DOCUMENT);

  constructor() {
    this.setTheme('dark');
  }

  setTheme(name: 'dark' | 'light') {
    const theme = name === 'dark' ? blenderDark : blenderLight;
    this.activeTheme.set(theme);

    const properties = theme.properties;
    Object.keys(properties).forEach((property) => {
      this.document.documentElement.style.setProperty(
        property,
        properties[property],
      );
    });
  }

  get activeThemeSignal() {
    return this.activeTheme.asReadonly();
  }
}
