import { Component, Input } from '@angular/core';

export interface ServiceAbout {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right'; // 'left' or 'right';
  conseil? : string ;
}

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.css'],
})
export class AboutServicesComponent {
  @Input() service!: ServiceAbout;
}
