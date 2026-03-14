import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiSidebarSectionHeaderComponent, BuiSidebarSectionAction } from '../../molecules/sidebar-section-header/sidebar-section-header.component';
import { BuiScrollAreaComponent } from '../../atoms/scroll-area/scroll-area.component';
import { BuiTreeComponent, BuiTreeNode } from '../../molecules/tree/tree.component';
import { BuiDatalistComponent, BuiDatalistItem } from '../../molecules/datalist/datalist.component';

@Component({
  selector: 'bui-explorer-sidebar',
  standalone: true,
  imports: [CommonModule, BuiSidebarSectionHeaderComponent, BuiScrollAreaComponent, BuiTreeComponent, BuiDatalistComponent],
  template: `
    <aside class="bui-explorer-sidebar">
      <bui-sidebar-section-header [title]="title()" [actions]="actions()"></bui-sidebar-section-header>
      <bui-scroll-area>
        @if (mode() === 'tree') {
          <bui-tree [nodes]="treeNodes()" (nodeSelected)="nodeSelected.emit($event)"></bui-tree>
        } @else {
          <bui-datalist [items]="listItems()" (selectionChange)="listItemSelected.emit($event)"></bui-datalist>
        }
      </bui-scroll-area>
    </aside>
  `,
  styles: [`
    .bui-explorer-sidebar {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: var(--bui-surface-panel);
      border-right: 1px solid var(--bui-border-default);
      min-width: 220px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiExplorerSidebarComponent {
  title = input('Explorer');
  mode = input<'tree' | 'list'>('tree');
  actions = input<BuiSidebarSectionAction[]>([]);
  treeNodes = input<BuiTreeNode[]>([]);
  listItems = input<BuiDatalistItem[]>([]);

  nodeSelected = output<BuiTreeNode>();
  listItemSelected = output<BuiDatalistItem | null>();
}

