import { Component } from '@angular/core';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-remplissage-extensions-cils-marrakech',
  templateUrl: './remplissage-extensions-cils-marrakech.component.html',
  styleUrl: './remplissage-extensions-cils-marrakech.component.css'
})





export class RemplissageExtensionsCilsMarrakechComponent {
    /** carousel content */
      slides: Array<any> = [
        {
          title:
            'Remplissage extensions cils à Marrakech : garder une ligne propre et un volume uniforme',
          subtitle: '',
          description: `
                        Le remplissage extensions cils à Marrakech permet de restaurer la densité et de corriger les zones vides qui apparaissent avec la chaleur, l’humidité et le rythme de vie à Marrakech. Idéal pour garder un regard uniforme sans refaire une pose complète. Chez Russiaville Beauty, le remplissage est une véritable reconstruction de la ligne, pour préserver un style propre, naturel ou intense selon votre pose initiale.
                      `,
          buttonText: 'Réserver',
          buttonLink: '/1891924?p=0.pi',
        },
      ];
    
      slideImage: string =
        'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
      slideImageAlt: string =
        'Remplissage extensions cils à Marrakech';
    
      /****  Lopp Section ***/
      items: string[] = ['Remplissage extensions cils'];
    
      // Section 3 service with accordionds
      servicesAbout: ServiceAbout | any = {
        id: 'nails',
        subtitle: '',
        title: 'Comment se déroule le remplissage',
        description: `Chaque remplissage commence par un diagnostic rapide.
                      On observe la quantité d’extensions restantes, la direction des cils naturels et le résultat souhaité. Étapes du remplissage :`,
        features: [
          {
            title: '1. Nettoyage complet',
            points: [
              'On retire les résidus de maquillage, sébum et poussière. C’est essentiel pour une bonne tenue, surtout à Marrakech.',
            ],
            smallDesc: '',
          },
          {
            title: '2. Retrait des extensions abîmées',
            points: [
              'On enlève les extensions tordues, collées ou trop éloignées de la racine.',
            ],
            smallDesc: '',
          },
          {
            title: '3. Correction de la ligne',
            points: [ 
              'On rééquilibre la symétrie et comble les zones vides.', 
                    ],
            smallDesc: '',
          },
          {
            title: '4. Ajout de nouveaux bouquets, selon votre pose initiale :',
            points: [
              '1D',
              '2D',
              '3D (volume russe)',
              '4D (méga volume)',
            ],
            smallDesc: '',
          },
          {
            title: '5. Séchage adapté au climat',
            points: [
              'On ajuste selon la température du jour',
            ],
            smallDesc: '',
          },
        ],
        image: 'assets/images/extension_de_cils/extension1d.png',
        imageAlt: 'Extensions volume naturel Marrakech',
        imagePosition: 'left',
        conseil:
          'Durée : Entre 45 minutes et 1h15, selon l’état de la pose. Résultat : Un regard rafraîchi, propre et uniforme, sans refaire une pose complète.',
      };
    
      // secction 4
      highlightData: any = {
        subtitle: 'Sublimez votre beauté naturelle',
        title: 'Avantages du remplissage cils',
        text: `Le remplissage est essentiel si vous voulez garder un regard net et soigné.`,
    
        features: [
          {
            title: 'Évite de refaire une pose complète',
            points: ['Économie de temps et d’argent.'],
            smallDesc: '',
          },
          {
            title: 'Garde la ligne homogène',
            points: ['Très important pour le volume (2D, 3D, 4D).'],
            smallDesc: '',
          },
          {
            title: 'Donne un effet propre et renouvelé',
            points: ['Même si vos cils naturels ont poussé.'],
            smallDesc: '',
          },
          {
            title: 'Adapté au climat de Marrakech',
            points: ['On ajuste la colle selon la saison.'],
            smallDesc: '',
          },
          {
            title: 'Corrige les imperfections',
            points: ['Cils tordus, cils trop longs, petits trous.'],
            smallDesc: '',
          },
          {
            title: 'Réduit la casse des cils naturels',
            points: ['On retire les extensions qui tirent trop.'],
            smallDesc: '',
          },
          {
            title: 'Adaptable selon vos envies',
            points: ['On peut renforcer, alléger ou changer légèrement le style.'],
            smallDesc: '',
          },
          
          
        ],
        image: 'assets/images/sourcils/5.jpg',
        imageAlt: 'Remplissage extensions cils à Marrakech',
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
            title: 'Quand faire un remplissage ?',
            points: [
              'Entre 2 et 3 semaines en général. À Marrakech, certaines clientes actives préfèrent venir tous les 15 jours.',
            ],
            smallDesc: '',
          },
          {
            title: 'Combien d’extensions doivent rester pour faire un remplissage ?',
            points: [
              'Idéalement 40 à 50%. En dessous, une pose complète est plus adaptée.',
            ],
            smallDesc: '',
          },
          {
            title: 'Puis-je changer de style pendant un remplissage ?',
            points: [
              'Oui :',
              'Passer de 1D à 2D',
              'Passer de 2D à 3D',
              'Alléger une pose trop dense',
              'Rééquilibrer la forme',
            ],
            smallDesc: '',
          },
          {
            title: 'Le remplissage abîme-t-il les cils ?',
            points: ['Non. Il protège même vos cils naturels en retirant les extensions trop lourdes.'],
            smallDesc: '',
          },
          {
            title: 'Le remplissage tient-il bien malgré la chaleur ?',
            points: ['Oui. On adapte toujours la colle à la météo de Marrakech.'],
            smallDesc: '',
          },
          {
            title: 'Puis-je venir avec une pose faite ailleurs ?',
            points: ['Oui. On fait d’abord un diagnostic pour voir si un remplissage est possible ou si une dépose est nécessaire.'],
            smallDesc: '',
          },
        ],
        image: 'assets/images/sourcils/5.png',
        imageAlt: 'Remplissage extensions cils à Marrakech',
        imagePosition: 'left',
        conseil: '',
      };
    
      // Section 7
      servicesDepose: any[] = [
        {
          id: 'Remplissage-d-extensions',
          subtitle: '',
          title: 'Pourquoi faire votre remplissage chez Russiaville Beauty',
          description: `Russiaville Beauty est spécialisé dans les poses propres et naturelles.
                        Le remplissage est un moment clé pour garder un résultat harmonieux. Ce qui nous distingue :`,
          features: [
            'Nettoyage complet avant la pose',
            'Retrait doux des anciennes extensions',
            'Travail précis cil par cil',
            'Bouquets réguliers',
            'Colle adaptée au climat',
            'Volume homogène',
            'Respect total des cils naturels',
            'Conseils personnalisés',
          ],
          image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
          imageAlt: 'Remplissage d\'extensions de cils ',
          imagePosition: 'left',
          conseil: `
                    Nous corrigeons souvent des poses faites ailleurs :
                    cils collés, densité irrégulière, extensions trop lourdes, longueur inadaptée.
                    
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
        descriptionTwo : "Le remplissage est très demandé dans ces zones, car il permet aux clientes de garder un regard propre et net pour le travail, les sorties ou les événements.",
            
      };
    
      // Section Cta
      ctaData: CtaBannerDataType = {
        description: `
                    Si vous souhaitez garder un regard net et uniforme, vous pouvez réserver un remplissage extensions cils à Marrakech.
                    Vous pouvez nous écrire pour poser vos questions ou vérifier les disponibilités.
            `,
        buttonText: 'Envoyer un message pour les disponibilités',
        buttonLink: 'https://dikidi.net/1891924?p=0.pi',
      };
}
