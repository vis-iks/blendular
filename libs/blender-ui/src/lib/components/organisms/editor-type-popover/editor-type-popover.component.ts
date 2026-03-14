import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorTypeColumn, EditorTypeItem } from './editor-type-popover.interface';
import { BuiPopoverContainerComponent, BuiPopoverHeaderComponent } from '../../molecules/popover';

@Component({
  selector: 'bui-editor-type-popover',
  standalone: true,
  imports: [CommonModule, BuiPopoverContainerComponent, BuiPopoverHeaderComponent],
  templateUrl: './editor-type-popover.component.html',
  styleUrl: './editor-type-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuiEditorTypePopoverComponent {
  /** The columns of editor types to display */
  columns = input<EditorTypeColumn[]>([]);

  /** Emitted when the user clicks an item */
  itemSelected = output<EditorTypeItem>();

  onItemClick(item: EditorTypeItem) {
    this.itemSelected.emit(item);
  }
}
