import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

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
  imports: [CommonModule, CdkTreeModule],
  templateUrl: './outliner.component.html',
  styleUrl: './outliner.component.scss',
})
export class OutlinerComponent implements AfterViewInit {
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
        },
        {
          name: 'Collection 2',
          type: 'collection',
          icon: 'folder_open',
          children: [
             {
              name: 'Light',
              type: 'light',
              icon: 'lightbulb_outline',
            }
          ]
        }
      ]
    }
  ];

  treeControl = new NestedTreeControl<OutlinerNode>(node => node.children);
  dataSource = new ArrayDataSource(this.nodes);

  ngAfterViewInit() {
    this.expandRecursive(this.nodes);
  }

  expandRecursive(nodes: OutlinerNode[]) {
    nodes.forEach(node => {
      if (node.expanded) {
        this.treeControl.expand(node);
        if (node.children) {
          this.expandRecursive(node.children);
        }
      }
    });
  }

  hasChild = (_: number, node: OutlinerNode) => !!node.children && node.children.length > 0;

  selectNode(node: OutlinerNode) {
    this.deselectAll(this.nodes);
    node.selected = true;
    node.active = true;
  }

  deselectAll(nodes: OutlinerNode[]) {
    nodes.forEach(n => {
      n.selected = false;
      n.active = false;
      if (n.children) {
        this.deselectAll(n.children);
      }
    });
  }

  toggleExpand(node: OutlinerNode, event: Event) {
    event.stopPropagation();
    // With NestedTreeControl, expansion is handled by the control, but we might want to toggle manually too
    if (this.treeControl.isExpanded(node)) {
      this.treeControl.collapse(node);
    } else {
      this.treeControl.expand(node);
    }
  }
}
