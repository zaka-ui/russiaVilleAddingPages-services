
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
})
export class HeroCarouselComponent {
  // Accept slides from parent; each slide: { subtitle, title, description, buttonText, buttonLink }
  @Input() titleFontSize : string = "7rem"
  @Input() slides: Array<any> = [];
  @Input() slideImage : string = "";
  @Input() slideImageAlt : string = "";
}
