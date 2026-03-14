import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiIconButtonComponent } from '../../atoms/icon-button/icon-button.component';

export interface BuiSidebarSectionAction {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'bui-sidebar-section-header',
  standalone: true,
  imports: [CommonModule, BuiIconButtonComponent],
  template: `
    <div class="bui-sidebar-section-header">
      <button
        type="button"
        class="header-button"
        [class.collapsible]="collapsible()"
        (click)="toggleCollapsed()"
      >
        @if (collapsible()) {
          <span class="bl-icons-rightarrow toggle-icon" [class.expanded]="!collapsed()"></span>
        }
        <div class="copy">
          <span class="title">{{ title() }}</span>
          @if (subtitle()) {
            <span class="subtitle">{{ subtitle() }}</span>
          }
        </div>
      </button>
      <div class="actions">
        @for (action of actions(); track action.id) {
          <bui-icon-button
            [icon]="action.icon"
            [label]="action.label"
            size="sm"
            (clicked)="actionClick.emit(action.id)"
          ></bui-icon-button>
        }
      </div>
    </div>
  `,
  styles: [`
    .bui-sidebar-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 6px 8px;
      background: var(--bui-surface-panel-header);
      border-bottom: 1px solid var(--bui-border-default);
    }
    .header-button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
      background: transparent;
      color: var(--bui-color-text);
      cursor: pointer;
      padding: 0;
      min-width: 0;
      font: inherit;
    }
    .copy {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .subtitle {
      color: var(--bui-color-text-muted);
      font-size: 10px;
    }
    .toggle-icon {
      font-size: 10px;
      transition: transform var(--bui-motion-fast);
    }
    .toggle-icon.expanded {
      transform: rotate(90deg);
    }
    .actions {
      display: flex;
      gap: 4px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiSidebarSectionHeaderComponent {
  title = input.required<string>();
  subtitle = input('');
  collapsible = input(false);
  actions = input<BuiSidebarSectionAction[]>([]);
  collapsed = model(false);

  actionClick = output<string>();

  toggleCollapsed() {
    if (this.collapsible()) {
      this.collapsed.set(!this.collapsed());
    }
  }
}

