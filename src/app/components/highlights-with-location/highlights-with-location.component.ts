import { Component, Input } from '@angular/core';



export interface HighlightData {
  subtitle: string;
  title: string;
  text: string;
  features: string[];
  textSecond? : string;
  featuresSecond?: string[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  conseil? : string;
}


@Component({
  selector: 'app-highlights-with-location',
  templateUrl: './highlights-with-location.component.html',
  styleUrl: './highlights-with-location.component.css'
})
export class HighlightsWithLocationComponent {
  @Input() data!: HighlightData;
}
