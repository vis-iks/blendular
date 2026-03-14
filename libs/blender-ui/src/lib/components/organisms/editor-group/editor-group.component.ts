import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiTabStripComponent, BuiTabStripItem } from '../../molecules/tab-strip/tab-strip.component';

@Component({
  selector: 'bui-editor-group',
  standalone: true,
  imports: [CommonModule, BuiTabStripComponent],
  template: `
    <section class="bui-editor-group">
      <div class="editor-header">
        <bui-tab-strip [tabs]="tabs()" [(activeTabId)]="activeTabId" (tabClosed)="tabClosed.emit($event)"></bui-tab-strip>
        <div class="editor-actions">
          <ng-content select="[editorActions]"></ng-content>
        </div>
      </div>
      <div class="editor-toolbar">
        <ng-content select="[editorToolbar]"></ng-content>
      </div>
      <div class="editor-body">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    .bui-editor-group {
      height: 100%;
      display: flex;
      flex-direction: column;
      min-width: 0;
      background: var(--bui-surface-panel);
    }
    .editor-header {
      display: flex;
      align-items: stretch;
      min-width: 0;
    }
    .editor-header bui-tab-strip {
      flex: 1;
      min-width: 0;
    }
    .editor-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      padding-right: 8px;
      background: var(--bui-surface-panel-header);
      border-bottom: 1px solid var(--bui-border-default);
    }
    .editor-actions:empty,
    .editor-toolbar:empty {
      display: none;
    }
    .editor-body {
      flex: 1;
      min-height: 0;
      background: color-mix(in srgb, var(--bui-surface-app) 88%, black 12%);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiEditorGroupComponent {
  tabs = input<BuiTabStripItem[]>([]);
  activeTabId = model<string | null>(null);
  tabClosed = output<string>();
}
