import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-pedicure-gel',
  templateUrl: './pedicure-gel.component.html',
  styleUrl: './pedicure-gel.component.css'
})


export class PedicureGelComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Pédicure gel à Marrakech',
      subtitle: '',
      description: `
                       À Marrakech, la chaleur, les sandales et la marche rendent la pédicure gel très demandée. Beaucoup veulent une finition propre et brillante qui tient plusieurs semaines.
                      `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string =
    'assets/images/gallery/img_05.jpg';
  slideImageAlt: string = 'Pédicure gel Marrakech';

  /****  Lopp Section ***/
  items: string[] = ['Confort – Hygiène – Précision'];

  // Section 3 service with accordionds
  servicesAbout: ServiceAbout | any = {
    id: 'Pédicure-gel',
    subtitle: '',
    title: 'Comment se déroule la prestation',
    features: [
      {
        title: '1. Bain tiède relaxant',
        points: [
          `Cette première étape permet de préparer la peau et les ongles en douceur. Les mains ou les pieds sont plongés dans un bain tiède enrichi d’agents apaisants, favorisant la détente musculaire et l’assouplissement des cuticules. Cela stimule la circulation et crée une sensation de confort immédiat, idéale pour commencer le soin dans un moment de relaxation.`,
        ],
        smallDesc: '',
      },
      {
        title: '2. Retrait des peaux mortes',
        points: [
          'Une fois la peau assouplie, les peaux mortes sont retirées délicatement pour révéler une surface propre et lisse. Cette étape améliore la respiration de la peau, évite les irrégularités et favorise une meilleure tenue du gel. Elle est réalisée avec précision pour préserver le confort et éviter toute irritation.',
        ],
        smallDesc: '',
      },
      {
        title: '3.  Ponçage doux',
        points: [
          'Un ponçage léger est effectué afin d’uniformiser la surface de l’ongle. Cela permet d’éliminer les petites imperfections et d’optimiser l’adhérence du gel. Lissage sans agressivité, cette étape est réalisée avec du matériel adapté, garantissant un résultat propre tout en préservant la santé de l’ongle naturel.',
        ],
        smallDesc: '',
      },
      {
        title: '4. Mise en forme des ongles',
        points: [
          'Selon le style souhaité (carré, rond, amande, coffin…), l’ongle est soigneusement limé et ajusté. L’objectif est de créer une forme harmonieuse qui s’adapte à la morphologie du doigt et au rendu final recherché. Cette étape structure le résultat et prépare l’application du gel avec précision.',
        ],
        smallDesc: '',
      },
      {
        title: '5. Application du gel couleur',
        points: [
          'Le gel est appliqué en fines couches pour assurer une couvrance uniforme. Cette technique permet une finition nette, sans surépaisseur, et garantit une tenue optimale. La couleur est choisie selon les envies : naturelle, tendance ou effet french. Le durcissement est réalisé sous lampe pour un résultat parfaitement fixé.',
        ],
        smallDesc: '',
      },
      {
        title: '6. Finition brillante et durable',
        points: [
          'Enfin, une couche de finition est posée pour protéger la couleur, apporter brillance et prolonger la tenue. Résistante aux chocs et à la chaleur, elle offre un effet impeccable sur plusieurs semaines. La séance se termine par un léger soin hydratant afin de nourrir l’ongle et sublimer le rendu final.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/instagramImages/pedicure.jpg',
    imageAlt: 'Service de pédicure gel à Marrakech',
    imagePosition: 'left',

  };

  // Avantage secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages :',
    features: [
      {
        title: 'Tenue longue 4 à 6 semaines',
        points: [
          ' Le gel assure une tenue durable offrant un rendu impeccable pendant 4 à 6 semaines. Pratique et fiable, il évite les retouches fréquentes tout en préservant l’aspect esthétique du pied.',
        ],
        smallDesc: '',
      },
      {
        title: 'Pieds propres et nets',
        points: [
          'Le soin garantit des pieds visiblement soignés, hygiéniques et bien entretenus. Idéal pour se sentir confiante au quotidien ou lors d’occasions spéciales.',
        ],
        smallDesc: '',
      },
      {
        title: 'Couleur résistante à la chaleur',
        points: [
          'Formulé pour résister aux fortes températures du climat marrakchi, le gel conserve son éclat sans s’abîmer, même sous le soleil, à la plage ou en sandales.',
        ],
        smallDesc: '',
      },
      {
        title:
          'Idéale pour vacances, sorties, mariages',
        points: [
          ' Grâce à sa longue tenue et son élégance, la pédicure gel est parfaite pour les voyages, les événements ou toutes les occasions où l’on veut afficher des pieds impeccables.',
        ],
        smallDesc: '',
      },

    ],
    image: 'assets/images/instagramImages/tools.jpg',
    imageAlt: "Avantages de pédicure gel",
    imagePosition: 'right',
    conseil: '',
  };

  faqData: ServiceAbout | any = {
    id: 'Pédicure-gel-faq',
    subtitle: '',
    title: 'Questions fréquentes',
    description: ``,
    features: [
      {
        title: 'Est-ce que ça tient bien pour la plage ?',
        points: [' Oui, le gel résiste très bien à l’eau.'],
        smallDesc: '',
      },
      {
        title: 'Est-ce que c’est douloureux ?',
        points: [' Non, technique douce et relaxante.'],
        smallDesc: '',
      }

    ],
    image: 'assets/images/instagramImages/manicure.jpg',
    imageAlt: 'Pédicure gel à Marrakech faq',
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
        'Hygiène stricte',
        'Produits spécialisés pieds',
        'Couleurs modernes',
        'Finition nette et fine',
      ],
      image: 'assets/images/instagramImages/tools2.jpg',
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
    description: `Pour une pédicure gel propre et durable, écrivez-nous pour un rendez-vous.`,
    buttonText: 'Envoyer un message pour les disponibilités',
    buttonLink: 'https://dikidi.net/1891924?p=0.pi',
  };



  constructor(private seoService: SeoService) { } // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('servicePedicureGel');
    this.seoService.applySeo(seo);
  }
}
