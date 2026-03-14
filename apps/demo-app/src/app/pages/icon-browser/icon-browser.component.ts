import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSearchFieldComponent, BLENDER_ICONS } from '@blender-ui/core';

@Component({
  selector: 'app-icon-browser',
  standalone: true,
  imports: [CommonModule, BuiSearchFieldComponent],
  template: `
    <div class="page">
      <header class="header">
        <div>
          <p class="eyebrow">Assets</p>
          <h1>Blender Icon Set</h1>
          <p class="lede">A complete set of Blender icons converted to a performant icon font. Click an icon to copy its name.</p>
        </div>
        <bui-search-field [(value)]="query" placeholder="Filter 700+ icons..."></bui-search-field>
      </header>

      <div class="icon-grid">
        @for (icon of filteredIcons(); track icon) {
          <article class="icon-card" (click)="copyIcon(icon)" [title]="'Click to copy: ' + icon">
            <div class="icon-preview">
              <span [ngClass]="'bl-icons-' + icon"></span>
            </div>
            <span class="icon-label">{{ icon }}</span>
            <div class="copy-hint" [class.visible]="lastCopied() === icon">Copied!</div>
          </article>
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
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(220px, 320px);
      gap: 24px;
      align-items: end;
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
    .lede { margin: 8px 0 0; color: var(--bui-color-text-muted); font-size: 14px; max-width: 600px; }
    
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 12px;
    }
    .icon-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 20px 12px;
      border-radius: 6px;
      border: 1px solid var(--bui-border-default);
      background: var(--bui-surface-panel);
      cursor: pointer;
      position: relative;
      transition: all var(--bui-motion-fast, 0.1s);
    }
    .icon-card:hover { 
      border-color: var(--bui-border-hover); 
      background: var(--bui-surface-panel-header);
      transform: translateY(-2px);
    }
    .icon-preview { font-size: 24px; color: var(--bui-color-text); }
    .icon-label {
      font-size: 11px;
      color: var(--bui-color-text-muted);
      text-align: center;
      word-break: break-all;
      padding: 0 4px;
    }
    .copy-hint {
      position: absolute;
      inset: 0;
      background: rgba(var(--bui-channel-green-rgb, 126, 201, 40), 0.9);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      border-radius: 6px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }
    .copy-hint.visible { opacity: 1; }

    @media (max-width: 800px) {
      .header { grid-template-columns: 1fr; gap: 16px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrowserComponent {
  query = signal('');
  lastCopied = signal<string | null>(null);

  filteredIcons = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q ? BLENDER_ICONS.filter((i: string) => i.toLowerCase().includes(q)) : BLENDER_ICONS;
  });

  copyIcon(name: string) {
    navigator.clipboard.writeText(name);
    this.lastCopied.set(name);
    setTimeout(() => this.lastCopied.set(null), 1500);
  }
}

