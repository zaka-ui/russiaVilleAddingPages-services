import { Component } from '@angular/core';
import { ContentSectionData } from '../../../components/content-section/content-section.component';
import { AccordionDataType } from '../../../components/see-more/see-more.component';
import { HighlightsWithLocationComponent } from "../../../components/highlights-with-location/highlights-with-location.component";
import {CtaBannerDataType} from "../../../components/cta-banner/cta-banner.component";
import { SeoService } from '../../../seo.service';



@Component({
  selector: 'app-ongles',
  templateUrl: './ongles.component.html',
  styleUrl: './ongles.component.css',
})
export class OnglesComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title:
        'Ongles Marrakech : manucure gel, semi-permanent et designs durables',
      subtitle: '',
      description: `À Marrakech, les ongles sont souvent mis à rude épreuve : 
                    chaleur, activités, travail, soirées, voyages… Beaucoup de clientes nous disent que 
                    leur gel ne tient pas ou que le semi-permanent se décolle rapidement.
                    Chez Russiaville Beauty, on renforce l’ongle naturel, on choisit des produits adaptés et on ajuste la technique au climat local. Résultat : 
                    une tenue longue même en été, des ongles solides et un rendu soigné, quelle que soit votre activité.
                    Dans cette page, vous trouverez toutes nos prestations ongles à Marrakech, avec conseils simples et adaptés.
                      `,

      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string = 'assets/images/gallery/2.png';
  slideImageAlt: string = 'Ongles Marrakech';

  /****  Lopp Section ***/
  items: string[] = ['manucure gel, semi-permanent et designs durables'];

  /** second section start */
  data: ContentSectionData = {
    title: 'Manucure-gel-Marrakech',
    description:
      'La manucure gel est la prestation la plus demandée à Marrakech. Le gel offre une tenue longue, une brillance stable et une base solide pour les ongles fragiles. Beaucoup de clientes choisissent le gel avant un mariage, un voyage ou une période chargée.',
    buttonText: 'Réserver',
    buttonLink: 'Réserver',
    leftImage: {
      id: '1',
      src: 'assets/images/gallery/7.png',
      alt: 'Manucure gel',
    },
    rightImage: {
      id: '2',
      src: 'assets/images/gallery/4.png',
      alt: 'Manucure gel',
    },
    embeddedImage: {
      id: '3',
      src: 'assets/images/gallery/5.png',
      alt: 'Manucure gel',
    },
  };
  /****** accordion Data */
  accordionData: AccordionDataType = [
    {
      title: 'Pourquoi choisir le gel ?',
      points: [
        'tenue longue, même avec la chaleur',
        'renforcement de l’ongle naturel',
        'brillance durable',
        'correction des ongles mous ou cassants',
        'large choix de couleurs et de finitions',
      ],
    },
    {
      title: 'Pour qui ?',
      points: [
        'ongles cassants',
        'ongles qui se dédoublent',
        'clientes actives',
        'femmes qui veulent un résultat durable',
        'clientes qui préparent un événement (mariage, fête, voyage)',
      ],
    },
  ];

  // Section 4
  servicesAbout: any[] = [
    {
      id: 'nails',
      subtitle: 'Beauté des ongles',
      title: 'Manucure semi-permanente Marrakech',
      description:
        'Le semi-permanent est idéal pour celles qui veulent un rendu fin, léger et naturel. C’est un choix parfait si vous cherchez quelque chose de simple mais propre.',
      features: [
        'rendu fin, sans épaisseur',
        'tenue de 2 à 3 semaines',
        'séchage rapide',
        'parfait si vous changez souvent de couleur',
        'effet propre sans alourdir l’ongle',
      ],
      image: 'assets/images/gallery/10.png',
      imageAlt: 'ongles finition brillante gel',
      imagePosition: 'left',
      conseil:
        'Conseil : hydrater les cuticules, limer doucement entre les rendez-vous, éviter les produits trop gras',
    },
  ];

  // secction 5
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Extension ongles gel Marrakech',
    text: `L’extension gel permet d’allonger, remodeler ou corriger la forme des ongles.
            C’est l’option préférée des clientes qui veulent un résultat élégant pour les événements.`,

    features: [
      'Forme parfaite',
      'Longueur harmonieuse',
      'Solidité',
      'Correction des ongles courts',
      'Idéal pour babyboomer ou french',
    ],
    image: 'assets/images/gallery/12.png',
    imageAlt: 'soin des mains et des ongles Marrakech',
    imagePosition: 'right',
    conseil:
      'Conseil : Éviter les chocs directs pour ne pas affaiblir la construction.',
  };


  // Section 4
  servicesDepose: any[] = [
    {
      id: 'nails',
      subtitle: '',
      title: 'Dépose ongles Marrakech',
      description:
        'La dépose doit être douce pour ne pas abîmer l’ongle naturel. Beaucoup de clientes viennent avec des ongles fragilisés à cause de dépôts mal faits ailleurs. Notre approche:',
      features: [
        'Limage léger',
        'Produit adapté',
        'Aucune traction',
        'Nettoyage précis',
        'Hydratation de l’ongle naturel',
      ],
      image: 'assets/images/gallery/15.png',
      imageAlt: 'Dépose ongles Marrakech',
      imagePosition: 'left',
      conseil:
        'Conseil : Ne jamais tirer sur le gel à la maison. Cela abîme fortement la plaque de l’ongle.',
    },
  ];

  // Section 7
  highlightDataLamination: any = {
    subtitle: '',
    title: 'Nail art Marrakech / Design ongles Marrakech',
    text: `Le nail art permet d’exprimer son style : simple, coloré, minimaliste ou artistique.
            Chez Russiaville Beauty, on peut réaliser : `,

    features: [
      'Babyboomer',
      'French moderne',
      'Designs fins',
      'Strass',
      'Motifs',
      'Dégradés',
      'Paillettes',
      'Lignes graphiques',
    ],
    textSecond:
      'Le nail art est très demandé pour les fêtes, voyages, shootings ou soirées. Pour qui ?',
    featuresSecond: [
      'Clientes qui aiment les détails',
      'Futures mariées',
      'Clientes qui veulent un rendu unique',
      'Femmes qui aiment changer de style',
    ],
    image: 'assets/images/gallery/16.png',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right',
    conseil:
      'Conseil : Choisir un design adapté à votre longueur d’ongle pour un rendu harmonieux.',
  };

  // Section Cta
  ctaData: CtaBannerDataType = {
    subtitle: '',
    title: '',
    description:
      'Si vous cherchez une manucure propre, durable et adaptée au climat de Marrakech, vous pouvez nous écrire pour connaître les disponibilités ou poser vos questions.',
    buttonText: '',
    buttonLink: '',
  };



  constructor(private seoService: SeoService) {} // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('onglesPage');
    this.seoService.applySeo(seo);
  }
}
