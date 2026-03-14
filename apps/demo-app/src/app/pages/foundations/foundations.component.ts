import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUI_COMPONENT_DOCS, BUI_RECIPE_DOCS, BuiBadgeComponent, BuiDividerComponent, BuiTextInputComponent, BuiToggleButtonComponent } from '@blender-ui/core';

@Component({
  selector: 'app-foundations',
  standalone: true,
  imports: [CommonModule, BuiBadgeComponent, BuiDividerComponent, BuiTextInputComponent, BuiToggleButtonComponent],
  template: `
    <div class="page">
      <header class="hero">
        <div>
          <p class="eyebrow">Foundations</p>
          <h1>Blender-first primitives for app teams</h1>
          <p class="lede">
            The Blendular design system provides a high-fidelity reconstruction of professional tool interfaces.
            This page serves as a live catalog for core primitives and their maturity.
          </p>
        </div>
        <div class="preview">
          <bui-text-input label="Workspace Name" placeholder="Layout"></bui-text-input>
          <bui-toggle-button label="Snapping" icon="snap_on" [pressed]="true"></bui-toggle-button>
        </div>
      </header>

      <section class="stats">
        @for (stat of summary(); track stat.label) {
          <article class="stat-card">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </article>
        }
      </section>

      <bui-divider></bui-divider>

      <section class="section">
        <h2>Catalog</h2>
        <div class="card-grid">
          @for (component of components(); track component.id) {
            <article class="doc-card">
              <div class="doc-card__top">
                <div>
                  <h3>{{ component.title }}</h3>
                  <p>{{ component.group }} · {{ component.compositionLevel }}</p>
                </div>
                <bui-badge [text]="component.maturity"></bui-badge>
              </div>
              <div class="chip-row">
                @for (variant of component.variants; track variant) {
                  <span class="chip">{{ variant }}</span>
                }
              </div>
              @if (component.notes) {
                <p class="notes">{{ component.notes }}</p>
              }
            </article>
          }
        </div>
      </section>

      <section class="section">
        <h2>Recipes</h2>
        <div class="recipe-grid">
          @for (recipe of recipes(); track recipe.id) {
            <article class="recipe-card">
              <p class="recipe-family">{{ recipe.family }}</p>
              <h3>{{ recipe.title }}</h3>
              <p>{{ recipe.description }}</p>
              <div class="chip-row">
                @for (component of recipe.components; track component) {
                  <span class="chip">{{ component }}</span>
                }
              </div>
            </article>
          }
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) minmax(280px, 360px);
      gap: 20px;
      align-items: start;
    }
    .eyebrow {
      margin: 0 0 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 11px;
      color: var(--bui-color-primary);
    }
    h1, h2, h3, p {
      margin: 0;
    }
    .lede {
      margin-top: 10px;
      color: var(--bui-color-text-muted);
      max-width: 64ch;
    }
    .preview {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px;
      border: 1px solid var(--bui-border-default);
      border-radius: 6px;
      background: var(--bui-surface-panel-header);
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
    }
    .stat-card,
    .doc-card,
    .recipe-card {
      border: 1px solid var(--bui-border-default);
      border-radius: 4px;
      background: var(--bui-surface-panel);
      padding: 14px;
    }
    .stat-card {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .stat-value {
      font-size: 24px;
      font-weight: 700;
    }
    .stat-label,
    .doc-card p,
    .recipe-card p {
      color: var(--bui-color-text-muted);
      font-size: 13px;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .card-grid,
    .recipe-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 12px;
    }
    .doc-card__top {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }
    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 10px;
    }
    .chip {
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid var(--bui-border-subtle);
      font-size: 11px;
      color: var(--bui-color-text-muted);
      background: var(--bui-surface-panel-header);
    }
    .notes {
      margin-top: 10px;
    }
    .recipe-family {
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-size: 10px;
      color: var(--bui-color-primary);
      margin-bottom: 4px;
    }
    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoundationsComponent {
  components = computed(() => BUI_COMPONENT_DOCS);
  recipes = computed(() => BUI_RECIPE_DOCS);

  summary = computed(() => {
    const docs = this.components();
    return [
      { label: 'Components', value: docs.length },
      { label: 'Recipes', value: this.recipes().length },
      { label: 'Stable', value: docs.filter((item) => item.maturity === 'stable').length },
      { label: 'Beta / Experimental', value: docs.filter((item) => item.maturity !== 'stable').length },
    ];
  });
}

