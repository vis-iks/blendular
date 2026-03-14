import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-workbench-shell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bui-workbench-shell" [class.right-sidebar]="sidebarPosition() === 'right'" [class.with-panel]="showBottomPanel()">
      <div class="top-bar"><ng-content select="[workbenchTopBar]"></ng-content></div>
      <div class="activity-bar"><ng-content select="[workbenchActivityBar]"></ng-content></div>
      <div class="sidebar"><ng-content select="[workbenchSidebar]"></ng-content></div>
      <div class="editor"><ng-content select="[workbenchEditor]"></ng-content></div>
      <div class="panel"><ng-content select="[workbenchPanel]"></ng-content></div>
      <div class="status-bar"><ng-content select="[workbenchStatusBar]"></ng-content></div>
    </div>
  `,
  styles: [`
    .bui-workbench-shell {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: auto minmax(220px, 280px) minmax(0, 1fr);
      grid-template-rows: auto minmax(0, 1fr) auto;
      grid-template-areas:
        "top top top"
        "activity sidebar editor"
        "status status status";
      background: var(--bui-surface-app);
      color: var(--bui-color-text);
      overflow: hidden;
    }
    .bui-workbench-shell.with-panel {
      grid-template-rows: auto minmax(0, 1fr) minmax(120px, 180px) auto;
      grid-template-areas:
        "top top top"
        "activity sidebar editor"
        "activity sidebar panel"
        "status status status";
    }
    .bui-workbench-shell.right-sidebar {
      grid-template-columns: auto minmax(0, 1fr) minmax(220px, 280px);
      grid-template-areas:
        "top top top"
        "activity editor sidebar"
        "status status status";
    }
    .bui-workbench-shell.right-sidebar.with-panel {
      grid-template-areas:
        "top top top"
        "activity editor sidebar"
        "activity panel sidebar"
        "status status status";
    }
    .top-bar { grid-area: top; min-width: 0; }
    .activity-bar { grid-area: activity; min-width: 0; min-height: 0; }
    .sidebar { grid-area: sidebar; min-width: 0; min-height: 0; }
    .editor { grid-area: editor; min-width: 0; min-height: 0; }
    .panel { grid-area: panel; min-width: 0; min-height: 0; display: none; }
    .status-bar { grid-area: status; min-width: 0; }
    .with-panel .panel { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiWorkbenchShellComponent {
  sidebarPosition = input<'left' | 'right'>('left');
  showBottomPanel = input(false);
}

