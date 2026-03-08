import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShaderNodeComponent } from './shader-node.component';
import { ShaderNode } from '../shader-editor.types';

describe('ShaderNodeComponent', () => {
  let component: ShaderNodeComponent;
  let fixture: ComponentFixture<ShaderNodeComponent>;

  const mockNode: ShaderNode = {
    id: 'test_node',
    title: 'Test Node',
    type: 'Test Type',
    x: 100,
    y: 100,
    inputs: [],
    outputs: []
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaderNodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShaderNodeComponent);
    component = fixture.componentInstance;
    component.node = mockNode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
