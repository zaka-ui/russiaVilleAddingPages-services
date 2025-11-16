import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { AccordionDataType } from '../../../../components/see-more/see-more.component';
import { ContentSectionData } from '../../../../components/content-section/content-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-extensions-cil-acil',
  templateUrl: './extensions-cil-acil.component.html',
  styleUrl: './extensions-cil-acil.component.css'
})
export class ExtensionsCilAcilComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Extensions cil à cil Marrakech : la pose 1D pour un regard naturel et soigné',
      subtitle: '',
      description: `
                       Beaucoup de clientes à Marrakech cherchent un style naturel, propre et léger. Elles veulent des extensions de cils qui se remarquent sans être trop visibles. C’est pour ça que la pose cil à cil (1D) est l’une des plus demandées à Russiaville Beauty.
                      Cette technique donne un résultat fin, élégant et durable, même avec la chaleur et l’humidité de Marrakech.
                      Les clientes nous disent souvent :
                      “Je veux un résultat naturel, pas un effet dramatique.”
                      “J’ai peur que ça soit trop lourd.”
                      “Je veux me réveiller avec un regard frais.”
                      La pose 1D est faite pour ce besoin. Elle respecte vos cils naturels et crée un regard propre dès le matin.
                        `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    }
  ];

  slideImage: string = 'assets/images/sourcils/1.png';
  slideImageAlt: string = 'Extensions cil à cil Marrakech : la pose 1D pour un regard naturel et soigné';

  /****  Lopp Section ***/
  items: string[] = ["Pose 1D pour un regard naturel et soigné"]

  // Section 3 service with accordionds
  servicesAbout: ServiceAbout | any = {
    id: 'nails',
    subtitle: '',
    title: 'Comment se déroule la prestation',
    description: `Chaque séance commence par un échange simple pour comprendre votre style. On observe ensuite vos cils naturels, votre courbure, leur force et la forme de vos yeux.
                    L’objectif est de créer un rendu naturel qui s’adapte parfaitement à votre visage.`,
    features: [
      {
        title: "1. Préparation des cils",
        points: [
          "On nettoie et dégraisse doucement pour que la colle tienne malgré la chaleur.",
        ],
        smallDesc: ""
      },
      {
        title: "2. Choix du style",
        points: [
          " Longueur, épaisseur et courbure adaptées à votre regard.",
          " Pour du très naturel : C, D légers.",
          " Pour un effet plus ouvert : courbure plus marquée.",
        ],
        smallDesc: ""
      },
      {
        title: "3. Pose cil à cil",
        points: [
          "Une extension fine est posée sur chaque cil naturel.",
          "Aucune surcharge, aucune colle excessive.",
        ],
        smallDesc: ""
      },
      {
        title: "4. Séchage contrôlé",
        points: [
          "Aucune surcharge, aucune colle excessive.",
        ],
        smallDesc: ""
      },
      {
        title: "5. Brossage et conseils",
        points: [
          "On vérifie le confort, la légèreté et l’harmonie du résultat.",
        ],
        smallDesc: ""
      },
    ],
    image: 'assets/images/sourcils/5.png',
    imageAlt: 'Nails Service',
    imagePosition: 'left',
    conseil: ' Durée de la séance : Environ 1h15. Un effet naturel, doux, propre, parfait pour un look maquillé sans mascara.'
  }


  // secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages des extensions cil à cil 1D',
    text: `La plupart des clientes choisissent cette technique pour sa légèreté. Voici les principaux avantages :`,

    features: [
      {
        title: " Effet naturel et discret",
        points: [
          "On voit la différence, mais sans effet “volume russe”.",
        ],
        smallDesc: ""
      },
      {
        title: "Très confortable",
        points: [
          "La pose 1D est fine et légère.",
          "On oublie qu’on porte des extensions.",
        ],
        smallDesc: ""
      },
      {
        title: "Adapté au travail et au quotidien",
        points: [
          "On oublie qu’on porte des extensions.",
        ],
        smallDesc: ""
      },
      {
        title: "Respecte les cils naturels",
        points: [
          "Aucune surcharge.",
          "Parfait si vos cils sont fins ou fragiles",
        ],
        smallDesc: ""
      },
      {
        title: "Très pratique pour les voyages et la chaleur",
        points: [
          "Parfait si vos cils sont fins ou fragiles",
        ],
        smallDesc: ""
      },
      {
        title: "Entretien simple",
        points: [
          "Un brossage matin/soir et une retouche toutes les 2–3 semaines suffisent.",
        ],
        smallDesc: ""
      },
    ],
    image: 'assets/images/sourcils/5.jpg',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right',
    conseil: 'C’est aussi la prestation préférée des touristes qui veulent un regard net sans maquillage pendant tout leur séjour.'
  };


  faqData: ServiceAbout | any = {
    id: 'nails',
    subtitle: '',
    title: 'Questions fréquentes',
    description: ``,
    features: [
      {
        title: "Est-ce que la pose tombe vite à cause de la chaleur ?",
        points: [
          "Non. On adapte la colle à la saison. La tenue reste stable même en période chaude.",
        ],
        smallDesc: ""
      },
      {
        title: "La pose cil à cil abîme-t-elle les cils naturels ?",
        points: [
          " Non, si la technique est bien faite. Chez Russiaville Beauty, on évite les épaisseurs trop lourdes.",
        ],
        smallDesc: ""
      },
      {
        title: "Combien de temps ça dure ?",
        points: [
          "Entre 3 et 5 semaines selon votre routine.",
        ],
        smallDesc: ""
      },
      {
        title: "Est-ce que je peux me maquiller ?",
        points: [
          "Oui, mais éviter les produits gras qui réduisent la tenue.",
        ],
        smallDesc: ""
      },
      {
        title: "Puis-je aller à la piscine ou au hammam ?",
        points: [
          "Oui, après 24h. Le hammam fréquent peut réduire légèrement la tenue, mais on adapte la pose.",
        ],
        smallDesc: ""
      },
      {
        title: "Quel style choisir ?",
        points: [
          "votre courbure naturelle",
          "la force de vos cils",
          "l’effet recherché",
          "votre mode de vie (sport, soirées, travail)",
        ],
        smallDesc: ""
      },
    ],
    image: 'assets/images/sourcils/5.png',
    imageAlt: 'Nails Service',
    imagePosition: 'left',
    conseil: ''
  }

  /* Section 6
    highlightDataDepose: any = {
      subtitle: '',
      title: 'Dépose ongles Marrakech',
      text: `La dépose doit être douce pour ne pas abîmer l’ongle naturel.
            Beaucoup de clientes viennent avec des ongles fragilisés à cause de dépôts mal faits ailleurs.`,
  
      features: [
        'Limage léger',
        'Produit adapté',
        'Aucune traction',
        'Nettoyage précis',
        'Hydratation de l’ongle naturel',
      ],
      textSecond : "Quand faire une dépose ?",
      featuresSecond : [
        'Gel trop épais',
        'Gel qui se soulève',
        'Besoin de repartir sur une base saine',
        'Envie de faire une pause',
      ],
      image: 'assets/images/gallery/15.png',
      imageAlt: 'soin beauté ongles cils sourcils',
      imagePosition: 'right',
      conseil : 'Ne jamais tirer sur le gel à la maison. Cela abîme fortement la plaque de l’ongle.'
    };
  */

  // Section 7
  servicesDepose: any[] = [
    {
      id: 'nails',
      subtitle: '',
      title: 'Pourquoi choisir notre salon',
      description: `À Russiaville Beauty, on privilégie la qualité du résultat et la protection de vos cils naturels.
                    Pas de surcharge. Pas d’extensions trop longues. Pas de colle en excès.`,
      features: [
        'pose précise',
        'produits adaptés au climat de Marrakech',
        'hygiène parfaite',
        'style naturel garanti',
        'confort assuré',
        'conseils personnalisés',
        'ambiance calme et moderne',
      ],
      image: 'assets/images/sourcils/4.png',
      imageAlt: 'Dépose ongles Marrakech',
      imagePosition: 'left',
      conseil: `
                Nous corrigeons souvent des poses mal faites ailleurs : cils collés, longueur inadaptée, surcharge.
                Notre objectif est toujours de repartir sur une base saine.
              `
    },
  ];

  // Section 8

  locationSectionData: LocationDataType = {
    title: "Zones desservies à Marrakech",
    description: "Nos clientes viennent de :",
    locations: [
      { name: 'Guéliz', icon: '📍' },
      { name: 'Majorelle', icon: '📍' },
      { name: 'Hivernage', icon: '📍' },
      { name: 'Sidi Ghanem', icon: '📍' },
      { name: 'Route de Casa', icon: '📍' },
      { name: 'Centre-ville', icon: '📍' }
    ],

    descriptionThree: "Beaucoup choisissent la pose cil à cil 1D car elle reste élégante et discrète, parfaite pour un style urbain et moderne",
  }



  // Section Cta 
  ctaData: CtaBannerDataType = {
    description: "Si vous souhaitez un regard naturel avec des extensions cil à cil 1D à Marrakech, vous pouvez nous envoyer un message pour connaître les disponibilités ou poser vos questions.",
    buttonText: "Envoyer un message pour les disponibilités",
    buttonLink: "https://dikidi.net/1891924?p=0.pi",
  }
}






