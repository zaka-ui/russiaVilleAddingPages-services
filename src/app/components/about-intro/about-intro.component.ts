import { Component, Input } from '@angular/core';

export interface AboutIntro {
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-about-intro',
  templateUrl: './about-intro.component.html',
  styleUrls: ['./about-intro.component.css']
})
export class AboutIntroComponent {
  @Input() data!: AboutIntro;
}
