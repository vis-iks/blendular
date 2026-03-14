import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiFieldComponent - A single property row in a Blender-style panel.
 * 
 * Layout: [Label] [Control/Input] [Decorator]
 */
@Component({
  selector: 'bui-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-field" [class.disabled]="disabled()" [class.compact-variant]="variant() === 'compact'">
      @if (label() && variant() !== 'compact') {
        <div class="bui-field-label" [title]="label()">
          {{ label() }}
        </div>
      }
      <div class="bui-field-control">
        <ng-content></ng-content>
      </div>
      <div class="bui-field-decorator">
        @if (showDecorator()) {
          <span class="keyframe-dot" [class.active]="decoratorActive()"></span>
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .bui-field {
      display: flex;
      align-items: center;
      min-height: 24px;
      padding: 1px 8px;
      gap: var(--bui-spacing-md);
      width: 100%;

      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      &.compact-variant {
        gap: 0;
      }
    }

    .bui-field-label {
      flex: 0 0 35%;
      font-size: var(--bui-font-size-small);
      color: var(--bui-text-color);
      text-align: right;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      padding-right: 8px;
    }

    .bui-field-control {
      flex: 1;
      display: flex;
      align-items: center;
      min-width: 0;
      width: 100%;
    }


    .bui-field-decorator {
      flex: 0 0 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .keyframe-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #555;
      
      &.active {
        background-color: #ff9d33; /* Blender animated property orange */
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiFieldComponent {
  /** Property label */
  label = input<string>('');

  /** Field layout variant */
  variant = input<'standard' | 'compact'>('standard');

  /** Whether the field is disabled/grayed out */
  disabled = input(false);

  /** Whether to show the keyframe dot decorator */
  showDecorator = input(false);

  /** Whether the decorator is active (animated) */
  decoratorActive = input(false);
}
