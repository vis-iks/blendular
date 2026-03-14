import { Component, ChangeDetectionStrategy, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiCheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { BuiPopoverContainerComponent } from './popover-container.component';
import { BuiPopoverHeaderComponent } from './popover-header.component';
import { BuiPopoverSectionComponent } from './popover-section.component';

@Component({
  selector: 'bui-gizmos-popover',
  standalone: true,
  imports: [
    CommonModule,
    BuiCheckboxComponent,
    BuiPopoverContainerComponent,
    BuiPopoverHeaderComponent,
    BuiPopoverSectionComponent
  ],
  template: `
    <bui-popover-container width="220px">
      
      <bui-popover-section>
        <bui-popover-header>Viewport Gizmos</bui-popover-header>
        <div class="column-layout">
          <bui-checkbox label="Navigate" [(checked)]="navigate"></bui-checkbox>
          <bui-checkbox label="Active Tools" [(checked)]="activeTools"></bui-checkbox>
          <bui-checkbox label="Active Modifier" [(checked)]="activeModifier"></bui-checkbox>
          <bui-checkbox label="Active Object" [(checked)]="activeObject"></bui-checkbox>
        </div>
      </bui-popover-section>

      <bui-popover-section>
        <bui-popover-header>Object Gizmos</bui-popover-header>
        <div class="mock-select">
          <span class="bl-icons-gizmo"></span>
          <span>Default</span>
          <span class="bl-icons-arrow_down"></span>
        </div>
        <div class="column-layout mt-4">
          <bui-checkbox label="Move" [(checked)]="move"></bui-checkbox>
          <bui-checkbox label="Rotate" [(checked)]="rotate"></bui-checkbox>
          <bui-checkbox label="Scale" [(checked)]="scale"></bui-checkbox>
        </div>
      </bui-popover-section>

      <bui-popover-section>
        <bui-popover-header>Empty</bui-popover-header>
        <div class="column-layout">
          <bui-checkbox label="Image" [(checked)]="image"></bui-checkbox>
          <bui-checkbox label="Force Field" [(checked)]="forceField"></bui-checkbox>
        </div>
      </bui-popover-section>

      <bui-popover-section [noBorder]="true">
        <bui-popover-header>Light</bui-popover-header>
        <div class="column-layout">
          <bui-checkbox label="Size" [(checked)]="lightSize"></bui-checkbox>
          <bui-checkbox label="Look At" [(checked)]="lightLookAt"></bui-checkbox>
        </div>
      </bui-popover-section>

    </bui-popover-container>
  `,
  styles: [`
    .column-layout {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 4px 8px;
    }
    .mt-4 { margin-top: 4px; }
    .mock-select {
      background: #333;
      border-radius: 4px;
      height: 24px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-size: 11px;
      color: #ccc;
      margin: 0 8px;
      gap: 8px;
      
      span:last-child {
        margin-left: auto;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuiGizmosPopoverComponent {
  navigate = model(true);
  activeTools = model(true);
  activeModifier = model(true);
  activeObject = model(true);
  
  move = model(false);
  rotate = model(false);
  scale = model(false);

  image = model(true);
  forceField = model(true);

  lightSize = model(true);
  lightLookAt = model(true);
}
