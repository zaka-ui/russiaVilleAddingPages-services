import { Component } from '@angular/core';
import { ContentSectionData } from '../../../components/content-section/content-section.component';




@Component({
  selector: 'app-extensions-de-cils',
  templateUrl: './extensions-de-cils.component.html',
  styleUrl: './extensions-de-cils.component.css',
})








export class ExtensionsDeCilsComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title: 'Extensions de cils Marrakech : des styles adaptés à chaque regard',
      subtitle: '',
      description: 'Beaucoup de clientes de Guéliz et Majorelle nous disent qu’elles cherchent des extensions de cils à Marrakech qui tiennent malgré la chaleur, l’humidité et les journées longues. C’est un vrai sujet ici : beaucoup de poses tombent vite, les cils se collent, ou le style ne correspond pas au visage.Chez Russiaville Beauty, on prend le temps d’observer votre forme d’œil, votre courbe naturelle et votre routine avant de choisir la technique. Notre objectif est simple : un résultat harmonieux, léger, durable et confortable, même en été. Les clientes viennent souvent avec des questions : “Quelle technique me va le mieux ?” “Est-ce que ça tient avec le sport ?” “Dois-je faire un remplissage souvent ?” “Est-ce que la chaleur de Marrakech abîme les extensions ?” Ici, vous trouverez des réponses claires et les différentes prestations possibles. Toutes les poses sont adaptées à la vie quotidienne à Marrakech, que vous habitiez Guéliz, Hivernage, Sidi Ghanem ou que vous soyez de passage.',
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    }
  ];

  slideImage : string = 'assets/images/cils_image.png';
  slideImageAlt : string = 'Extensions cil à cil Marrakech';

  /****  Lopp Section ***/
  items : string [] = ["Extensions volume naturel Marrakech"]

  /** second section start */
  data : ContentSectionData= {
    title : "Extensions cil à cil Marrakech",
    description : "Beaucoup de clientes choisissent la pose cil à cil pour un rendu naturel. Une extension est posée sur un cil, sans alourdir le regard. C’est l’option idéale si vous souhaitez améliorer votre ligne de cils sans effet chargé. Cette technique convient à : celles qui veulent un look simple et propre ,les femmes qui travaillent en centre-ville,les clientes qui préfèrent un style discret,les personnes qui font peu de maquillage.Avec le cil à cil, le résultat reste naturel même après plusieurs jours de chaleur. C’est parfait pour les clientes de Guéliz ou Majorelle qui ont une routine active. Nous choisissons la longueur, la courbure et l’épaisseur en fonction de vos cils pour éviter la casse ou la perte rapide. Conseil : éviter les produits gras la première semaine. Les extensions resteront plus légères et plus stables.",
    buttonText : "Réserver",
    buttonLink : "Réserver",
    leftImage : {
      id : "1",
      src: "/assets/images/extension_de_cils/extension2d.jpg",
      alt:"Extensions cil à cil Marrakech 2d"
    },
      rightImage : {
      id : "2",
      src: "assets/images/extension_de_cils/4d.webp",
      alt: "Extensions cil à cil Marrakech 4d"
    },
    embeddedImage : {
      id : "3",
      src: "assets/images/extension_de_cils/3d.jpg",
      alt: "Extensions cil à cil Marrakech 3d"
    }

  }


  /****************** Third section */
   // About intro data
  aboutIntroData: any = {
    subtitle: 'Extensions volume naturel',
    description: 'La pose volume naturel (2D) est pensée pour donner un résultat un peu plus dense tout en restant soft. Deux extensions fines sont posées sur un cil naturel. C’est très demandé par les clientes qui veulent un style propre sans aller vers un regard trop marqué. Cette technique est idéale pour :'
  };

  // Services boxes data
  servicesBoxesData: any = {
    services: [
      {
        id: 'nails-box',
        icon: 'flaticon-tweezers',
        title: 'Cil à cil',
        description: 'Idéal pour combler les zones clairsemées et garder un rendu naturel.'
      },
      {
        id: 'lashes-box',
        icon: 'flaticon-eyelashes',
        title: 'Volume naturel',
        description: 'Apporte plus de profondeur au regard sans effet chargé.'
      },
      {
        id: 'brows-box',
        icon: 'flaticon-eyebrow',
        title: 'Volume russe',
        description: 'Parfait pour celles qui veulent un effet maquillé sans utiliser de mascara.'
      }
    ],
    blockInfo: 'Beaucoup de clientes de l’Hivernage choisissent ce style car il reste joli en soirée tout en restant discret en journée.',
    Astuce : 'Astuce : brosser doucement matin et soir pour garder les bouquets alignés.'
  };



  // Section 4
   servicesAbout: any[] = [
    {
      id: 'nails',
      subtitle: 'Beauté des ongles',
      title: 'Extensions volume',
      description: 'Ici, on passe au volume 3D, souvent appelé volume russe. Cette technique crée un regard plus intense, parfait pour celles qui veulent un résultat visible mais maîtrisé. Elle convient très bien :',
      features: [
        'Aux événements',
        'Aux clientes qui sortent souvent',
        'Aux photos (mariages, fêtes, anniversaires…)',
        'À celles qui veulent éviter d’utiliser du maquillage',
      ],
      image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
      imageAlt: 'Nails Service',
      imagePosition: 'left',
      conseil : 'Le 3D donne un effet fourni sans être trop lourd. La tenue est excellente, même pendant les semaines chaudes de Marrakech. Ce style est très populaire auprès des clientes qui visitent souvent les zones touristiques comme Majorelle ou l’Hivernage. Conseil : prévoir un remplissage toutes les 2 à 3 semaines pour garder un volume équilibré.' 
    },
    
  ];

  // secction 5
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Extensions mega volume',
    text: `Le méga volume (4D) est la technique la plus intense. Les bouquets utilisés sont plus denses, mais restent légers car les extensions sont très fines.
          Le résultat est profond, noir, défini. Beaucoup de clientes choisissent cette pose lorsqu’elles veulent un regard glamour ou qu’elles ont un événement important.
          Convient aux clientes qui : `,

    features: [
      'Aiment les styles très travaillés',
      'Veulent un effet maquillé permanent',
      'Ont des cils assez forts',
      'Veulent un rendu dramatique',
    ],
    image: 'assets/images/extension_de_cils/Extensions_mega.png',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right',
    Astuce : 'éviter de dormir face contre l’oreiller pour garder la forme des bouquets.'
  };


  // Section 6
    highlightDataDepose: any = {
    subtitle: '',
    title: 'Dépose extensions cils',
    text: `Il arrive que des clientes viennent avec des poses faites ailleurs et souhaitent tout enlever avant de repartir sur une base saine. La dépose permet de retirer les extensions sans abîmer les cils naturels. Notre méthode : `,

    features: [
      'Aiment les styles très travaillés',
      'Veulent un effet maquillé permanent',
      'Ont des cils assez forts',
      'Veulent un rendu dramatique',
    ],
    textSecond : "La dépose est recommandée si :",
    featuresSecond : [
      'La pose précédente était lourde',
      'Les cils sont collés entre eux',
      'Vous voulez repartir sur un style différent',
      'vous faites une pause'

    ],
    image: 'assets/images/img-55.png',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right',
    conseil : 'éviter de dormir face contre l’oreiller pour garder la forme des bouquets.'
  };

  // Section 7
    highlightDataLamination: any = {
    subtitle: '',
    title: 'Lamination cils',
    text: `Le lash lift / lamination est parfait pour celles qui veulent un effet recourbé et naturel sans extensions.
            La prestation est très demandée par les clientes actives ou les touristes, car l’entretien est simple.
            Le résultat :
            `,

    features: [
      'cils recourbés',
      'effet ouvert',
      'tenue longue (6 à 8 semaines)',
      'aucune extension',
    ],
    textSecond : "La dépose est recommandée si :La lamination est idéale si :",
    featuresSecond : [
      'vous avez les cils droits',
      'vous cherchez un effet naturel',
      'vous transpirez beaucoup',
      'vous nagez souvent ou vivez près du centre de Marrakech où il fait chaud'

    ],
    image: 'assets/images/extension_de_cils/lamination.avif',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right',
    conseil : 'Conseil : garder les cils au sec pendant 24 heures après la séance.'
  };




}

