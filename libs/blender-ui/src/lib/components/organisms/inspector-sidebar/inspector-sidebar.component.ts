import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSidebarSectionHeaderComponent, BuiSidebarSectionAction } from '../../molecules/sidebar-section-header/sidebar-section-header.component';
import { BuiScrollAreaComponent } from '../../atoms/scroll-area/scroll-area.component';

@Component({
  selector: 'bui-inspector-sidebar',
  standalone: true,
  imports: [CommonModule, BuiSidebarSectionHeaderComponent, BuiScrollAreaComponent],
  template: `
    <aside class="bui-inspector-sidebar">
      <bui-sidebar-section-header [title]="title()" [subtitle]="subtitle()" [actions]="actions()"></bui-sidebar-section-header>
      <bui-scroll-area class="content">
        <ng-content></ng-content>
      </bui-scroll-area>
    </aside>
  `,
  styles: [`
    .bui-inspector-sidebar {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: var(--bui-surface-panel);
      border-left: 1px solid var(--bui-border-default);
      min-width: 260px;
    }
    .content {
      padding: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiInspectorSidebarComponent {
  title = input('Inspector');
  subtitle = input('');
  actions = input<BuiSidebarSectionAction[]>([]);
}

