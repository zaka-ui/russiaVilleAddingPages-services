import { Component, Input } from '@angular/core';
import { AccordionDataType } from '../see-more/see-more.component';



export interface ContentImage {
  id?: string;
  src: string;
  alt: string;
}

export interface ContentSectionData {
  subtitle?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  leftImage: ContentImage;
  rightImage: ContentImage;
  embeddedImage: ContentImage;
}

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css'],
})
export class ContentSectionComponent {
  @Input() accordionData!: AccordionDataType;
  @Input() data!: ContentSectionData;

}
