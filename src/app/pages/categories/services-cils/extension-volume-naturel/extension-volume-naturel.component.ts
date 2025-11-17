import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-extension-volume-naturel',
  templateUrl: './extension-volume-naturel.component.html',
  styleUrl: './extension-volume-naturel.component.css'
})






export class ExtensionVolumeNaturelComponent {
   /** carousel content */
    slides: Array<any> = [
      {
        title: 'Extensions volume naturel Marrakech : la pose 2D pour un regard doux et plus dense',
        subtitle: '',
        description: `
                         Les extensions volume naturel Marrakech (2D) offrent un rendu plus rempli que le cil à cil, sans effet dramatique. 
                         Deux fibres fines par cil créent un volume doux, uniforme et élégant. 
                         Idéal pour celles qui veulent un résultat visible mais naturel, 
                         combler des zones clairsemées et profiter d’une bonne tenue même sous la chaleur de Marrakech.
                          `,
        buttonText: 'Réserver',
        buttonLink: '/1891924?p=0.pi',
      }
    ];
  
    slideImage: string = 'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
    slideImageAlt: string = 'Extensions cil à cil Marrakech : la pose 1D pour un regard naturel et soigné';
  
    /****  Lopp Section ***/
    items: string[] = ["Extensions volume naturel Marrakech"]
  
