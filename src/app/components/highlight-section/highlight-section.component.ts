import { Component, Input } from '@angular/core';

export interface HighlightData {
  subtitle: string;
  title: string;
  text: string;
  features: string[];
  textSecond? : string;
  featuresSecond?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition: 'left' | 'right';
  conseil? : string;
}

@Component({
  selector: 'app-highlight-section',
  templateUrl: './highlight-section.component.html',
  styleUrls: ['./highlight-section.component.css'],

})
export class HighlightSectionComponent {
  @Input() data!: HighlightData;
}
