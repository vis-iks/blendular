import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShaderEditorComponent } from '@blender-ui/core';

@Component({
  selector: 'app-shader-editor-demo',
  standalone: true,
  imports: [CommonModule, ShaderEditorComponent],
  template: `
    <div class="page-container">
      <header class="page-header">
        <h1>Shader Editor</h1>
        <p>Node-based material editing with custom connections and header-integrated sockets.</p>
      </header>
      
      <div class="editor-container">
        <lib-shader-editor></lib-shader-editor>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: var(--bui-spacing-xl);
    }
    .page-header {
      h1 { margin: 0; font-size: 24px; font-weight: 600; }
      p { margin: 4px 0 0; color: var(--bui-text-muted); }
    }
    .editor-container {
      flex: 1;
      background: #111;
      border: 1px solid var(--bui-border-dark);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShaderEditorDemoComponent {}
