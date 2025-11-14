import { Component, OnInit } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.css' ] // fixed property name
})
export class NailsComponent implements OnInit { // added OnInit
  // Pricing data for Ongles (Nails)
  pricingDataOngles = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Ongles',
    description: '',
    leftColumn: {
      categories: [
        {
          category: 'NAILS',
          items: [
            { name: 'Manicure sans vernis', price: '200 dh' },
            { name: 'Manicure permanent', price: '300 dh' },
            { name: 'Manicure gel', price: '400 dh' },
            { name: 'Manicure gel extension', price: '600 dh' }
          ]
        },
        {
          category: 'NAIL OPTIONS',
          items: [
            { name: 'Dépose / Remove', price: '50 dh' },
            { name: 'French & ombré', price: '100 dh' }
          ]
        }
      ]
    },
    rightColumn: {
      categories: [
        {
          category: 'NAIL OPTIONS',
          items: [
            { name: 'Renforcement / repair', price: '50 dh' },
            { name: 'Design par ongle', price: '10 dh' }
          ]
        },
        {
          category: 'PEDICURE',
          items: [
            { name: 'Pedicure sans vernis', price: '300 dh' },
            { name: 'Pedicure semi permanent', price: '350 dh' },
            { name: 'Pedicure gel', price: '400 dh' },
            { name: 'Pedicure gel extension', price: '500 dh' }
          ]
        }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

    // Reviews data
  reviewsData = {
    subtitle: 'Elles en parlent',
    title: 'Ce que nos clientes disent de Russiaville Beauty',
    description: '',
    reviews: [
      {
        title: 'Extensions de cils parfaites',
        stars: 5,
        text: "J'ai adoré mes extensions de cils ! Le salon est propre, professionnel et l'équipe est adorable.",
        author: 'Émilie B.',
        avatar: 'assets/images/review-author-1.jpg',
        date: '12 août 2025'
      },
      {
        title: 'Sourcils impeccables',
        stars: 5,
        text: "Le résultat de mes sourcils était incroyable. J'ai reçu tellement de compliments. Merci Russiaville Beauty !",
        author: 'Sofia M.',
        avatar: 'assets/images/review-author-2.jpg',
        date: '03 juillet 2025'
      },
      {
        title: 'Manucure tenue longue durée',
        stars: 5,
        text: "Les ongles tiennent super bien et sont parfaitement réalisés. L'ambiance est agréable et relaxante.",
        author: 'Camille R.',
        avatar: 'assets/images/review-author-3.jpg',
        date: '21 juin 2025'
      },
      {
        title: 'Service attentionné !',
        stars: 5,
        text: "On se sent tout de suite à l'aise. Elles sont à l'écoute et très minutieuses. Une vraie pépite à découvrir !",
        author: 'Inès L.',
        avatar: 'assets/images/review-author-4.jpg',
        date: '08 mai 2025'
      },
      {
        title: 'Tout est parfait !',
        stars: 5,
        text: "J'ai testé les trois prestations : ongles, cils, sourcils. À chaque fois, c'est parfait. Je reviendrai, c'est sûr !",
        author: 'Laura D.',
        avatar: 'assets/images/review-author-5.jpg',
        date: '30 avril 2025'
      }
    ]
  };

  // Working hours data
  workingHoursData: any = {
    title: 'Horaires d\'ouverture',
    hours: [
      { day: 'Lundi – Dimanche', time: '10h00 - 20h00' }
    ],
    buttonText: 'Réserver en ligne',
    buttonLink: 'https://dikidi.net/1891924',
    leftImage: 'assets/images/ct-04-1.jpg',
    rightImage: 'assets/images/ct-04-2-01.png'
  };

  // Inject SeoService to apply page SEO
  constructor(private seoService: SeoService) {} // inject SeoService

  ngOnInit(): void {
    // SEO for the Ongles page
    const seo: SeoMeta = {
      title: 'Tarif des Ongles - Russiaville Beauty',
      description: 'Consultez nos tarifs détaillés pour les prestations ongulaires : manucure, gel, pédicure et options. Qualité professionnelle et hygiène garantie.',
      image: 'assets/images/gallery/5.png',
      keywords: 'tarifs ongles, manucure, pédicure, Russiaville Beauty',
      canonical: '/tarifs/ongles',
      ogType: 'article'
    };
    this.seoService.applySeo(seo);
  }
}
