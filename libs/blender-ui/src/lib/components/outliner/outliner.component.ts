import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OutlinerNode {
  name: string;
  type: 'collection' | 'camera' | 'mesh' | 'light';
  icon: string;
  children?: OutlinerNode[];
  expanded?: boolean;
  selected?: boolean;
  active?: boolean;
}

@Component({
  selector: 'bui-outliner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outliner.component.html',
  styleUrl: './outliner.component.scss',
})
export class OutlinerComponent {
  nodes: OutlinerNode[] = [
    {
      name: 'Scene Collection',
      type: 'collection',
      icon: 'format_list_bulleted',
      expanded: true,
      children: [
        {
          name: 'Collection',
          type: 'collection',
          icon: 'folder_open',
          expanded: true,
          children: [
            {
              name: 'Camera',
              type: 'camera',
              icon: 'videocam',
            },
            {
              name: 'Cube',
              type: 'mesh',
              icon: 'change_history',
              selected: true,
              active: true,
            },
            {
              name: 'Light',
              type: 'light',
              icon: 'lightbulb',
            }
          ]
        }
      ]
    }
  ];

  toggleExpand(node: OutlinerNode, event: Event) {
    event.stopPropagation();
    node.expanded = !node.expanded;
  }
}
