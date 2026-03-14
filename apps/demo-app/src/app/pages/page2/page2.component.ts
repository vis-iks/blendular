import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BuiSliderComponent, BuiDatalistComponent, BuiDatalistAction, BuiDatalistItemActionsDirective } from '@blender-ui/core';

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
  demoItems = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);
  selectedDemoItem = signal<any>(this.demoItems()[0]);
  datalistActions: BuiDatalistAction[] = [
    { id: 'settings', icon: 'settings' }
  ];

  addItem() {
    const list = [...this.demoItems()];
    const newItem = { id: Date.now(), name: 'New Item ' + (list.length + 1) };
    list.push(newItem);
    this.demoItems.set(list);
    this.selectedDemoItem.set(newItem);
  }

  removeItem(item: any) {
    const list = this.demoItems().filter(g => g.id !== item.id);
    this.demoItems.set(list);
    this.selectedDemoItem.set(list.length > 0 ? list[list.length - 1] : null);
  }

  moveItemUp(item: any) {
    const list = [...this.demoItems()];
    const index = list.findIndex(g => g.id === item.id);
    if (index > 0) {
      [list[index], list[index - 1]] = [list[index - 1], list[index]];
      this.demoItems.set(list);
    }
  }

  moveItemDown(item: any) {
    const list = [...this.demoItems()];
    const index = list.findIndex(g => g.id === item.id);
    if (index < list.length - 1) {
      [list[index], list[index + 1]] = [list[index + 1], list[index]];
      this.demoItems.set(list);
    }
  }
}
