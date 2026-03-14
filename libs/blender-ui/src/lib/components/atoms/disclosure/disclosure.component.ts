import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-disclosure',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" class="bui-disclosure" [class.expanded]="expanded()" (click)="expanded.set(!expanded())">
      <span class="bl-icons-rightarrow disclosure-icon"></span>
      <span>{{ label() }}</span>
    </button>
  `,
  styles: [`
    .bui-disclosure {
      display: inline-flex;
      align-items: center;
      gap: var(--bui-spacing-sm);
      border: none;
      background: transparent;
      color: var(--bui-color-text);
      cursor: pointer;
      padding: 0;
      font: inherit;
    }
    .disclosure-icon {
      font-size: var(--bui-icon-size-sm);
      transition: transform var(--bui-motion-fast);
    }
    .expanded .disclosure-icon {
      transform: rotate(90deg);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiDisclosureComponent {
  label = input.required<string>();
  expanded = model(false);
}

