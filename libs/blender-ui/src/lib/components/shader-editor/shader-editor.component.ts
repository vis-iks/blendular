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
      const curvature = Math.max(dist * 0.5, 50);

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
      // Recalculate socket positions based on new fixed position
      // We can just trigger the drag moved logic again or rely on next digest cycle?
      // Since we updated the signal, the DOM binding [style.left] updates.
      // We should re-measure or just use the offsets.
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
                  { id: 'tc_generated', name: 'Generated', type: 'vector' },
                  { id: 'tc_normal', name: 'Normal', type: 'vector' },
                  { id: 'tc_uv', name: 'UV', type: 'vector' },
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
              y: 200,
              inputs: [
                  { id: 'm_vector_in', name: 'Vector', type: 'vector' },
                  { id: 'm_location', name: 'Location', type: 'vector' },
                  { id: 'm_rotation', name: 'Rotation', type: 'vector' },
                  { id: 'm_scale', name: 'Scale', type: 'vector' },
              ],
              outputs: [
                  { id: 'm_vector_out', name: 'Vector', type: 'vector' }
              ]
          },
          {
              id: 'image_tex',
              title: 'Image Texture',
              type: 'Image Texture',
              x: 500,
              y: 200,
              inputs: [
                  { id: 'it_vector', name: 'Vector', type: 'vector' }
              ],
              outputs: [
                  { id: 'it_color', name: 'Color', type: 'color' },
                  { id: 'it_alpha', name: 'Alpha', type: 'float' }
              ]
          },
          {
              id: 'bsdf',
              title: 'Principled BSDF',
              type: 'Principled BSDF',
              x: 720,
              y: 170,
              inputs: [
                  { id: 'pb_base_color', name: 'Base Color', type: 'color' },
                  { id: 'pb_metallic', name: 'Metallic', type: 'float' },
                  { id: 'pb_roughness', name: 'Roughness', type: 'float' },
                  { id: 'pb_ior', name: 'IOR', type: 'float' },
                  { id: 'pb_alpha', name: 'Alpha', type: 'float' },
                  { id: 'pb_normal', name: 'Normal', type: 'vector' },
              ],
              outputs: [
                  { id: 'pb_bsdf', name: 'BSDF', type: 'shader' }
              ]
          },
          {
              id: 'output',
              title: 'Material Output',
              type: 'Material Output',
              x: 1000,
              y: 200,
              inputs: [
                  { id: 'mo_surface', name: 'Surface', type: 'shader' },
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
          { id: 'c1', sourceNodeId: 'tex_coord', sourceSocketId: 'tc_generated', targetNodeId: 'mapping', targetSocketId: 'm_vector_in' },
          { id: 'c2', sourceNodeId: 'mapping', sourceSocketId: 'm_vector_out', targetNodeId: 'image_tex', targetSocketId: 'it_vector' },
          { id: 'c3', sourceNodeId: 'image_tex', sourceSocketId: 'it_color', targetNodeId: 'bsdf', targetSocketId: 'pb_base_color' },
          { id: 'c4', sourceNodeId: 'image_tex', sourceSocketId: 'it_alpha', targetNodeId: 'bsdf', targetSocketId: 'pb_alpha' },
          { id: 'c5', sourceNodeId: 'bsdf', sourceSocketId: 'pb_bsdf', targetNodeId: 'output', targetSocketId: 'mo_surface' },
      ];
      this.connections.set(connections);
  }
}
