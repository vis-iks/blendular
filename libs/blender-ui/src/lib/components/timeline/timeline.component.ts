import { Component, ChangeDetectionStrategy, signal, computed, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from '../menu/menubar.component';
import { MenuItem } from '../menu/menu.interface';
import { BuiPopoverDirective } from '../popover/popover.directive';
import { BuiSliderComponent } from '../slider/slider.component';

@Component({
  selector: 'bui-timeline',
  standalone: true,
  imports: [CommonModule, FormsModule, MenubarComponent, BuiPopoverDirective, BuiSliderComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  @ViewChild('trackArea') trackArea!: ElementRef<HTMLDivElement>;

  currentFrame = signal(1);
  startFrame = signal(1);
  endFrame = signal(250);
  playing = signal(false);
  autoKeying = signal(false);
  isDragging = false;

  frameMarks = computed(() => {
    const marks = [];
    const start = this.startFrame();
    const end = this.endFrame();
    const step = 24;
    for (let f = Math.floor(start / step) * step; f <= end; f += step) {
      if (f < start) continue;
      marks.push(f);
    }
    return marks;
  });

  mainMenu: MenuItem[] = [
    { label: 'View', items: [{ label: 'Toggle Full Screen' }] },
    { label: 'Marker', items: [{ label: 'Add Marker', shortcut: 'M' }] },
    { label: 'Playback', items: [{ label: 'Play/Pause', shortcut: 'Space Bar' }] }
  ];

  jumpToStart() { this.currentFrame.set(this.startFrame()); }
  jumpToEnd() { this.currentFrame.set(this.endFrame()); }
  playReverse() { this.playing.set(true); }
  playForward() { this.playing.set(true); }
  pause() { this.playing.set(false); }

  onTrackMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.updateFrameFromMouse(event);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.updateFrameFromMouse(event);
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  private updateFrameFromMouse(event: MouseEvent) {
    if (!this.trackArea) return;
    const rect = this.trackArea.nativeElement.getBoundingClientRect();
    let pct = (event.clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    const start = this.startFrame();
    const end = this.endFrame();
    const f = Math.round(start + pct * (end - start));
    this.currentFrame.set(f);
  }
}

