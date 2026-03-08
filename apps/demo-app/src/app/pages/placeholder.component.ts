import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  template: `<div style="padding: 20px;"><h2>{{ title }} Content</h2><p>This component will be implemented in a future step.</p></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderPageComponent {
  @Input() title = 'Placeholder';
}