    // Section 3 service with accordionds
    servicesAbout: ServiceAbout | any = {
      id: 'nails',
      subtitle: '',
      title: 'Comment se déroule la prestation',
      description: `Avant chaque pose, on analyse vos cils naturels, leur force, leur direction et la forme de vos yeux.
                    Cela nous permet de choisir la bonne densité sans fragiliser les cils.
                    `,
      features: [
        {
          title: "1. Diagnostic du regard",
          points: [
            " On observe vos cils naturels, les zones moins fournies et votre style préféré.",
          ],
          smallDesc: ""
        },
        {
          title: "2. Préparation des cils",
          points: [
            " Nettoyage, dégraissage et séparation des cils pour une tenue stable malgré la chaleur.",
          ],
          smallDesc: ""
        },
        {
          title: "3. Création des bouquets 2D",
          points: [
            "Aucune surcharge, aucune colle excessive.",
          ],
          smallDesc: ""
        },
        {
          title: "4. Application précise",
          points: [
            " Nous respectons l’espacement et l’alignement pour éviter que les extensions se collent entre elles.",
          ],
          smallDesc: ""
        },
        {
          title: "5. Séchage contrôlé",
          points: [
            "On adapte la colle à l’humidité de Marrakech, en particulier en été ou au printemps.",
          ],
          smallDesc: ""
        },
         {
          title: "6. Vérification du confort",
          points: [
            "Aucun tiraillement. Aucun poids. Un rendu respirant et propre.",
          ],
          smallDesc: ""
        },
      ],
      image: 'assets/images/extension_de_cils/extension1d.png',
      imageAlt: 'Extensions volume naturel Marrakech',
      imagePosition: 'left',
      conseil: ' Durée de la séance : Entre 1h30 et 1h45 selon la densité souhaitée. Un volume léger. Resultat: très naturel, avec une ligne de cils plus remplie sans effet artificiel.'
    }
  
  
    // secction 4
    highlightData: any = {
      subtitle: 'Sublimez votre beauté naturelle',
      title: 'Avantages des extensions volume naturel 2D',
      text: `Le 2D est l’équilibre parfait entre naturel et densité. Voici les avantages les plus appréciés par nos clientes :`,
  
      features: [
        {
          title: "Rendu plus rempli que la pose cil à cil",
          points: [
            "Parfait si vous avez des zones clairsemées.",
          ],
          smallDesc: ""
        },
        {
          title: "Effet doux et élégant",
          points: [
            "Visible, mais jamais trop chargé.",
          ],
          smallDesc: ""
        },
        {
          title: "Très confortable",
          points: [
            "Les extensions sont fines, donc légères.",
          ],
          smallDesc: ""
        },
        {
          title: "Tient bien malgré la chaleur de Marrakech",
          points: [
            "On utilise une colle adaptée aux saisons chaudes.",
          ],
          smallDesc: ""
        },
        {
          title: "Idéal pour les photos et les soirées",
          points: [
            "Le regard est plus présent mais reste naturel.",
          ],
          smallDesc: ""
        },
        {
          title: "Aucun effet paquet",
          points: [
            "Les bouquets 2D sont faits avec un espacement précis.",
          ],
          smallDesc: ""
        },
        {
          title: "Convient aux cils fins",
          points: [
            "Car les extensions sont légères et respectent vos cils.",
          ],
          smallDesc: ""
        },
      ],
      image: 'assets/images/sourcils/5.jpg',
      imageAlt: 'Extensions volume naturel 2D',
      imagePosition: 'right',
      conseil: ''
    };
  
  
    faqData: ServiceAbout | any = {
      id: 'nails',
      subtitle: '',
      title: 'Questions fréquentes',
      description: ``,
      features: [
        {
          title: "Est-ce que le 2D paraît “trop visible” ?",
          points: [
            "Non. Le volume naturel reste doux, léger et harmonieux. C’est parfait si vous voulez juste un peu plus de densité.",
          ],
          smallDesc: ""
        },
        {
          title: "Quelle est la différence entre 1D et 2D ?",
          points: [
            "1D = une extension par cil. 2D = deux extensions fines par cil. Le résultat est plus rempli mais toujours naturel.",
          ],
          smallDesc: ""
        },
        {
          title: "Est-ce que la chaleur fait tomber les 2D plus vite ?",
          points: [
            "Non. On adapte la technique et la colle à la saison de Marrakech.",
          ],
          smallDesc: ""
        },
        {
          title: "Quelle est la durée de vie du 2D ?",
          points: [
            "Entre 3 et 5 semaines selon votre routine.",
          ],
          smallDesc: ""
        },
        {
          title: "Dois-je faire un remplissage ?",
          points: [
            "Oui, toutes les 2–3 semaines pour garder un volume propre.",
          ],
          smallDesc: ""
        },
        {
          title: "Est-ce que ça abîme les cils ?",
          points: [
            "Non, si la pose est bien réalisée.",
            "votre mode de vie (sport, soirées, travail)",
          ],
          smallDesc: ""
        },
      ],
      image: 'assets/images/sourcils/5.png',
      imageAlt: 'Extensions volume naturel 2D',
      imagePosition: 'left',
      conseil: ''
    }
  
  
    // Section 7
    servicesDepose: any[] = [
      {
        id: 'Pourquoi choisir nos extensions 2D à Marrakech',
        subtitle: '',
        title: 'Pourquoi choisir nos extensions 2D à Marrakech',
        description: `Russiaville Beauty est spécialisé dans les poses naturelles et harmonieuses.
                      Pour le 2D, la précision est essentielle.`,
        features: [
          'Bouquets 2D légers et réguliers',
          'Technique douce, sans surcharge',
          'Hygiène stricte',
          'Densité adaptée à votre style',
          'Colle stable même en été',
          'Confort garanti',
          'Résultat sur mesure selon votre regard',
        ],
        image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
        imageAlt: 'Extensions 2D à Marrakech - Russiaville beauty',
        imagePosition: 'left',
        conseil: `
                  Nous corrigeons souvent des poses mal réalisées :
                  cils collés, bouquets trop lourds, densité inadaptée.
                  Notre priorité est la santé de vos cils naturels.`
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
      description: `
            Si vous souhaitez un regard doux et plus dense, les extensions volume naturel 2D à Marrakech sont une excellente option.
            Vous pouvez nous écrire pour connaître les disponibilités ou poser vos questions.
      `,
      buttonText: "Envoyer un message pour les disponibilités",
      buttonLink: "https://dikidi.net/1891924?p=0.pi",
    }
}
