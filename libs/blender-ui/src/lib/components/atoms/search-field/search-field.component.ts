import { ChangeDetectionStrategy, Component, booleanAttribute, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuiDensity } from '../../../foundation/types';

@Component({
  selector: 'bui-search-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="bui-search-field" [class.compact]="density() === 'compact'">
      <span class="bl-icons-viewzoom search-icon"></span>
      <input
        type="search"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [value]="value()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button type="button" class="clear-btn" (click)="value.set('')" [disabled]="disabled()">
          <span class="bl-icons-x"></span>
        </button>
      }
    </label>
  `,
  styles: [`
    .bui-search-field {
      min-height: var(--bui-control-height-md);
      display: flex;
      align-items: center;
      gap: var(--bui-spacing-sm);
      padding: 0 var(--bui-spacing-sm);
      border: 1px solid var(--bui-border-default);
      border-radius: var(--bui-radius-md);
      background: var(--bui-surface-input);
      color: var(--bui-color-text-muted);
    }
    .bui-search-field.compact {
      min-height: var(--bui-control-height-sm);
    }
    input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      outline: none;
      color: var(--bui-color-text);
      font: inherit;
    }
    .clear-btn {
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiSearchFieldComponent {
  placeholder = input('Search');
  density = input<BuiDensity>('comfortable');
  disabled = input(false, { transform: booleanAttribute });
  value = model('');

  onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement | null)?.value ?? '');
  }
}
