import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiFieldGroupComponent - Containers for vertically stacked BuiFields.
 * 
 * Manages the "merged" look: removes vertical gaps and ensures only 
 * the top/bottom items have rounded corners.
 */
@Component({
  selector: 'bui-field-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (header()) {
      <div class="bui-field-group-header">{{ header() }}</div>
    }
    <div class="bui-field-group">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      margin-bottom: 8px;
    }

    .bui-field-group-header {
      font-size: var(--bui-font-size-small);
      color: var(--bui-text-muted);
      padding: 0 8px 6px 8px; /* 8px left/right matches fields */
      user-select: none;
    }

    .bui-field-group {
      display: flex;
      flex-direction: column;

      
      /* Target the controls inside the fields for special rounding */
      ::ng-deep {
        bui-field {
          margin-bottom: -1px; /* Overlap borders */

          &:first-child .bui-field-control > * {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            /* Handle nested trigger elements for complex components */
            ::ng-deep .bui-dropdown-trigger {
               border-bottom-left-radius: 0;
               border-bottom-right-radius: 0;
            }
          }

          &:last-child {
            margin-bottom: 0;
            .bui-field-control > * {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
            ::ng-deep .bui-dropdown-trigger {
               border-top-left-radius: 0;
               border-top-right-radius: 0;
            }
          }

          &:not(:first-child):not(:last-child) .bui-field-control > * {
            border-radius: 0;
            ::ng-deep .bui-dropdown-trigger {
               border-radius: 0;
            }
          }

          /* If there's only one child, keep it rounded */
          &:first-child:last-child .bui-field-control > * {
            border-radius: var(--bui-radius-sm);
            ::ng-deep .bui-dropdown-trigger {
               border-radius: var(--bui-radius-sm);
            }
          }
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiFieldGroupComponent {
  /** Optional header title for the group */
  header = input<string>('');
}
