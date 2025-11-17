import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-extension-volume-three-d',
  templateUrl: './extension-volume-three-d.component.html',
  styleUrl: './extension-volume-three-d.component.css',
})





export class ExtensionVolumeThreeDComponent {
  /** carousel content */
  slides: Array<any> = [
    {
      title:
        'Extensions de cils volume Marrakech: la pose 3D pour un regard intense et élégant',
      subtitle: '',
      description: `Les extensions de cils volume Marrakech (3D) offrent un volume plus intense que le 2D, sans aller jusqu’au méga volume. 
                    Le 3D — ou volume russe — crée un regard profond, homogène et élégant, 
                    idéal pour celles qui veulent un effet marqué mais léger, confortable même sous la chaleur. 
                    Parfait pour un style glamour mais équilibré, photogénique sans maquillage.
                  `,
      buttonText: 'Réserver',
      buttonLink: '/1891924?p=0.pi',
    },
  ];

  slideImage: string =
    'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
  slideImageAlt: string =
    'Extensions de cils volume Marrakech 3D';

  /****  Lopp Section ***/
  items: string[] = ['Extensions de cils volume 3D'];

  // Section 3 service with accordionds
  servicesAbout: ServiceAbout | any = {
    id: 'nails',
    subtitle: '',
    title: 'Comment se déroule la prestation',
    description: `La pose 3D demande une grande précision. Chaque bouquet doit être léger,
                  fin et parfaitement réparti pour ne pas abîmer les cils naturels.`,
    features: [
      {
        title: '1. Analyse du regard et des cils. On observe :',
        points: [
          'La force des cils',
          'La courbure naturelle',
          'La forme des yeux',
          'Votre style recherché'


        ],
        smallDesc: '',
      },
      {
        title: '2. Préparation des cils',
        points: [
          'Nettoyage complet pour une tenue stable malgré l’humidité.',
        ],
        smallDesc: '',
      },
      {
        title: '3.Création des bouquets 3D',
        points: ['On fabrique manuellement des bouquets de trois extensions ultra fines.'],
        smallDesc: '',
      },
      {
        title: '4. Application précise',
        points: [
          'Un bouquet 3D est posé sur chaque cil naturel, sans surcharge.',
        ],
        smallDesc: '',
      },
      {
        title: '5. Séchage adapté au climat',
        points: [
          'On utilise une colle réglée pour les températures de Marrakech, surtout en été.',
        ],
        smallDesc: '',
      },
      {
        title: '6. Vérification du confort',
        points: [
          ' Chaque cil est isolé pour garantir un résultat propre et confortable.',
        ],
        smallDesc: '',
      },
    ],
    image: 'assets/images/extension_de_cils/extension1d.png',
    imageAlt: 'Extensions volume naturel Marrakech',
    imagePosition: 'left',
    conseil:
      'Durée de la séance : Environ 1h45 à 2h selon la densité. Un regard profond, fourni, mais toujours élégant.',
  };

  // secction 4
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Avantages des extensions volume russe 3D',
    text: `Le 3D est l’un des styles les plus populaires à Marrakech, car il apporte de l’intensité tout en restant chic.`,

    features: [
      {
        title: 'Rendu dense mais harmonieux',
        points: ['Beaucoup plus fourni que le 1D ou 2D, sans effet “trop lourd”.'],
        smallDesc: '',
      },
      {
        title: 'Parfait pour les photos',
        points: ['Idéal pour les mariages, soirées, shootings ou vacances.'],
        smallDesc: '',
      },
      {
        title: 'Effet maquillé sans maquillage',
        points: ['Vous pouvez sortir sans eyeliner ni mascara.'],
        smallDesc: '',
      },
      {
        title: 'Très bonne tenue à Marrakech',
        points: ['Grâce à une colle adaptée au climat.'],
        smallDesc: '',
      },
      {
        title: 'Convient aux cils normaux ou forts',
        points: ['Le poids reste léger même avec 3 extensions par cil.'],
        smallDesc: '',
      },
      {
        title: 'Comble les zones vides',
        points: ['Le 3D unifie très bien la ligne de cils.'],
        smallDesc: '',
      },
      
    ],
    image: 'assets/images/sourcils/5.jpg',
    imageAlt: 'Extensions de cils volume 3D',
    imagePosition: 'right',
    conseil: '',
  };

  faqData: ServiceAbout | any = {
    id: 'Extension de cils 3d',
    subtitle: '',
    title: 'Questions fréquentes',
    description: ``,
    features: [
      {
        title: 'Le 3D est-il lourd ?',
        points: [
          'Non, car les extensions sont ultra fines. C’est même plus léger qu’une pose classique mal réalisée.',
        ],
        smallDesc: '',
      },
      {
        title: 'Combien de temps ça tient ?',
        points: [
          'Entre 3 et 5 semaines, selon votre routine.',
        ],
        smallDesc: '',
      },
      {
        title: 'Pourquoi choisir 3D plutôt que 4D ?',
        points: [
          'Le 3D est plus naturel, plus soft et parfait pour commencer le volume.',
        ],
        smallDesc: '',
      },
      {
        title: 'Est-ce que ça tombe vite avec la chaleur ?',
        points: ['Non. On utilise une colle adaptée au climat chaud de Marrakech.'],
        smallDesc: '',
      },
      {
        title: 'Dois-je faire un remplissage ?',
        points: ['Oui, toutes les 2–3 semaines pour garder un volume propre.'],
        smallDesc: '',
      },
    ],
    image: 'assets/images/sourcils/5.png',
    imageAlt: 'Extensions volume naturel 2D',
    imagePosition: 'left',
    conseil: '',
  };

  // Section 7
  servicesDepose: any[] = [
    {
      id: 'extension3d',
      subtitle: '',
      title: 'Pourquoi choisir notre pose Volume russe à Marrakech',
      description: `Russiaville Beauty est spécialisé dans les poses techniques et harmonieuses.
                    Le volume russe demande une vraie maîtrise. Ce qui nous distingue`,
      features: [
        'Bouquets 3D légers et réguliers',
        'Séparation précise',
        'Zéro surcharge',
        'Résultats élégants',
        'Colle adaptée au climat',
        'Hygiène impeccable',
        'Conseils adaptés à votre regard',
        'Protection de vos cils naturels',
      ],
      image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
      imageAlt: 'Extensions 2D à Marrakech - Russiaville beauty',
      imagePosition: 'left',
      conseil: `
                  Nous corrigeons souvent des poses mal faites :
                  bouquets lourds, cils collés, longueurs inadaptées, volumes trop chargés.
                `,
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
    descriptionTwo : "Le volume russe 3D est très apprécié pour :",
          points : [
            { name: 'Les soirées', icon: '✦' },
            { name: 'Les événements', icon: '✦' },
            { name: 'Les sorties dans l’Hivernage', icon: '✦' },
            { name: 'Les mariages et anniversaires', icon: '✦' },
          ],
  };

  // Section Cta
  ctaData: CtaBannerDataType = {
    description: `
              Si vous souhaitez un regard intense et élégant, les extensions de cils volume russe 3D à Marrakech sont une excellente option.
          Vous pouvez nous écrire pour connaître les disponibilités ou poser vos questions.
        `,
    buttonText: 'Envoyer un message pour les disponibilités',
    buttonLink: 'https://dikidi.net/1891924?p=0.pi',
  };
}
