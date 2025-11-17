import { Component } from '@angular/core';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

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
                  Beaucoup de clientes de Guéliz, Majorelle et Hivernage viennent nous voir parce qu’elles veulent des sourcils disciplinés, qui tiennent toute la journée malgré la chaleur de Marrakech. Le brow lamination Marrakech aide à redresser les poils, remplir les zones clairsemées et structurer le regard sans maquillage.
                  `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string =
    'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
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
    image: 'assets/images/extension_de_cils/extension1d.png',
    imageAlt: 'Manucure semi-permanente Marrakech',
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
        title: 'Résultat solide et élégant',
        points: [
          'Les extensions en gel offrent une structure résistante tout en gardant une apparence fine et raffinée.',
        ],
        smallDesc: '',
      },
      {
        title: 'Idéal pour les ongles cassants ou courts',
        points: [
          'Le gel renforce les ongles fragiles et permet d’obtenir immédiatement la longueur que vous souhaitez.',
        ],
        smallDesc: '',
      },
      {
        title: 'Longue tenue malgré la chaleur',
        points: [
          'Même avec la chaleur de Marrakech, le gel reste stable, sans fissures ni décollement.',
        ],
        smallDesc: '',
      },
      {
        title:
          'Toutes les formes possibles : carré, amande, coffin, long ou court',
        points: [
          'La technique permet de créer exactement la forme et la longueur que vous aimez, avec une grande précision.',
        ],
        smallDesc: '',
      },
      {
        title: 'Compatible avec le nail art Marrakech',
        points: [
          'Strass, motifs, dessin fin ou effet naturel : les extensions en gel accueillent parfaitement toutes les créations artistiques.',
        ],
        smallDesc: '',
      },
    ],
    image: 'assets/images/sourcils/5.jpg',
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
        title: '“Ça tient combien de temps ?”',
        points: ['3 à 4 semaines selon la repousse.'],
        smallDesc: '',
      },
      {
        title: 'Est-ce que ça fait mal ?',
        points: ['Non, nous utilisons une technique douce sans chauffe.'],
        smallDesc: '',
      },
      {
        title: 'Je peux choisir la longueur ?',
        points: [' Oui, du naturel au long glamour.'],
        smallDesc: '',
      },
    ],
    image: 'assets/images/sourcils/5.png',
    imageAlt: 'Extension ongles gel Marrakech faq',
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
        'Gel professionnel haute qualité',
        'Formes nettes et symétriques',
        'Expertise en constructions fines',
        'Choix de designs modernes',
      ],
      image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
      imageAlt: 'Salon Russiaville beauty marrakech',
      imagePosition: 'left',
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
    description: `Écrivez-nous si vous souhaitez des extensions gel solides et élégantes à Marrakech.`,
    buttonText: 'Envoyer un message pour les disponibilités',
    buttonLink: 'https://dikidi.net/1891924?p=0.pi',
  };
}
