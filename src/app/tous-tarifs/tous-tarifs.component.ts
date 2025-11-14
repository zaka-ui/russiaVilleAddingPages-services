import { Component } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-tous-tarifs',
  templateUrl: './tous-tarifs.component.html',
  styleUrl: './tous-tarifs.component.css'
})
export class TousTarifsComponent {
  // Pricing data for Sourcils (Brows)
  pricingDataSourcils = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Sourcils',
    description: '',
    leftColumn: {
      items: [
        { name: 'Epilation sourcils', price: '100 dh' },
        { name: 'Coloration sourcils', price: '100 dh' }
      ]
    },
    rightColumn: {
      items: [
        { name: 'Brows lamination', price: '300 dh' },
        { name: 'All', price: '400 dh' }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

  // Pricing data for Cils (Lashes)
  pricingDataCils = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Cils',
    description: '',
    leftColumn: {
      categories: [
        {
          category: 'LASHES',
          items: [
            { name: 'Cil à cil', price: '(1 D) 400 dh' },
            { name: 'Natural volume', price: '(2 D) 500 dh' },
            { name: 'Russian volume', price: '(3 D) 600 dh' },
            { name: 'Mega volume', price: '(4 D) 700 dh' }
          ]
        },
        {
          category: 'REMPLISSAGE',
          items: [
            { name: 'Eyelash filler', price: '(1 D) 300 dh' },
            { name: 'Before', price: '(2 D) 400 dh' }
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
            { name: '21 days max', price: '(3 D) 500 dh' },
            { name: '', price: '(4 D) 600 dh' }
          ]
        }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

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
  // Inject SeoService to set page meta for "Tous les tarifs"
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    const seo: SeoMeta = {
      title: 'Tous les tarifs - Russiaville Beauty',
      description: 'Tous nos tarifs détaillés pour ongles, cils et sourcils. Prestations professionnelles, hygiène et qualité garanties.',
      image: 'assets/images/brand.png',
      keywords: 'tarifs, ongles, cils, sourcils, Russiaville Beauty',
      canonical: '/tarifs/tous',
      ogType: 'website'
    };
    this.seoService.applySeo(seo);
  }


}
