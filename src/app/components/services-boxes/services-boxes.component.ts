import { Component, Input } from '@angular/core';

export interface ServiceBox {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServicesSection {
  blockInfo: string;
  Astuce? : string ;
  services: ServiceBox[];
}

@Component({
  selector: 'app-services-boxes',
  templateUrl: './services-boxes.component.html',
  styleUrls: ['./services-boxes.component.css']
})
export class ServicesBoxesComponent {
  @Input() servicesData!: ServicesSection;
}
