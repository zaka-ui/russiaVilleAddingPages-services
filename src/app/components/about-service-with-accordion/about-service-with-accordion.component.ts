import { Component, Input } from '@angular/core';
import { AccordionDataType} from '../see-more/see-more.component';





// Data interface
export interface ServiceAbout {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  features: AccordionDataType;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right'; // 'left' or 'right';
  conseil? : string ;
}



@Component({
  selector: 'app-about-service-with-accordion',
  templateUrl: './about-service-with-accordion.component.html',
  styleUrl: './about-service-with-accordion.component.css',
})

export class AboutServiceWithAccordionComponent {
  @Input() service!: ServiceAbout;
}
