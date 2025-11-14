import { Component, Input } from '@angular/core';

export interface PricingService {
  id: string;
  title: string;
  image: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-pricing-showcase',
  templateUrl: './pricing-showcase.component.html',
  styleUrls: ['./pricing-showcase.component.css']
})
export class PricingShowcaseComponent {
  @Input() subtitle: string = 'Sublimez votre beauté';
  @Input() title: string = 'Nos tarifs exceptionnels pour une expérience unique';
  @Input() description: string = 'Découvrez nos prestations professionnelles pour les ongles, les cils et les sourcils, réalisées avec soin dans votre salon Russiaville Beauty.';
  @Input() buttonText: string = 'Voir tous les services & tarifs';
  @Input() buttonLink: string = '/tarifs/tous';
  @Input() services: PricingService[] = [
    {
      id: 'ongles',
      title: 'Ongles',
      image: 'assets/images/gallery/5.png',
      alt: 'Ongles',
      link: '/tarifs/ongles'
    },
    {
      id: 'cils',
      title: 'Cils',
      image: 'assets/images/s_lashes.png',
      alt: 'Cils',
      link: '/tarifs/cils'
    },
    {
      id: 'sourcils',
      title: 'Sourcils',
      image: 'assets/images/s_brows.png',
      alt: 'Sourcils',
      link: '/tarifs/sourcils'
    }
  ];
}
