import { Component } from '@angular/core';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-depose-ongles',
  templateUrl: './depose-ongles.component.html',
  styleUrl: './depose-ongles.component.css',
})




export class DeposeOnglesComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Dépose ongles Marrakech',
      subtitle: '',
      description: `
                   Beaucoup de clientes viennent avec des poses trop épaisses, mal retirées ou douloureuses. 
                   Une dépose d’ongles à Marrakech doit être douce, rapide et sans abîmer l’ongle naturel.
                  `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string =
    'assets/images/gallery/img_09.jpg';
  slideImageAlt: string = 'Dépose ongles Marrakech';

  /****  Lopp Section ***/
  items: string[] = ['Dépose maîtrisée et délicate'];

  // Section 3 service with accordionds
  servicesAbout: ServiceAbout | any = {
    id: 'Dépose ongles Marrakech',
    subtitle: '',
    title: 'Comment se déroule la prestation',
    features: [
      {
        title: '1. Limage léger de la surface',
        points: [
          'On retire simplement la couche brillante pour permettre au produit de dépose d’agir efficacement, sans affiner l’ongle.',
        ],
        smallDesc: '',
      },
      {
        title: '2. Produit adapté',
        points: [
          'Un dissolvant professionnel est appliqué pour ramollir le gel ou le semi-permanent sans agresser l’ongle naturel.',
        ],
        smallDesc: '',
      },
      {
        title: '3.  Retrait en douceur sans forcer',
        points: [
          'Les résidus se détachent délicatement, sans gratter ni tirer, afin de préserver l’intégrité de l’ongle.',
        ],
        smallDesc: '',
      },
      {
        title: '4. Nettoyage des cuticules',
        points: [
          'Les cuticules sont nettoyées et harmonisées pour une finition propre et soignée.',
        ],
        smallDesc: '',
      },
      {
        title: '5. Soin hydratant et protecteur',
        points: [
          'Une huile nourrissante est appliquée pour renforcer, hydrater et protéger l’ongle après la dépose.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/gallery/img_01.jpg',
    imageAlt: 'Service de dépose d\'ongles Marrakech',
    imagePosition: 'left',
    conseil:
      'Nous respectons l’ongle et évitons toute traction.',
  };

  // Avantage secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages :',
    features: [
      {
        title: 'Aucune douleur',
        points: [
          'La dépose est réalisée avec une technique douce, sans tiraillements ni sensations inconfortables.',
        ],
        smallDesc: '',
      },
      {
        title: 'Ongles naturels non abîmés',
        points: [
          'Le retrait se fait sans gratter ni limer excessivement, pour préserver la santé et la solidité de l’ongle.',
        ],
        smallDesc: '',
      },
      {
        title: 'Préparation parfaite pour une nouvelle pose',
        points: [
          'Les ongles sont laissés propres, nets et prêts à accueillir un nouveau semi-permanent ou une extension en gel.',
        ],
        smallDesc: '',
      },
      {
        title:
          'Soin inclus',
        points: [
          'Un soin hydratant est appliqué pour nourrir et protéger l’ongle après la dépose.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/instagramImages/tools.jpg',
    imageAlt: "Avantages d'extension ongles gel Marrakech",
    imagePosition: 'right',
    conseil: '',
  };

  faqData: ServiceAbout | any = {
    id: 'Extension ongles gel Marrakech',
    subtitle: '',
    title: 'Questions fréquentes',
    description: ``,
    features: [
      {
        title: 'Est-ce que je peux enlever moi-même ?',
        points: ['Non, vous risquez d’arracher des couches de l’ongle.'],
        smallDesc: '',
      },
      {
        title: 'Est-ce long ?',
        points: [' Environ 15 à 20 minutes.'],
        smallDesc: '',
      }

    ],
    image: 'assets/images/gallery/16.png',
    imageAlt: 'Dépose d\'ongles Marrakech faq',
    imagePosition: 'left',
    conseil: '',
  };

  // Section 7
  servicesDepose: any[] = [
    {
      id: 'Épilation sourcils',
      subtitle: '',
      title: 'Pourquoi notre salon',
      features: [
        'Dépose professionnelle douce',
        'Produits sans acétone agressive',
        'Soins fortifiants inclus',
      ],
      image: 'assets/images/gallery/8.png',
      imageAlt: 'Salon Russiaville beauty marrakech',
      imagePosition: 'right',
    },
  ];

  // Section 8
  locationSectionData: LocationDataType = {
    title: 'Zones desservies à Marrakech',
    description: 'Nos clientes viennent de :',
    locations: [
      { name: 'Guéliz', icon: '📍' },
      { name: 'Majorelle', icon: '📍' },
      { name: 'Hivernage', icon: '📍' },
      { name: 'Sidi Ghanem', icon: '📍' },
      { name: 'Route de Casa', icon: '📍' },
      { name: 'Centre-ville', icon: '📍' },
    ],
  };

  // Section Cta
  ctaData: CtaBannerDataType = {
    description: `Envie d’une dépose douce et propre ? Vous pouvez réserver votre créneau.`,
    buttonText: 'Envoyer un message pour les disponibilités',
    buttonLink: 'https://dikidi.net/1891924?p=0.pi',
  };




  constructor(private seoService: SeoService) { } // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('serviceDeposeOngles');
    this.seoService.applySeo(seo);
  }

}
