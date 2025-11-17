import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-extension-volume-mega',
  templateUrl: './extension-volume-mega.component.html',
  styleUrl: './extension-volume-mega.component.css'
})




export class ExtensionVolumeMegaComponent {
    /** carousel content */
    slides: Array<any> = [
      {
        title:
          'Extensions de cils mega volume Marrakech : la pose 4D pour un regard profond et très fourni',
        subtitle: '',
        description: `Les extensions de cils mega volume Marrakech (4D) offrent un regard intense, profond et très visible, même sans maquillage. Cette technique crée un effet glamour et dramatique tout en restant élégante et confortable, idéale pour les soirées, les photos ou pour celles qui aiment un style très marqué. Le 4D utilise des bouquets ultra-fins qui apportent densité et impact sans alourdir les cils naturels.
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
    items: string[] = ['Extensions de cils  mega volume'];
  
    // Section 3 service with accordionds
    servicesAbout: ServiceAbout | any = {
      id: 'nails',
      subtitle: '',
      title: 'Comment se déroule la prestation',
      description: `La pose 4D est une technique avancée. Chaque bouquet est composé de quatre extensions ultra fines, fabriquées à la main pour garder un poids minimal.`,
      features: [
        {
          title: '1. Diagnostic du regard',
          points: [
            'On observe la force de vos cils naturels, la forme de vos yeux et l’effet recherché.',
          ],
          smallDesc: '',
        },
        {
          title: '2. Préparation des cils',
          points: [
            'Nettoyage complet pour une tenue optimale malgré l’humidité.',
          ],
          smallDesc: '',
        },
        {
          title: '3. Création des bouquets mega volume',
          points: [ 'Bouquets 4D fabriqués à la main.', 
                    'On utilise uniquement des extensions très fines pour éviter la surcharge.'
                  ],
          smallDesc: '',
        },
        {
          title: '4. Application précise',
          points: [
            'Chaque bouquet est posé sur un cil naturel sans toucher les autres cils.',
          ],
          smallDesc: '',
        },
        {
          title: '5. Séchage avec colle adaptée',
          points: [
            'Clé essentielle à Marrakech où la chaleur varie selon la saison.',
          ],
          smallDesc: '',
        },
        {
          title: '6. Vérification finale',
          points: [
            'On vérifie la symétrie, la densité et le confort général.',
          ],
          smallDesc: '',
        },
      ],
      image: 'assets/images/extension_de_cils/extension1d.png',
      imageAlt: 'Extensions volume naturel Marrakech',
      imagePosition: 'left',
      conseil:
        'Entre 2h et 2h15 selon l’intensité souhaitée. Un regard profond, ultra fourni, mais toujours léger et confortable.',
    };
  
    // secction 4
    highlightData: any = {
      subtitle: 'Sublimez votre beauté naturelle',
      title: 'Avantages des extensions mega volume 4D',
      text: `Le 4D est l’un des styles les plus appréciés par les clientes qui aiment un rendu visible et structuré.`,
  
      features: [
        {
          title: 'Rendu très fourni',
          points: ['Parfait si vous voulez un regard intense en permanence.'],
          smallDesc: '',
        },
        {
          title: 'Effet maquillé 24h/24',
          points: ['Idéal si vous ne voulez plus mettre de mascara.'],
          smallDesc: '',
        },
        {
          title: 'Léger malgré la densité',
          points: ['Les extensions sont ultra fines et ne pèsent pas.'],
          smallDesc: '',
        },
        {
          title: 'Parfait pour les photos',
          points: ['Le rendu est net, propre et photogénique.'],
          smallDesc: '',
        },
        {
          title: 'Très bonne tenue dans le climat de Marrakech',
          points: ['Grâce à une technique adaptée à la chaleur.'],
          smallDesc: '',
        },
        {
          title: 'Convient aux clientes habituées au volume',
          points: ['Si vous avez déjà testé le 3D, vous allez aimer le 4D.'],
          smallDesc: '',
        },
        {
          title: 'Comble les zones vides',
          points: ['Le mega volume crée une ligne homogène même si vos cils naturels sont irréguliers.'],
          smallDesc: '',
        },
        
        
      ],
      image: 'assets/images/sourcils/5.jpg',
      imageAlt: 'Extensions de cils volume 3D',
      imagePosition: 'right',
      conseil: '',
    };
  
    faqData: ServiceAbout | any = {
      id: 'Extension de cils 4d',
      subtitle: '',
      title: 'Questions fréquentes',
      description: ``,
      features: [
        {
          title: 'Le méga volume est-il lourd ?',
          points: [
            'Non. Les extensions utilisées sont ultra légères. Le poids est même parfois plus léger qu’un 3D mal réalisé.',
          ],
          smallDesc: '',
        },
        {
          title: 'Est-ce que ça abîme les cils ?',
          points: [
            'Non si la technique est bien faite. Chez Russiaville Beauty : bouquets fins, zéro surcharge.',
          ],
          smallDesc: '',
        },
        {
          title: 'Combien de temps ça tient ?',
          points: [
            'Entre 3 et 5 semaines selon votre routine.',
          ],
          smallDesc: '',
        },
        {
          title: 'Puis-je choisir un effet moins dramatique ?',
          points: ['Oui, on peut ajuster la densité même en 4D.'],
          smallDesc: '',
        },
        {
          title: 'Est-ce que ça convient aux cils fins ?',
          points: ['Parfois oui, mais cela dépend de votre base. On vérifie toujours avant.'],
          smallDesc: '',
        },
        {
          title: 'Puis-je aller à des soirées, hammam, piscine ?',
          points: ['Oui, après les 24 premières heures.'],
          smallDesc: '',
        },
      ],
      image: 'assets/images/sourcils/5.png',
      imageAlt: 'Extensions de cils mega volume 4d',
      imagePosition: 'left',
      conseil: '',
    };
  
    // Section 7
    servicesDepose: any[] = [
      {
        id: 'extension3d',
        subtitle: '',
        title: 'Pourquoi choisir notre pose Mega Volume 4D à Marrakech',
        description: `Russiaville Beauty est spécialisé dans les poses volumineuses mais légères.
                      Le mega volume demande une maîtrise parfaite des bouquets et du poids. Ce qui nous distingue :`,
        features: [
          'Bouquets 4D ultra fins',
          'Zéro surcharge',
          'Résultats intenses mais propres',
          'Colle adaptée à la chaleur',
          'Hygiène stricte',
          'Pose confortable',
          'Conseils personnalisés',
          'Lignes harmonieuses',
        ],
        image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
        imageAlt: 'Extensions de cils mega volume 4d',
        imagePosition: 'left',
        conseil: `
                  Nous corrigeons souvent des poses lourdes ou irrégulières réalisées ailleurs.
                  Notre priorité est toujours la santé de vos cils naturels.
                  
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
      descriptionTwo : "Le mega volume 4D est souvent choisi pour :",
            points : [
              { name: 'Les fêtes', icon: '✦' },
              { name: 'Les anniversaires', icon: '✦' },
              { name: 'Les mariages', icon: '✦' },
              { name: 'Les soirées dans l’Hivernage', icon: '✦' },
              { name: 'Les séances photo', icon: '✦' },
              { name: 'Les vacances', icon: '✦' },
            ],
    };
  
    // Section Cta
    ctaData: CtaBannerDataType = {
      description: `
                  Si vous souhaitez un regard intense, profond et glamour, les extensions mega volume 4D à Marrakech sont une très belle option.
                  Vous pouvez nous envoyer un message pour connaître les disponibilités ou poser vos questions.
          `,
      buttonText: 'Envoyer un message pour les disponibilités',
      buttonLink: 'https://dikidi.net/1891924?p=0.pi',
    };
}
