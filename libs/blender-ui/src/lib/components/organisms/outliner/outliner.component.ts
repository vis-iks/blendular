import { Component, AfterViewInit, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

export interface OutlinerNode {
  name: string;
  type: 'collection' | 'camera' | 'mesh' | 'mesh-data' | 'material' | 'light' | 'light-data' | string;
  icon: string;
  children?: OutlinerNode[];
  expanded?: boolean;
  selected?: boolean;
  active?: boolean;
}

export const DEFAULT_OUTLINER_NODES: OutlinerNode[] = [
  {
    name: 'Scene Collection',
    type: 'collection',
    icon: 'outliner',
    expanded: true,
    children: [
      {
        name: 'Collection',
        type: 'collection',
        icon: 'outliner',
        expanded: true,
        children: [
          { name: 'Collection 1', type: 'collection', icon: 'outliner' },
          { 
            name: 'Cube', 
            type: 'mesh', 
            icon: 'outliner_ob_mesh', 
            selected: true, 
            active: true,
            expanded: true,
            children: [
              {
                name: 'Cube',
                type: 'mesh-data',
                icon: 'mesh_data',
                expanded: true,
                children: [
                  { name: 'Material', type: 'material', icon: 'material' }
                ]
              }
            ]
          },
          { 
            name: 'Light', 
            type: 'light', 
            icon: 'light',
            expanded: false,
            children: [
              { name: 'Light', type: 'light-data', icon: 'light_data' }
            ]
          },
        ],
      }
    ],
  },
];

@Component({
  selector: 'bui-outliner',
  standalone: true,
  imports: [CommonModule, CdkTreeModule],
  templateUrl: './outliner.component.html',
  styleUrl: './outliner.component.scss',
})
export class OutlinerComponent implements AfterViewInit {
  nodes = input<OutlinerNode[]>(DEFAULT_OUTLINER_NODES);

  treeControl = new NestedTreeControl<OutlinerNode>((node) => node.children);
  dataSource = new ArrayDataSource(this.nodes());

  constructor() {
    effect(() => {
      this.dataSource = new ArrayDataSource(this.nodes());
    });
  }

  ngAfterViewInit() {
    this.expandRecursive(this.nodes());
  }

  expandRecursive(nodes: OutlinerNode[]) {
    nodes.forEach((node) => {
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
    this.deselectAll(this.nodes());
    node.selected = true;
    node.active = true;
  }

  deselectAll(nodes: OutlinerNode[]) {
    nodes.forEach((n) => {
      n.selected = false;
      n.active = false;
      if (n.children) {
        this.deselectAll(n.children);
      }
    });
  }

  toggleExpand(node: OutlinerNode, event: Event) {
    event.stopPropagation();
    if (this.treeControl.isExpanded(node)) {
      this.treeControl.collapse(node);
    } else {
      this.treeControl.expand(node);
    }
  }
}
