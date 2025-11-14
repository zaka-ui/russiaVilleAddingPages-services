import { Component, Input } from '@angular/core';

export interface CtaBannerData {
  subtitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export type CtaBannerDataType = CtaBannerData ;


@Component({
  selector: 'app-cta-banner',
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.css']
})
export class CtaBannerComponent {
  @Input() data!: CtaBannerData;
}
