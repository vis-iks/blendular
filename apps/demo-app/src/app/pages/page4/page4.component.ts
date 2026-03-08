import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BuiPanelComponent, BuiTabsComponent, BuiTabComponent,
  BuiSplitterComponent, BuiSliderComponent
} from '@blender-ui/core';

@Component({
  selector: 'app-page4',
  standalone: true,
  imports: [
    CommonModule, BuiPanelComponent, BuiTabsComponent,
    BuiTabComponent, BuiSplitterComponent, BuiSliderComponent
  ],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page4Component {
  panelExpanded = signal(true);
  activeTabIndex = signal(0);
}
