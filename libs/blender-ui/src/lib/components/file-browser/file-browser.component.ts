import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bui-file-browser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-browser.component.html',
  styleUrl: './file-browser.component.scss',
})
export class FileBrowserComponent {
    // Basic data for demonstration if needed, but the template will be static for now as per design reference.
}
