import { Component, ChangeDetectionStrategy, input, model, contentChildren, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * BuiTabComponent – Individual tab content panel.
 */
@Component({
  selector: 'bui-tab',
  standalone: true,
  template: `
    @if (active) {
      <div class="bui-tab-content"><ng-content></ng-content></div>
    }
  `,
  styles: [`:host { display: block; } .bui-tab-content { padding: 8px; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTabComponent {
  /** Tab label shown in the header */
  label = input('Tab');

  /** Icon for the tab (Material Symbols) */
  icon = input<string | undefined>(undefined);

  /** Whether this tab is currently active (managed by parent) */
  active = false;
}

/**
 * BuiTabsComponent – Blender-style horizontal/vertical tab container.
 *
 * Renders tab headers and projects the matching bui-tab content.
 */
@Component({
  selector: 'bui-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiTabsComponent implements AfterContentInit {
  /** Orientation of the tab headers */
  orientation = input<'horizontal' | 'vertical'>('horizontal');

  /** Whether to show only icons (hides labels) */
  iconOnly = input(false);

  /** Active tab index (two-way) */
  activeIndex = model(0);

  /** Projected bui-tab children */
  tabs = contentChildren(BuiTabComponent);

  ngAfterContentInit() {
    this.updateActiveTabs();
  }

  selectTab(index: number) {
    this.activeIndex.set(index);
    this.updateActiveTabs();
  }

  private updateActiveTabs() {
    const tabList = this.tabs();
    const idx = this.activeIndex();
    tabList.forEach((tab, i) => {
      tab.active = i === idx;
    });
  }
}
