import { Component, Input } from '@angular/core';


export interface LocationItem {
  name?: string;
  icon?: string;
}
interface Data {
  title? : string ,
  description? : string ,
  locations? : LocationItem[],
  descriptionTwo? : string,
  points? : LocationItem[],
  descriptionThree? : string ,
}

export type LocationDataType = Data;

@Component({
  selector: 'app-dynamic-location-section',
  templateUrl: './dynamic-location-section.component.html',
  styleUrl: './dynamic-location-section.component.css',
})

export class DynamicLocationSectionComponent {
  
 @Input() data : LocationDataType = {
    title : "Sourcils Marrakech & quartiers proches",
    description : "Nos prestations sourcils sont adaptées au mode de vie des clientes de Marrakech. Nous recevons chaque jour des clientes de :",
    locations : [
      { name: 'Guéliz', icon: '📍' },
      { name: 'Majorelle', icon: '📍' },
      { name: 'Hivernage', icon: '📍' },
      { name: 'Sidi Ghanem', icon: '📍' },
      { name: 'Route de Casa', icon: '📍' },
      { name: 'Centre-ville', icon: '📍' }
    ],
    descriptionTwo : "La chaleur du Maroc influence souvent :",
    points : [
      { name: 'la tenue de la teinture', icon: '📍' },
      { name: 'la direction des poils', icon: '📍' },
      { name: 'la répousse', icon: '📍' },
      { name: 'la discipline du sourcil', icon: '📍' }
    ],
    descriptionThree : "C’est pour ça que nos techniques sont ajustées selon la saison. En été, par exemple, on adapte la coloration pour éviter qu’elle s’éclaircisse trop vite.",
  }

}
