import { ChangeDetectionStrategy, Component, computed, input, model, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSearchFieldComponent } from '../../atoms/search-field/search-field.component';
import { BuiShortcutComponent } from '../../atoms/shortcut/shortcut.component';
import { BuiScrollAreaComponent } from '../../atoms/scroll-area/scroll-area.component';

export interface BuiCommandPaletteItem {
  id: string;
  label: string;
  group?: string;
  icon?: string;
  shortcut?: string[];
}

@Component({
  selector: 'bui-command-palette',
  standalone: true,
  imports: [CommonModule, BuiSearchFieldComponent, BuiShortcutComponent, BuiScrollAreaComponent],
  template: `
    @if (open()) {
      <section class="bui-command-palette">
        <bui-search-field [(value)]="query" placeholder="Type a command"></bui-search-field>
        <bui-scroll-area class="results">
          @for (item of filteredItems(); track item.id) {
            <button
              type="button"
              class="palette-item"
              [class.selected]="item.id === activeItemId()"
              (click)="selectItem(item.id)"
            >
              <div class="copy">
                <span class="label">{{ item.label }}</span>
                @if (item.group) {
                  <span class="group">{{ item.group }}</span>
                }
              </div>
              @if (item.shortcut?.length) {
                <bui-shortcut [keys]="item.shortcut!"></bui-shortcut>
              }
            </button>
          }
        </bui-scroll-area>
      </section>
    }
  `,
  styles: [`
    .bui-command-palette {
      width: min(560px, 100%);
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px;
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-lg);
      background: color-mix(in srgb, var(--bui-surface-panel) 92%, black 8%);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
    }
    .results {
      max-height: 280px;
    }
    .palette-item {
      width: 100%;
      min-height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 0 8px;
      border: none;
      background: transparent;
      color: var(--bui-color-text);
      cursor: pointer;
      text-align: left;
      font: inherit;
    }
    .palette-item.selected,
    .palette-item:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .copy {
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .group {
      color: var(--bui-color-text-muted);
      font-size: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiCommandPaletteComponent {
  items = input<BuiCommandPaletteItem[]>([]);
  open = model(true);
  query = model('');

  commandSelected = output<string>();

  activeItemId = signal<string | null>(null);

  filteredItems = computed(() => {
    const query = this.query().trim().toLowerCase();
    const items = this.items();
    if (!query) {
      return items;
    }
    return items.filter((item) => `${item.label} ${item.group ?? ''}`.toLowerCase().includes(query));
  });

  selectItem(id: string) {
    this.activeItemId.set(id);
    this.commandSelected.emit(id);
  }
}
