import { Component, Input } from '@angular/core';

export interface ServiceBox {
  id: string;
  icon: string;
  title: string;
  text: string;
  delay: string;
}

export interface ServicesFeaturesData {
  boxes: ServiceBox[];
}

@Component({
  selector: 'app-services-features',
  templateUrl: './services-features.component.html',
  styleUrls: ['./services-features.component.css']
})
export class ServicesFeaturesComponent {
  @Input() data!: ServicesFeaturesData;
}
