import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-inspector-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-inspector-row" [class.stacked]="layout() === 'stacked'">
      <div class="label-block">
        <span class="label">{{ label() }}</span>
        @if (hint()) {
          <span class="hint">{{ hint() }}</span>
        }
      </div>
      <div class="control-block">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .bui-inspector-row {
      display: grid;
      grid-template-columns: 120px minmax(0, 1fr);
      gap: 8px;
      align-items: center;
    }
    .bui-inspector-row.stacked {
      grid-template-columns: 1fr;
    }
    .label-block {
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .label {
      font-size: 11px;
      color: var(--bui-color-text);
    }
    .hint {
      font-size: 10px;
      color: var(--bui-color-text-muted);
    }
    .control-block {
      min-width: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiInspectorRowComponent {
  label = input.required<string>();
  hint = input('');
  layout = input<'inline' | 'stacked'>('inline');
}

