import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BuiSliderComponent, BuiDatalistComponent, BuiDatalistAction, BuiDatalistItem, BuiDatalistItemActionsDirective } from '@blender-ui/core';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BuiSliderComponent, BuiDatalistComponent, BuiDatalistItemActionsDirective],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component {
  // Basic slider demos
  sliderValue = signal(50);
  xPosition = signal(0);
  yPosition = signal(0);
  zPosition = signal(0);

  // Scale with different ranges
  scale = signal(1);
  rotation = signal(45);
  opacity = signal(0.75);

  // Reactive form slider
  formSlider = new FormControl(25);

  // Datalist Demo Data
  demoItems = signal<BuiDatalistItem[]>([
    { id: '1', label: 'Item 1', icon: 'mesh_cube' },
    { id: '2', label: 'Item 2', icon: 'mesh_cube' },
    { id: '3', label: 'Item 3', icon: 'mesh_cube' }
  ]);
  selectedDemoItemId = signal<string | null>(this.demoItems()[0].id);
  selectedDemoItem = computed(() => this.demoItems().find((item) => item.id === this.selectedDemoItemId()) ?? null);
  datalistActions: BuiDatalistAction[] = [
    { id: 'settings', icon: 'settings' }
  ];

  addItem() {
    const list = [...this.demoItems()];
    const newItem: BuiDatalistItem = { id: String(Date.now()), label: 'New Item ' + (list.length + 1), icon: 'mesh_cube' };
    list.push(newItem);
    this.demoItems.set(list);
    this.selectedDemoItemId.set(newItem.id);
  }

  removeItem(item: BuiDatalistItem) {
    const list = this.demoItems().filter(g => g.id !== item.id);
    this.demoItems.set(list);
    this.selectedDemoItemId.set(list.length > 0 ? list[list.length - 1].id : null);
  }

  moveItemUp(item: BuiDatalistItem) {
    const list = [...this.demoItems()];
    const index = list.findIndex(g => g.id === item.id);
    if (index > 0) {
      [list[index], list[index - 1]] = [list[index - 1], list[index]];
      this.demoItems.set(list);
    }
  }

  moveItemDown(item: BuiDatalistItem) {
    const list = [...this.demoItems()];
    const index = list.findIndex(g => g.id === item.id);
    if (index < list.length - 1) {
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
      this.demoItems.set(list);
    }
  }
}
