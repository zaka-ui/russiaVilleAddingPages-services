import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { AccordionDataType } from '../../../../components/see-more/see-more.component';
import { ContentSectionData } from '../../../../components/content-section/content-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-extensions-cil-acil',
  templateUrl: './extensions-cil-acil.component.html',
  styleUrl: './extensions-cil-acil.component.css'
})
export class ExtensionsCilAcilComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Extensions cil à cil Marrakech – pose 1D naturelle',
      subtitle: '',
      description: `La pose cil à cil (1D) est la technique la plus demandée à Marrakech pour un rendu naturel et discret. Elle respecte la densité des cils, offre un résultat propre et léger, et reste stable même avec la chaleur ou l’humidité.
                    Beaucoup de clientes recherchent un style élégant qui ne soit pas trop visible. Elles veulent améliorer leur regard sans effet dramatique ni sensation de lourdeur.
                    Voici ce qu’elles nous disent souvent :
                    « Je veux un rendu naturel, pas trop chargé. »
                    « J’ai peur que ce soit trop lourd. »
                    « Je veux me réveiller avec un regard frais. »
                    La pose 1D répond précisément à ce besoin : elle apporte finesse, confort et fraîcheur dès le matin. `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    }
  ];

  slideImage: string = 'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
  slideImageAlt: string = 'Extensions cil à cil Marrakech : la pose 1D pour un regard naturel et soigné';

  /****  Lopp Section ***/
  items: string[] = ["Regard naturel et soigné"]

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
    image: 'assets/images/extension_de_cils/extension1d.png',
    imageAlt: 'Extensions cil à cil Marrakech',
    imagePosition: 'left',
    conseil: ' Durée de la séance : Environ 1h15. Un effet naturel, doux, propre, parfait pour un look maquillé sans mascara.'
  }


  // secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages des extensions 1D',
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


  // Section 7
  servicesDepose: any[] = [
    {
      id: 'extension de cils',
      subtitle: '',
      title: 'Pourquoi choisir Russiaville Beauty',
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
      image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
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


  constructor(private seoService: SeoService) { } // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('serviceExtensionCilACil');
    this.seoService.applySeo(seo);
  }

}




