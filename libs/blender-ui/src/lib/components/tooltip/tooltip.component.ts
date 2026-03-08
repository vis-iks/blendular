import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-tooltip-container">
      <div class="bui-tooltip-header">
        <span class="bui-tooltip-title">{{ title }}</span>
        @if (shortcut) {
          <span class="bui-tooltip-shortcut">{{ shortcut }}</span>
        }
      </div>
      @if (details) {
        <div class="bui-tooltip-details">{{ details }}</div>
      }
    </div>
  `,
  styleUrl: './tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTooltipComponent {
  @Input() title = '';
  @Input() details = '';
  @Input() shortcut = '';
}
