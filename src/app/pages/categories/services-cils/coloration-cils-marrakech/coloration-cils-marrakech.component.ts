import { Component } from '@angular/core';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-coloration-cils-marrakech',
  templateUrl: './coloration-cils-marrakech.component.html',
  styleUrl: './coloration-cils-marrakech.component.css'
})
export class ColorationCilsMarrakechComponent {
  /** carousel content */
          slides: Array<any> = [
            {
              title:
                'Coloration cils Marrakech : un regard plus intense et naturel sans mascara',
              subtitle: '',
              description: `
                         La coloration des cils Marrakech est parfaite pour intensifier le regard sans mascara, surtout avec la chaleur qui fait couler le maquillage. Elle donne des cils plus foncés, plus denses et visibles tout en restant totalement naturelle. Idéale pour celles qui veulent un regard propre et net toute la journée, même avec des cils clairs ou sans maquillage.
                          `,
              buttonText: 'Réserver',
              buttonLink: '/1891924?p=0.pi',
            },
          ];
        
          slideImage: string =
            'assets/images/extension_de_cils/coloration_de_cils/1.png';
          slideImageAlt: string =
            'Coloration cils Marrakech';
        
          /****  Lopp Section ***/
          items: string[] = ['regard naturel sans mascara'];
        
          // Section 3 service with accordionds
          servicesAbout: ServiceAbout | any = {
            id: 'nails',
            subtitle: '',
            title: 'Comment se déroule la coloration des cils',
            description: `La teinture des cils est une prestation rapide, douce et adaptée à tous les types de cils, même les plus fins. Étapes de la prestation :`,
            features: [
              {
                title: '1. Nettoyage du contour des yeux',
                points: [
                  'On retire toute trace de maquillage ou de sébum pour que la couleur prenne uniformément.',
                ],
                smallDesc: '',
              },
              {
                title: '2. Protection de la peau',
                points: [
                  'On applique une crème protectrice douce pour éviter les taches.',
                ],
                smallDesc: '',
              },
              {
                title: '3. Application de la teinture',
                points: [ 
                  'On pose une couleur adaptée à votre teint et à vos cils.', 
                        ],
                smallDesc: '',
              },
              {
                title: '4. Temps de pose',
                points: [
                  'Quelques minutes suffisent.',
                  'Le produit est doux et ne brûle pas.',
                ],
                smallDesc: '',
              },
              {
                title: '5. Nettoyage final',
                points: [
                  'On retire la teinture et on brosse les cils pour un résultat net.',
                ],
                smallDesc: '',
              },
            ],
            image: 'assets/images/extension_de_cils/extension1d.png',
            imageAlt: 'Coloration cils Marrakech',
            imagePosition: 'left',
            conseil:
              'Durée : Environ 20 minutes., Des cils plus foncés, plus visibles, avec un regard propre et naturel.',
          };
        
          // secction 4
          highlightData: any = {
            subtitle: 'Sublimez votre beauté naturelle',
            title: 'Avantages de la coloration cils Marrakech',
            text: `Cette prestation est très populaire chez les clientes qui vivent ou travaillent à Marrakech, car elle résiste très bien à la chaleur.`,
        
            features: [
              {
                title: ' Effet naturel',
                points: ['Vos cils restent fins, mais plus visibles.'],
                smallDesc: '',
              },
              {
                title: 'Plus besoin de mascara',
                points: ['Idéal si vous transpirez facilement ou si votre mascara coule avec la chaleur.'],
                smallDesc: '',
              },
              {
                title: 'Regard plus intense',
                points: ['Même sans maquillage, vos yeux paraissent plus définis.'],
                smallDesc: '',
              },
              {
                title: 'Convient aux cils clairs ou fins',
                points: ['La couleur révèle leur longueur naturelle.'],
                smallDesc: '',
              },
              {
                title: 'Résultat durable',
                points: ['Tient entre 3 et 4 semaines, même avec la chaleur.'],
                smallDesc: '',
              },
              {
                title: 'Aucune irritation',
                points: ['Le produit est doux et adapté aux yeux sensibles.'],
                smallDesc: '',
              },
              {
                title: ' Parfait en complément du lash lift',
                points: ['L’effet est encore plus beau si vous combinez lamination + coloration.'],
                smallDesc: '',
              },
              
              
            ],
            image: 'assets/images/sourcils/5.jpg',
            imageAlt: 'Avantages de la coloration cils Marrakech',
            imagePosition: 'right',
            conseil: '',
          };
        
          faqData: ServiceAbout | any = {
            id: 'lamination-d-extension',
            subtitle: '',
            title: 'Questions fréquentes',
            description: ``,
            features: [
              {
                title: 'La coloration abîme-t-elle les cils ?',
                points: [
                  'Non. Les produits sont doux et adaptés.',
                ],
                smallDesc: '',
              },
              {
                title: 'Puis-je mettre du mascara ensuite ?',
                points: [
                  'Oui, sans problème.',
                ],
                smallDesc: '',
              },
              {
                title: 'Combien de temps ça dure ?',
                points: [
                  'Entre 3 et 4 semaines selon votre routine.',
                ],
                smallDesc: '',
              },
              {
                title: 'Est-ce que ça coule avec la chaleur ?',
                points: ['Non. La teinture est résistante, même en été.'],
                smallDesc: '',
              },
              {
                title: 'Est-ce que ça convient aux cils très fins ?',
                points: ['Oui. C’est d’ailleurs l’un des meilleurs choix.'],
                smallDesc: '',
              },
              {
                title: 'Puis-je faire une coloration si je fais du sport ?',
                points: ['Oui. Le résultat reste stable malgré la transpiration.'],
                smallDesc: '',
              },
              {
                title: 'Puis-je faire une coloration avant un voyage ?',
                points: ['Oui, c’est même recommandé pour éviter le maquillage.'],
                smallDesc: '',
              },
            ],
            image: 'assets/images/sourcils/5.png',
            imageAlt: 'Coloration cils Marrakech',
            imagePosition: 'left',
            conseil: '',
          };
        
          // Section 7
          servicesDepose: any[] = [
            {
              id: 'COLORATION-CILS-MARRAKECH',
              subtitle: '',
              title: 'Pourquoi choisir notre coloration cils à Russiaville Beauty',
              description: `
                            Chez Russiaville Beauty, on utilise une technique douce et des produits adaptés.
                            Notre objectif : un regard naturel, propre et harmonieux. Ce qui nous distingue :
                            
                `,
              features: [
                'Produits doux, sans brûlure',
                'Couleurs adaptées à votre teint',
                'Technique propre et rapide',
                'Résultat uniforme',
                'Parfaite combinaison avec la lamination',
                'Tenue longue malgré la chaleur',
                'Respect total des cils',
                'Confort garanti',
              ],
              image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
              imageAlt: 'coloration de cils marrakech',
              imagePosition: 'left',
              conseil: `Nous accueillons chaque jour des clientes aux cils très clairs, courts ou fins. La teinture leur donne un regard réveillé sans effort.`,
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
            description: `
                          Si vous souhaitez un regard plus intense sans maquillage, vous pouvez réserver une coloration cils à Marrakech.
                          Écrivez-nous pour connaître les disponibilités ou poser vos questions.
                          `,
            buttonText: 'Envoyer un message pour les disponibilités',
            buttonLink: 'https://dikidi.net/1891924?p=0.pi',
          };
}
