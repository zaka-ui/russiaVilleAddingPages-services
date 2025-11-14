import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loop-carousel',
  templateUrl: './loop-carousel.component.html',
  styleUrls: ['./loop-carousel.component.css']
})
export class LoopCarouselComponent {
  // items: list of short texts to display in the looping carousel
  @Input() items: string[] = [];

  get loopItems(): string[] {
    return Array(4).fill(this.items).flat();
  }
}
