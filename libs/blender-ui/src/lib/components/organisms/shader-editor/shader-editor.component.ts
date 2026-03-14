import { Component, OnInit, signal, computed, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShaderNodeComponent } from './shader-node/shader-node.component';
import { ShaderNode, ShaderConnection, ShaderSocket, SOCKET_COLORS } from './shader-editor.types';

@Component({
  selector: 'lib-shader-editor',
  standalone: true,
  imports: [CommonModule, ShaderNodeComponent],
  templateUrl: './shader-editor.component.html',
  styleUrl: './shader-editor.component.scss',
})
export class ShaderEditorComponent implements OnInit, AfterViewInit {
  nodes = signal<ShaderNode[]>([]);
  connections = signal<ShaderConnection[]>([]);

  // Map of socket ID to absolute position {x, y}
  socketPositions = new Map<string, {x: number, y: number}>();

  // Cache relative offsets
  socketRelativeOffsets = new Map<string, {x: number, y: number}>();

  // Map of socket ID to color
  socketColorsMap = new Map<string, string>();

  @ViewChildren(ShaderNodeComponent) nodeComponents!: QueryList<ShaderNodeComponent>;

  dragVersion = signal(0);

  connectionPaths = computed(() => {
    const conns = this.connections();
    this.dragVersion(); // dependency

    return conns.map(conn => {
      const sourcePos = this.socketPositions.get(conn.sourceSocketId);
      const targetPos = this.socketPositions.get(conn.targetSocketId);

      if (!sourcePos || !targetPos) return null;

      const x1 = sourcePos.x;
      const y1 = sourcePos.y;
      const x4 = targetPos.x;
      const y4 = targetPos.y;

      const dist = Math.abs(x1 - x4);
      // Adaptive curvature based on distance, but capped
      // Emphasize horizontal exit/entry points like in Blender
      const curvature = Math.max(dist * 0.75, 40);

      const cp1x = x1 + curvature;
      const cp1y = y1;
      const cp2x = x4 - curvature;
      const cp2y = y4;

      const path = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x4} ${y4}`;

      const color = this.socketColorsMap.get(conn.sourceSocketId) || '#888';

      return { id: conn.id, path, color };
    }).filter(p => p !== null) as { id: string, path: string, color: string }[];
  });

  ngOnInit() {
    this.initNodes();
    this.initConnections();
  }

  ngAfterViewInit() {
    // Initial calculation of socket positions
    // Timeout ensures DOM is rendered and layout stable
    setTimeout(() => {
        this.updateAllSocketPositions();
    }, 100);

    this.nodeComponents.changes.subscribe(() => {
        setTimeout(() => {
             this.updateAllSocketPositions();
        });
    });
  }

  updateAllSocketPositions() {
    this.nodeComponents.forEach(comp => {
      this.updateNodeSockets(comp);
    });
    this.dragVersion.update(v => v + 1);
  }

  updateNodeSockets(comp: ShaderNodeComponent) {
      if (!comp || !comp.node) return;

      const updateSocket = (s: ShaderSocket) => {
          const rel = comp.getSocketRelativePosition(s.id);
          this.socketColorsMap.set(s.id, SOCKET_COLORS[s.type]);

          if (rel) {
              this.socketRelativeOffsets.set(s.id, rel);
              this.socketPositions.set(s.id, {
                  x: comp.node.x + rel.x,
                  y: comp.node.y + rel.y
              });
          }
      };

      comp.node.inputs.forEach(updateSocket);
      comp.node.outputs.forEach(updateSocket);
  }

  onNodeDragMoved(event: { id: string, x: number, y: number }) {
    const node = this.nodes().find(n => n.id === event.id);
    if (node) {
        [...node.inputs, ...node.outputs].forEach(s => {
            const rel = this.socketRelativeOffsets.get(s.id);
            if (rel) {
                this.socketPositions.set(s.id, {
                    x: event.x + rel.x,
                    y: event.y + rel.y
                });
            }
        });
        
        // Update connections eagerly
        this.dragVersion.update(v => v + 1);
    }
  }

  onNodePositionChange(event: { id: string, x: number, y: number }) {
      this.nodes.update(nodes => nodes.map(n => {
          if (n.id === event.id) {
              return { ...n, x: event.x, y: event.y };
          }
          return n;
      }));
      this.onNodeDragMoved(event);
  }

  trackByNodeId(index: number, node: ShaderNode) {
      return node.id;
  }

  initNodes() {
      const nodes: ShaderNode[] = [
          {
              id: 'tex_coord',
              title: 'Texture Coordinate',
              type: 'Texture Coordinate',
              x: 80,
              y: 200,
              inputs: [],
              outputs: [
                  { id: 'tc_generated', name: 'Generated', type: 'vector', isConnected: true },
                  { id: 'tc_normal', name: 'Normal', type: 'vector' },
                  { id: 'tc_uv', name: 'UV', type: 'vector', isConnected: true },
                  { id: 'tc_object', name: 'Object', type: 'vector' },
                  { id: 'tc_camera', name: 'Camera', type: 'vector' },
                  { id: 'tc_window', name: 'Window', type: 'vector' },
                  { id: 'tc_reflection', name: 'Reflection', type: 'vector' },
              ]
          },
          {
              id: 'mapping',
              title: 'Mapping',
              type: 'Mapping',
              x: 290,
              y: 160,
              inputs: [
                  { 
                      id: 'm_type', name: 'Type', type: 'float', 
                      control: { id: 'm_type_ctrl', type: 'select', label: 'Type:', value: 'Point', options: ['Point', 'Texture', 'Vector', 'Normal'] } 
                  },
                  { id: 'm_vector_in', name: 'Vector', type: 'vector', isConnected: true },
                  { id: 'm_location', name: 'Location', type: 'vector' },
                  { id: 'm_rotation', name: 'Rotation', type: 'vector' },
                  { id: 'm_scale', name: 'Scale', type: 'vector' },
              ],
              outputs: [
                  { id: 'm_vector_out', name: 'Vector', type: 'vector', isConnected: true }
              ]
          },
          {
              id: 'image_tex',
              title: 'Image Texture',
              type: 'Image Texture',
              x: 500,
              y: 200,
              inputs: [
                  { id: 'it_vector', name: 'Vector', type: 'vector', isConnected: true }
              ],
              outputs: [
                  { id: 'it_color', name: 'Color', type: 'color', isConnected: true },
                  { id: 'it_alpha', name: 'Alpha', type: 'float' }
              ]
          },
          {
              id: 'bsdf',
              title: 'Principled BSDF',
              type: 'Principled BSDF',
              x: 720,
              y: 100,
              inputs: [
                  { id: 'pb_base_color', name: 'Base Color', type: 'color', isConnected: true },
                  { id: 'pb_metallic', name: 'Metallic', type: 'float', control: { id: 'pb_met_ctrl', type: 'number', value: 0.000, min: 0, max: 1 } },
                  { id: 'pb_roughness', name: 'Roughness', type: 'float', control: { id: 'pb_rough_ctrl', type: 'number', value: 0.500, min: 0, max: 1 } },
                  { id: 'pb_ior', name: 'IOR', type: 'float', control: { id: 'pb_ior_ctrl', type: 'number', value: 1.500, min: 0, max: 3 } },
                  { id: 'pb_alpha', name: 'Alpha', type: 'float', control: { id: 'pb_alpha_ctrl', type: 'number', value: 1.000, min: 0, max: 1 } },
                  { id: 'pb_normal', name: 'Normal', type: 'vector' },
              ],
              outputs: [
                  { id: 'pb_bsdf', name: 'BSDF', type: 'shader', isConnected: true }
              ]
          },
          {
              id: 'output',
              title: 'Material Output',
              type: 'Material Output',
              x: 1000,
              y: 200,
              inputs: [
                  { 
                      id: 'mo_all', name: 'Target', type: 'shader', 
                      control: { id: 'mo_target_ctrl', type: 'select', value: 'All', options: ['All', 'Cycles', 'Eevee'] } 
                  },
                  { id: 'mo_surface', name: 'Surface', type: 'shader', isConnected: true },
                  { id: 'mo_volume', name: 'Volume', type: 'shader' },
                  { id: 'mo_displacement', name: 'Displacement', type: 'vector' },
                  { id: 'mo_thickness', name: 'Thickness', type: 'float' },
              ],
              outputs: []
          }
      ];
      this.nodes.set(nodes);
  }

  initConnections() {
      const connections: ShaderConnection[] = [
          { id: 'c1', sourceNodeId: 'tex_coord', sourceSocketId: 'tc_uv', targetNodeId: 'mapping', targetSocketId: 'm_vector_in' },
          { id: 'c2', sourceNodeId: 'mapping', sourceSocketId: 'm_vector_out', targetNodeId: 'image_tex', targetSocketId: 'it_vector' },
          { id: 'c3', sourceNodeId: 'image_tex', sourceSocketId: 'it_color', targetNodeId: 'bsdf', targetSocketId: 'pb_base_color' },
          { id: 'c5', sourceNodeId: 'bsdf', sourceSocketId: 'pb_bsdf', targetNodeId: 'output', targetSocketId: 'mo_surface' },
      ];
      this.connections.set(connections);
  }
}