/**  Section 3 start
data: ContentSectionData = {
  title: "Brow lamination Marrakech",
  description: "Le brow lamination est devenu l’une des demandes les plus fréquentes à Marrakech. Beaucoup de clientes ont des sourcils qui tombent, s’éparpillent ou ne gardent pas leur forme, surtout en été. La lamination vient résoudre tout ça.",
  buttonText: "Réserver",
  buttonLink: "Réserver",
  leftImage: {
    id: "1",
    src: "assets/images/sourcils/2.png",
    alt: "Extensions cil à cil Marrakech 2d"
  },
  rightImage: {
    id: "2",
    src: "assets/images/sourcils/3.png",
    alt: "Extensions cil à cil Marrakech 4d"
  },
  embeddedImage: {
    id: "3",
    src: "assets/images/sourcils/3.jpg",
    alt: "Extensions cil à cil Marrakech 3d"
  }

}
accordionData: AccordionDataType = [
  {
    title: 'Ce que fait le brow lamination',
    points: [
      'Redresser les poils',
      'Harmoniser la ligne',
      'Donner un effet lifté',
      'Masquer les zones clairsemées',
      'Rendre les sourcils plus denses',
      'La tenue varie entre 6 et 8 semaines, même pendant les journées chaudes de Marrakech.'
    ]
  },
  {
    title: 'Pour qui ?',
    points: [
      'Sourcils qui manquent de structure',
      'Poils qui descendent',
      'Sourcils indisciplinés',
      'femmes qui veulent un résultat durable',
      'Clientes qui ne veulent pas maquiller tous les jours'
    ]
  },
  {
    title: 'Conseils après la séance',
    points: [
      'Garder au sec pendant 24 heures',
      'Brosser légèrement le matin',
      'Utiliser une huile nourrissante légère',
    ]
  }
];
*/