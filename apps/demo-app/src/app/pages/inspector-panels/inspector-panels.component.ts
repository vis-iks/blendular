import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BuiInspectorSidebarComponent,
  BuiPanelComponent,
  BuiPanelStackComponent,
  BuiInspectorRowComponent,
  BuiTextInputComponent,
  BuiSelectComponent,
  SelectOption,
  BuiToggleButtonComponent,
} from '@blender-ui/core';

@Component({
  selector: 'app-inspector-panels',
  standalone: true,
  imports: [
    CommonModule,
    BuiInspectorSidebarComponent,
    BuiPanelComponent,
    BuiPanelStackComponent,
    BuiInspectorRowComponent,
    BuiTextInputComponent,
    BuiSelectComponent,
    BuiToggleButtonComponent,
  ],
  template: `
    <div class="page">
      <header class="header">
        <p class="eyebrow">Inspector & Panels</p>
        <h1>Property sidebars built from composable rows</h1>
      </header>

      <div class="canvas">
        <bui-inspector-sidebar title="Object" subtitle="Reusable inspector shell">
          <bui-panel-stack>
            <bui-panel title="Transform" [expanded]="true">
              <div class="row-stack">
                <bui-inspector-row label="Name">
                  <bui-text-input value="Cube"></bui-text-input>
                </bui-inspector-row>
                <bui-inspector-row label="Mode">
                  <bui-select [options]="modeOptions" value="object"></bui-select>
                </bui-inspector-row>
                <bui-inspector-row label="Snapping">
                  <bui-toggle-button label="Enabled" icon="snap_on"></bui-toggle-button>
                </bui-inspector-row>
              </div>
            </bui-panel>

            <bui-panel title="Shading" [expanded]="true">
              <div class="row-stack">
                <bui-inspector-row label="Viewport" hint="Material preview">
                  <bui-toggle-button label="Preview" icon="material"></bui-toggle-button>
                </bui-inspector-row>
                <bui-inspector-row label="Selection" hint="Object visibility">
                  <bui-toggle-button label="Outline" icon="restrict_select_off"></bui-toggle-button>
                </bui-inspector-row>
              </div>
            </bui-panel>
          </bui-panel-stack>
        </bui-inspector-sidebar>
      </div>
    </div>
  `,
  styles: [`
    .page {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .eyebrow {
      margin: 0 0 6px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 11px;
      color: var(--bui-color-primary);
    }
    h1 {
      margin: 0;
    }
    .canvas {
      height: 540px;
      border: 1px solid var(--bui-border-default);
      border-radius: 12px;
      overflow: hidden;
      background: var(--bui-surface-app);
    }
    .row-stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InspectorPanelsComponent {
  modeOptions: SelectOption[] = [
    { label: 'Object Mode', value: 'object' },
    { label: 'Edit Mode', value: 'edit' },
    { label: 'Sculpt Mode', value: 'sculpt' },
  ];
}

