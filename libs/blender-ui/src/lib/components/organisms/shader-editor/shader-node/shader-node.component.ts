import { Component, Input, Output, EventEmitter, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragHandle, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { ShaderNode, ShaderSocket, NODE_HEADER_COLORS, SOCKET_COLORS } from '../shader-editor.types';
import { BuiSelectComponent } from '../../../atoms/select/select.component';
import { BuiNumberInputComponent } from '../../../atoms/number-input/number-input.component';

@Component({
  selector: 'lib-shader-node',
  standalone: true,
  imports: [CommonModule, CdkDrag, CdkDragHandle, BuiSelectComponent, BuiNumberInputComponent],
  templateUrl: './shader-node.component.html',
  styleUrls: ['./shader-node.component.scss'],
})
export class ShaderNodeComponent {
  @Input({ required: true }) node!: ShaderNode;
  @Output() positionChange = new EventEmitter<{ id: string; x: number; y: number }>();
  @Output() dragMoved = new EventEmitter<{ id: string; x: number; y: number }>();

  private elementRef = inject(ElementRef);

  nodeHeaderColors = NODE_HEADER_COLORS;
  socketColors = SOCKET_COLORS;

  get headerOutputs(): ShaderSocket[] {
    return this.node.outputs.filter(s => s.isHeader);
  }

  get bodyOutputs(): ShaderSocket[] {
    return this.node.outputs.filter(s => !s.isHeader);
  }

  get bodyInputs(): ShaderSocket[] {
    // Inputs don't usually go in headers, but just in case
    return this.node.inputs.filter(s => !s.isHeader);
  }

  getSocketRelativePosition(socketId: string): { x: number; y: number } | null {
    const element = this.elementRef.nativeElement as HTMLElement;
    // We need to find the socket element within the component's view.
    // The querySelector will search inside the host element.
    const socketEl = element.querySelector(`[data-socket-id="${socketId}"]`) as HTMLElement;
    if (!socketEl) return null;

    // The socket position we need is relative to the node's top-left corner,
    // because that's what we use to calculate the absolute position on the canvas.
    // However, the node is positioned absolutely.
    // Actually, `element` IS the host element.
    // The `element.getBoundingClientRect()` gives the position of the node on screen.
    // `socketEl.getBoundingClientRect()` gives the position of the socket on screen.
    // The difference is the offset of the socket within the node.

    const hostRect = element.getBoundingClientRect();
    const socketRect = socketEl.getBoundingClientRect();

    const isInput = socketEl.classList.contains('input');
    const xOffset = isInput ? 4 : -2;

    // Calculate center of socket relative to top-left of the node component
    return {
      x: socketRect.left - hostRect.left + socketRect.width / 2 + xOffset,
      y: socketRect.top - hostRect.top + socketRect.height / 2
    };
  }

  onDragMoved(event: CdkDragMove) {
    const { x, y } = event.source.getFreeDragPosition();
    this.dragMoved.emit({
      id: this.node.id,
      x: this.node.x + x,
      y: this.node.y + y
    });
  }

  onDragEnded(event: CdkDragEnd) {
    const { x, y } = event.source.getFreeDragPosition();
    this.positionChange.emit({
      id: this.node.id,
      x: this.node.x + x,
      y: this.node.y + y
    });
    event.source.reset();
  }

  getSocketColor(socket: ShaderSocket): string {
    return this.socketColors[socket.type] || '#888';
  }

  getHeaderColor(): string {
      return this.nodeHeaderColors[this.node.type] || '#333';
  }
}
