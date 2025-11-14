import { Component, Input } from '@angular/core';
import { AccordionDataType, SeeMoreComponent } from '../see-more/see-more.component';


export interface HighlightData {
  subtitle?: string;
  title: string;
  text: string;
  features?: AccordionDataType;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  conseil? : string;
}

@Component({
  selector: 'app-highlight-section-with-accordion',
  templateUrl: './highlight-section-with-accordion.component.html',
  styleUrl: './highlight-section-with-accordion.component.css',
})
export class HighlightSectionWithAccordionComponent {
  @Input() data!: HighlightData;
}
