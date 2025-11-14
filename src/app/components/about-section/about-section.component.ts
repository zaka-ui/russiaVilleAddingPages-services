import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  @Input() data: {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    checkpoints: Array<string>;
  } = {
    subtitle: '',
    title: '',
    description: '',
    image: '',
    imageAlt: '',
    checkpoints: []
  };
}
