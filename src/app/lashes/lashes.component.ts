import { Component, OnInit } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-lashes',
  templateUrl: './lashes.component.html',
  styleUrls: ['./lashes.component.css'] // fixed property name
})
export class LashesComponent implements OnInit { // added OnInit
  // Pricing data for Ongles (Nails)
  pricingDataCils = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Cils',
    description: '',
    leftColumn: {
      categories: [
        {
          category: 'LASHES',
          items: [
            { name: 'Cil à cil', price: '1 D 400 dh' },
            { name: 'Natural volume', price: '2 D 500 dh' },
            { name: 'Russian volume', price: '3 D 600 dh' },
            { name: 'Mega volume', price: '4 D 700 dh' }
          ]
        },
        {
          category: 'REMPLISSAGE',
          items: [
            { name: 'Eyelash filler', price: '1 D 300 dh' },
            { name: 'Before', price: '2 D 400 dh' }
          ]
        }
      ]
    },
    rightColumn: {
      categories: [
        {
          category: 'CILS AU NATUREL',
          items: [
            { name: 'Lamination / Remplacement', price: '300 dh' },
            { name: 'Coloration cils', price: '50 dh' },
            { name: 'Remove / Dépose', price: '100 dh' },
            { name: 'Démaquillage', price: '50 dh' }
          ]
        },
        {
          category: 'REMPLISSAGE',
          items: [
            { name: '21 days max', price: '3 D 500 dh' },
            { name: '', price: '4 D 600 dh' }
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

  constructor(private seoService: SeoService) {} // inject SeoService

  ngOnInit(): void {
    // SEO for the Cils page
    const seo: SeoMeta = {
      title: 'Tarif des Cils - Russiaville Beauty',
      description: 'Consultez nos tarifs détaillés pour les prestations cils : extensions, rehaussement, lamination et remplissages. Résultats naturels et durables.',
      image: 'assets/images/s_lashes.png',
      keywords: 'tarifs cils, extensions de cils, rehaussement, Russiaville Beauty',
      canonical: '/tarifs/cils',
      ogType: 'article'
    };
    this.seoService.applySeo(seo);
  }
}
