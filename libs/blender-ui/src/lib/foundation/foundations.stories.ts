import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { 
  BUI_COMPONENT_DOCS, 
  BUI_RECIPE_DOCS, 
  BuiBadgeComponent, 
  BuiDividerComponent, 
  BuiIconButtonComponent,
  BuiTextInputComponent,
  BuiButtonComponent,
  BuiCheckboxComponent,
  BuiNumberInputComponent,
  blenderDark,
  blenderLight
} from '../../index';
import { BLENDER_ICONS } from './icons-list';

// --- Components for Stories ---

@Component({
  selector: 'bui-overview-page',
  standalone: true,
  imports: [
    CommonModule, 
    BuiBadgeComponent, 
    BuiDividerComponent, 
    BuiButtonComponent, 
    BuiTextInputComponent, 
    BuiCheckboxComponent,
    BuiNumberInputComponent
  ],
  template: `
    <div class="bui-doc-page">
      <header class="bui-doc-header">
        <span class="bui-doc-subtitle">Foundations</span>
        <h1 class="bui-doc-title">Library Overview</h1>
        <p class="bui-doc-description">The Blendular design system provides a high-fidelity reconstruction of professional tool interfaces.</p>
      </header>

      <section class="bui-doc-section">
        <h2 class="bui-doc-section-title">Live Preview (Kitchen Sink)</h2>
        <div class="kitchen-sink">
          <div class="ks-group">
            <span class="ks-label">Buttons</span>
            <div class="ks-row">
              <bui-button>Standard</bui-button>
              <bui-button variant="primary">Primary Action</bui-button>
              <bui-button variant="toggle" [pressed]="true">Active State</bui-button>
              <bui-button icon="add" variant="icon"></bui-button>
            </div>
          </div>
          
          <div class="ks-group">
            <span class="ks-label">Inputs</span>
            <div class="ks-row">
              <bui-text-input placeholder="Search keywords..." [style.width.px]="180"></bui-text-input>
              <bui-number-input [value]="42" [style.width.px]="100"></bui-number-input>
              <bui-checkbox label="Enable Mesh Selection" [checked]="true"></bui-checkbox>
            </div>
          </div>

          <div class="ks-group">
            <span class="ks-label">Status & Feedback</span>
            <div class="ks-row">
              <bui-badge text="Stable" tone="success"></bui-badge>
              <bui-badge text="Beta" tone="warning"></bui-badge>
              <bui-badge text="Experimental" tone="danger"></bui-badge>
              <bui-badge text="Draft" tone="neutral"></bui-badge>
            </div>
          </div>
        </div>
      </section>

      <bui-divider></bui-divider>

      <section class="bui-doc-section">
        <h2 class="bui-doc-section-title">Recipes & Patterns</h2>
        <div class="bui-doc-grid">
          <article *ngFor="let recipe of recipes" class="bui-doc-card recipe-card">
            <span class="card-meta uppercase">{{ recipe.family }}</span>
            <span class="card-title">{{ recipe.title }}</span>
            <p class="card-description">{{ recipe.description }}</p>
          </article>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .bui-doc-page {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
      color: var(--bui-color-text);
      background: var(--bui-surface-app);
      min-height: 100vh;
    }
    .bui-doc-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .bui-doc-subtitle {
      color: var(--bui-color-primary);
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .bui-doc-title {
      margin: 0;
      font-size: 32px;
      font-weight: 600;
    }
    .bui-doc-description {
      margin: 0;
      color: var(--bui-color-text-muted);
      font-size: 14px;
      max-width: 600px;
    }
    .bui-doc-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .bui-doc-section-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--bui-color-text);
    }
    .bui-doc-grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
    .bui-doc-card {
      background: var(--bui-surface-panel);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: border-color var(--bui-motion-fast);
    }
    .bui-doc-card:hover { border-color: var(--bui-border-hover); }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }
    .card-title-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .card-title { font-weight: 600; font-size: 15px; }
    .card-meta { font-size: 11px; color: var(--bui-color-text-muted); }
    .card-meta.uppercase { text-transform: uppercase; letter-spacing: 0.05em; }
    .card-variants { display: flex; flex-wrap: wrap; gap: 6px; }
    .variant-tag {
      font-size: 10px;
      padding: 2px 8px;
      background: var(--bui-surface-panel-header);
      border: 1px solid var(--bui-border-subtle);
      border-radius: 6px;
      color: var(--bui-color-text-muted);
    }
    .card-footer { border-top: 1px solid var(--bui-border-subtle); pt: 12px; }
    .recipe-card { gap: 8px; }
    .card-description { margin: 0; font-size: 13px; color: var(--bui-color-text-muted); line-height: 1.5; }

    .kitchen-sink {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px;
      background: var(--bui-surface-panel-header);
      border: 1px solid var(--bui-border-default);
      border-radius: 8px;
    }
    .ks-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .ks-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--bui-color-text-muted);
      border-bottom: 1px solid var(--bui-border-subtle);
      padding-bottom: 4px;
    }
    .ks-row {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  components = BUI_COMPONENT_DOCS;
  recipes = BUI_RECIPE_DOCS;

  getMaturityTone(maturity: string) {
    if (maturity === 'stable') return 'success';
    if (maturity === 'beta') return 'warning';
    return 'neutral';
  }
}

@Component({
  selector: 'bui-icon-browser-page',
  standalone: true,
  imports: [CommonModule, BuiIconButtonComponent, BuiTextInputComponent, BuiDividerComponent],
  template: `
    <div class="bui-doc-page">
      <header class="bui-doc-header">
        <span class="bui-doc-subtitle">Assets</span>
        <h1 class="bui-doc-title">Icon Browser</h1>
        <p class="bui-doc-description">A complete set of Blender icons converted to a performant icon font. Click an icon to copy its name.</p>
      </header>

      <div class="browser-controls">
        <bui-text-input 
          label="Search Icons" 
          placeholder="e.g. action, tria, node..." 
          [value]="searchTerm()" 
          (valueChange)="searchTerm.set($event)"
        ></bui-text-input>
        <span class="icon-count">{{ filteredIcons().length }} icons found</span>
      </div>

      <div class="icon-grid">
        <div *ngFor="let icon of filteredIcons()" class="icon-item" (click)="copyIcon(icon)" [title]="'Click to copy: ' + icon">
          <div class="icon-preview">
            <span [ngClass]="'bl-icons-' + icon"></span>
          </div>
          <span class="icon-label">{{ icon }}</span>
          <div class="copy-hint" [class.visible]="lastCopied() === icon">Copied!</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import 'OverviewComponent styles above'; /* Simplified for this example, in real use you'd share a stylesheet */
    .bui-doc-page { padding: 40px; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; color: var(--bui-color-text); background: var(--bui-surface-app); min-height: 100vh; }
    .bui-doc-header { display: flex; flex-direction: column; gap: 8px; }
    .bui-doc-subtitle { color: var(--bui-color-primary); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
    .bui-doc-title { margin: 0; font-size: 32px; font-weight: 600; }
    .bui-doc-description { margin: 0; color: var(--bui-color-text-muted); font-size: 14px; max-width: 600px; }
    
    .browser-controls {
      display: flex;
      align-items: flex-end;
      gap: 20px;
      padding: 20px;
      background: var(--bui-surface-panel);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
    }
    .icon-count { font-size: 12px; color: var(--bui-color-text-muted); margin-bottom: 8px; }
    .icon-grid {
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    .icon-item {
      background: var(--bui-surface-panel);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      position: relative;
      transition: all var(--bui-motion-fast);
    }
    .icon-item:hover { border-color: var(--bui-border-hover); background: var(--bui-surface-panel-header); transform: translateY(-2px); }
    .icon-preview { font-size: 24px; color: var(--bui-color-text); }
    .icon-label { font-size: 11px; color: var(--bui-color-text-muted); text-align: center; word-break: break-all; }
    .copy-hint {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrowserComponent {
  allIcons = BLENDER_ICONS;
  searchTerm = signal('');
  lastCopied = signal<string | null>(null);

  filteredIcons = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.allIcons.filter(icon => icon.toLowerCase().includes(term));
  });

  copyIcon(name: string) {
    navigator.clipboard.writeText(name);
    this.lastCopied.set(name);
    setTimeout(() => this.lastCopied.set(null), 1500);
  }
}

@Component({
  selector: 'bui-theme-tokens-page',
  standalone: true,
  imports: [CommonModule, BuiDividerComponent],
  template: `
    <div class="bui-doc-page">
      <header class="bui-doc-header">
        <span class="bui-doc-subtitle">Foundations</span>
        <h1 class="bui-doc-title">Theme Tokens</h1>
        <p class="bui-doc-description">The atomic values that define the library's visual language across different themes.</p>
      </header>

      <div class="token-sections">
        <section *ngFor="let group of tokenGroups" class="token-group">
          <h3 class="group-title">{{ group.title }}</h3>
          <div class="token-list">
            <div *ngFor="let token of group.tokens" class="token-row">
              <div class="token-info">
                <span class="token-name">{{ token.name }}</span>
                <span class="token-variable">--bui-{{ token.key }}</span>
              </div>
              <div class="token-value-cell">
                <ng-container [ngSwitch]="group.type">
                  <div *ngSwitchCase="'color'" class="color-preview" [style.background]="token.value"></div>
                  <span class="token-value-text">{{ token.value }}</span>
                </ng-container>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .bui-doc-page { padding: 40px; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; color: var(--bui-color-text); background: var(--bui-surface-app); min-height: 100vh; }
    .bui-doc-header { display: flex; flex-direction: column; gap: 8px; }
    .bui-doc-subtitle { color: var(--bui-color-primary); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
    .group-title { margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--bui-color-primary); border-bottom: 1px solid var(--bui-border-default); padding-bottom: 8px; }
    .token-list { display: flex; flex-direction: column;      background: var(--bui-surface-panel); 
      border: 1px solid var(--bui-border-default); 
      border-radius: var(--bui-radius-md); 
overflow: hidden; }
    .token-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border-bottom: 1px solid var(--bui-border-subtle); }
    .token-row:last-child { border-bottom: none; }
    .token-info { display: flex; flex-direction: column; gap: 4px; }
    .token-name { font-size: 13px; font-weight: 500; }
    .token-variable { font-family: monospace; font-size: 11px; color: var(--bui-color-text-muted); }
    .token-value-cell { display: flex; align-items: center; gap: 12px; }
    .color-preview { width: 20px; height: 20px; border-radius: 4px; border: 1px solid var(--bui-border-default); }
    .token-value-text { font-family: monospace; font-size: 12px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeTokensComponent {
  tokens = blenderDark.tokens;
  
  tokenGroups = [
    { 
      title: 'Colors', 
      type: 'color', 
      tokens: Object.entries(this.tokens.color).map(([k, v]) => ({ key: `color-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`, name: k, value: v })) 
    },
    { 
      title: 'Surfaces', 
      type: 'color', 
      tokens: Object.entries(this.tokens.surface).map(([k, v]) => ({ key: `surface-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`, name: k, value: v })) 
    },
    { 
      title: 'Borders', 
      type: 'color', 
      tokens: Object.entries(this.tokens.border).map(([k, v]) => ({ key: `border-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`, name: k, value: v })) 
    },
    { 
      title: 'Typography Size', 
      type: 'value', 
      tokens: Object.entries(this.tokens.typography).filter(([k]) => k.startsWith('size')).map(([k, v]) => ({ key: `font-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`, name: k, value: v })) 
    }
  ];
}

// --- Storybook Meta ---

const meta: Meta = {
  title: 'Foundations',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LibraryOverview: StoryObj = {
  render: () => ({
    component: OverviewComponent,
  }),
};

export const IconBrowser: StoryObj = {
  render: () => ({
    component: IconBrowserComponent,
  }),
};

export const VisualTokens: StoryObj = {
  render: () => ({
    component: ThemeTokensComponent,
  }),
};
