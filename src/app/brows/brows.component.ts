import { Component, OnInit } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-brows',
  templateUrl: './brows.component.html',
  styleUrls: ['./brows.component.css']
})
export class BrowsComponent implements OnInit {
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

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    const seo: SeoMeta = {
      title: 'Tarif des Sourcils - Russiaville Beauty',
      description: 'Consultez nos tarifs pour les sourcils : épilation, restructuration, coloration et lamination. Résultat naturel et précis.',
      image: 'assets/images/s_brows.png',
      keywords: 'tarifs sourcils, restructuration sourcils, microblading, Russiaville Beauty',
      canonical: '/tarifs/sourcils',
      ogType: 'article'
    };
    this.seoService.applySeo(seo);
  }

}
