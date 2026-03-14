import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiBadgeComponent, BuiButtonComponent, BuiThemeService } from '@blender-ui/core';

@Component({
  selector: 'app-token-playground',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent, BuiButtonComponent],
  template: `
    <div class="page">
      <header class="header">
        <div>
          <p class="eyebrow">Theming</p>
          <h1>{{ themeName() | titlecase }} Design Tokens</h1>
          <p class="lede">Explore the design tokens that define the {{ themeName() }} interface theme.</p>
        </div>
        <bui-button (clicked)="toggleTheme()" variant="primary">Switch to {{ themeName() === 'dark' ? 'Light' : 'Dark' }}</bui-button>
      </header>

      <div class="token-sections">
        @for (group of tokenGroups(); track group.name) {
          <section class="token-group">
            <div class="group-header">
              <h2>{{ group.name }}</h2>
              <bui-badge [text]="group.entries.length + ' tokens'" tone="neutral"></bui-badge>
            </div>
            
            <div class="token-list">
              @for (entry of group.entries; track entry.key) {
                <article class="token-row" (click)="copyToken(entry.key)">
                  <div class="token-info">
                    <div class="swatch" [style.background]="entry.value" *ngIf="group.name !== 'typography'"></div>
                    <div class="meta">
                      <strong>{{ entry.key }}</strong>
                      <span class="variable-name">--bui-{{ entry.cssKey }}</span>
                    </div>
                  </div>
                  <div class="value-cell">
                    <span class="value-text">{{ entry.value }}</span>
                    <div class="copy-hint" [class.visible]="lastCopied() === entry.key">Copied!</div>
                  </div>
                </article>
              }
            </div>
          </section>
        }
      </div>
    </div>
  `,
  styles: [`
    .page {
      display: flex;
      flex-direction: column;
      gap: 32px;
      color: var(--bui-color-text);
    }
    .header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--bui-border-default);
    }
    .eyebrow {
      margin: 0 0 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 11px;
      color: var(--bui-color-primary);
      font-weight: 600;
    }
    h1 { margin: 0; font-size: 28px; }
    .lede { margin: 8px 0 0; color: var(--bui-color-text-muted); font-size: 14px; }

    .token-sections {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .token-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .group-header {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .group-header h2 {
      margin: 0;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--bui-color-text-muted);
    }

    .token-list {
      display: flex;
      flex-direction: column;
      background: var(--bui-surface-panel);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-sm);
      overflow: hidden;
    }
    .token-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--bui-border-subtle);
      cursor: pointer;
      position: relative;
    }
    .token-row:last-child { border-bottom: none; }
    .token-row:hover { background: var(--bui-surface-panel-header); }

    .token-info { display: flex; align-items: center; gap: 16px; }
    .swatch {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid var(--bui-border-default);
      flex-shrink: 0;
    }
    .meta { display: flex; flex-direction: column; gap: 2px; }
    .meta strong { font-size: 13px; font-weight: 500; }
    .variable-name { font-size: 11px; color: var(--bui-color-text-muted); font-family: monospace; }
    
    .value-cell { display: flex; align-items: center; gap: 12px; position: relative; }
    .value-text { font-family: monospace; font-size: 12px; color: var(--bui-color-text-muted); }

    .copy-hint {
      position: absolute;
      right: 0;
      background: var(--bui-color-primary);
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 10px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }
    .copy-hint.visible { opacity: 1; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenPlaygroundComponent {
  private themeService = inject(BuiThemeService);

  activeTheme = this.themeService.activeThemeSignal;
  themeName = computed(() => this.activeTheme().name);
  lastCopied = signal<string | null>(null);

  tokenGroups = computed(() => {
    const tokens = this.activeTheme().tokens;
    return Object.entries(tokens).map(([name, values]) => ({
      name,
      entries: Object.entries(values as Record<string, string>).map(([key, value]) => ({
        key,
        cssKey: `${name}-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
        value,
      })),
    }));
  });

  toggleTheme() {
    this.themeService.setTheme(this.activeTheme().name === 'dark' ? 'light' : 'dark');
  }

  copyToken(key: string) {
    navigator.clipboard.writeText(`--bui-${key}`);
    this.lastCopied.set(key);
    setTimeout(() => this.lastCopied.set(null), 1500);
  }
}
