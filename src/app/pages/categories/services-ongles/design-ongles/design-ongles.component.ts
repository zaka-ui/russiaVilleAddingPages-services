import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-design-ongles',
  templateUrl: './design-ongles.component.html',
  styleUrl: './design-ongles.component.css'
})
export class DesignOnglesComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Nail art Marrakech',
      subtitle: '',
      description: `
                     De plus en plus de clientes veulent un style unique pour leurs ongles : minimaliste, glamour, artistique ou tendance Instagram. Le nail art Marrakech est parfait pour exprimer votre style pour une soirée, un mariage ou un shooting.
                    `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string =
    'assets/images/gallery/7.png';
  slideImageAlt: string = 'Nail art Marrakech';

  /****  Lopp Section ***/
  items: string[] = ['Minimaliste, glamour, artistique'];

  // Section 3 service with accordionds
  servicesAbout: ServiceAbout | any = {
    id: 'nail-art',
    subtitle: '',
    title: 'Comment se déroule la prestation',
    features: [
      {
        title: '1. Choix du design (photos, inspirations)',
        points: [
          'La séance débute par une discussion avec la cliente afin de définir le style souhaité. À partir de photos, d’inspirations ou même d’un événement particulier (mariage, soirée, vacances), la technicienne propose des idées adaptées à la forme de l’ongle, au carnation et à la personnalité. Cette étape permet de valider le design avant la création.',
        ],
        smallDesc: '',
      },
      {
        title: '2. Préparation de l’ongle',
        points: [
          ' Les ongles sont nettoyés, limés et mis en forme avec précision. Les cuticules sont traitées puis la surface est légèrement poncée pour favoriser une adhérence optimale. Une préparation soignée garantit une meilleure durabilité du nail art et un rendu parfaitement lisse',
        ],
        smallDesc: '',
      },
      {
        title: '3. Pose gel ou semi-permanent',
        points: [
          ' Selon le besoin (renforcement ou simple coloration), une base gel ou vernis semi-permanent est appliquée en fines couches. Le produit est catalysé sous lampe pour assurer une fixation durable, résistante et sans risque d’écaillage.',
        ],
        smallDesc: '',
      },
      {
        title: '4. Dessin à la main, stickers, chrome, paillettes, babyboomer, French',
        points: [
          'Vient ensuite la création artistique. Qu’il s’agisse d’un design à la main levée, d’une pose de stickers, d’un effet chrome, de paillettes, d’un babyboomer ou d’une French revisitée, chaque détail est réalisé avec soin. Cette étape demande technique et précision pour garantir un résultat esthétique et personnalisé.',
        ],
        smallDesc: '',
      },
      {
        title: '5. Finition brillante ou mate',
        points: [
          ' Pour terminer, une finition protectrice est appliquée : brillante pour un effet éclatant ou mate pour un rendu moderne et sophistiqué. Elle protège le nail art, augmente la tenue et ajoute la touche finale au travail. Un soin hydratant cuticules peut être ajouté pour sublimer les mains.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/gallery/6.png',
    imageAlt: 'Service de dépose d\'ongles Marrakech',
    imagePosition: 'left',
    conseil:
      'Chaque design est réalisé avec précision.',
  };

  // Avantage secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages :',
    features: [
      {
        title: 'Style unique',
        points: [
          ' Chaque design est créé sur mesure selon ton style et ta personnalité. Que tu recherches quelque chose de totalement original ou inspiré d’un visuel, notre technicienne adapte le rendu pour que le résultat soit vraiment unique.',
        ],
        smallDesc: '',
      },
      {
        title: 'Adapté à tous les looks',
        points: [
          'Que tu sois dans un style minimaliste, élégant, extravagant ou tendance, le nail art s’adapte à chaque morphologie d’ongle et à toutes les envies. Il complète parfaitement n’importe quelle tenue, du casual au plus chic.',
        ],
        smallDesc: '',
      },
      {
        title: 'Tenue longue',
        points: [
          ' Grâce à la qualité des produits utilisés et à notre technique maîtrisée, le résultat reste impeccable pendant plusieurs semaines sans ’écailler. Même avec le climat chaud de Marrakech ou une activité intense.',
        ],
        smallDesc: '',
      },
      {
        title:
          'Peut être discret ou très travaillé',
        points: [
          ' Tu peux opter pour un détail subtil qui apporte une touche raffinée ou au contraire choisir un design plus élaboré, sophistiqué et riche en effets (chrome, paillettes, babyboomer, dessins à la main, etc.).',
        ],
        smallDesc: '',
      },
      {
        title:
          'Parfait pour photos et événements',
        points: [
          'Le rendu est particulièrement photogénique, idéal pour les séances photo, les mariages, les voyages ou toute occasion spéciale. Il met ta main en valeur et ajoute une touche élégante sur les clichés.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/gallery/2.png',
    imageAlt: "Avantages de nail art",
    imagePosition: 'right',
    conseil: '',
  };

  faqData: ServiceAbout | any = {
    id: 'nail-art-avantage',
    subtitle: '',
    title: 'Questions fréquentes',
    description: ``,
    features: [
      {
        title: 'Est-ce que je peux apporter une photo ?',
        points: [' Oui, nous reproduisons ou adaptons le design'],
        smallDesc: '',
      },
      {
        title: 'Combien de temps ça prend ?',
        points: [' Selon le design : 20 à 60 minutes.'],
        smallDesc: '',
      }

    ],
    image: 'assets/images/gallery/5.png',
    imageAlt: 'Nail art faq',
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
        'Expertise en designs modernes',
        'Travail minutieux',
        'Couleurs et effets variés',
        'Rendu propre et professionnel',
      ],
      image: 'assets/images/gallery/20.png',
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
    const seo = this.seoService.getSeoForService('serviceNailArt');
    this.seoService.applySeo(seo);
  }
}
