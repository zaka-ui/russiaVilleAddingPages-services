import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-depose-extensions-cils',
  templateUrl: './depose-extensions-cils.component.html',
  styleUrl: './depose-extensions-cils.component.css'
})
export class DeposeExtensionsCilsComponent {
   /** carousel content */
        slides: Array<any> = [
          {
            title:
              'Dépose extensions cils Marrakech : un retrait doux et sécurisé pour protéger vos cils naturels',
            subtitle: '',
            description: `
                         La dépose extensions cils Marrakech est essentielle lorsque les extensions sont trop lourdes, collées ou mal posées. Elle permet de retirer les extensions en douceur, sans douleur et sans abîmer les cils naturels. Chez Russiaville Beauty, nous utilisons des produits doux et une technique précise pour enlever chaque fibre sans tirer, afin de retrouver une base propre et saine avant une nouvelle pose.
                        `,
            buttonText: 'Réserver',
            buttonLink: '/1891924?p=0.pi',
          },
        ];
      
        slideImage: string =
          'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
        slideImageAlt: string =
          'Dépose extensions cils Marrakech';
      
        /****  Lopp Section ***/
        items: string[] = ['Dépose extensions cils'];
      
        // Section 3 service with accordionds
        servicesAbout: ServiceAbout | any = {
          id: 'extensions',
          subtitle: '',
          title: 'Comment se déroule la dépose',
          description: `La dépose doit être faite avec soin.
                        Tirer, couper ou arracher les extensions peut abîmer votre ligne de cils pendant plusieurs semaines.
                        Étapes d’une dépose sécurisée :
                        `,
          features: [
            {
              title: '1. Diagnostic rapide. On observe :',
              points: [
                'La colle utilisée.',
                'Le poids des extensions',
                'L’état de vos cils naturels',
                'Les zones sensibles',
              ],
              smallDesc: '',
            },
            {
              title: '2. Application du produit de dépose',
              points: [
                'Un dissolvant doux spécialement conçu pour les extensions.',
                'Aucune brûlure, aucune irritation.',
              ],
              smallDesc: '',
            },
            {
              title: '3. Temps de pose',
              points: [ 
                'On laisse agir pour que la colle se dissolve, sans forcer.', 
                      ],
              smallDesc: '',
            },
            {
              title: '4. Retrait délicat',
              points: [
                'On retire les extensions une par une, sans tirer.',
              ],
              smallDesc: '',
            },
            {
              title: '5. Nettoyage complet',
              points: [
                'On enlève les résidus de colle et on nettoie les cils naturels.',
              ],
              smallDesc: '',
            },
            {
              title: '6. Hydratation',
              points: [
                'Huile légère ou soin nutritif selon le besoin.',
              ],
            }
          ],
          image: 'assets/images/extension_de_cils/extension1d.png',
          imageAlt: 'Extensions volume naturel Marrakech',
          imagePosition: 'left',
          conseil:
            'Durée : Environ 20 à 30 minutes selon l’état de la pose. Résultat : Vos cils naturels restent intacts, propres et prêts pour une nouvelle pose si vous le souhaitez.',
        };
      
        // secction 4
        highlightData: any = {
          subtitle: 'Sublimez votre beauté naturelle',
          title: 'Quand faire une dépose ?',
          text: `La dépose est recommandée dans plusieurs cas :`,
      
          features: [
            {
              title: '1. Extensions trop lourdes',
              points: ['Si elles tirent sur vos cils et provoquent un inconfort.'],
              smallDesc: '',
            },
            {
              title: '2. Pose mal réalisée',
              points: ['Cils collés ensemble, surcharge, longueurs trop importantes.'],
              smallDesc: '',
            },
            {
              title: '3. Changement de style',
              points: ['Passer d’un volume extrême à un style plus naturel.'],
              smallDesc: '',
            },
            {
              title: '4. Besoin d’une pause',
              points: ['Certaines clientes préfèrent laisser leurs cils respirer quelques semaines.'],
              smallDesc: '',
            },
            {
              title: '5. Perte irrégulière',
              points: ['Quand la pose est devenue trop déséquilibrée.'],
              smallDesc: '',
            },
            {
              title: '6. Colle trop dure',
              points: ['Certaines colles très fortes créent des paquets difficiles à nettoyer.'],
              smallDesc: '',
            },
            
            
            
          ],
          image: 'assets/images/sourcils/5.jpg',
          imageAlt: 'depose d\'extensions cils à Marrakech',
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
              title: 'La dépose fait-elle tomber mes cils naturels ?',
              points: [
                'Non. Au contraire, elle empêche les arrachements liés aux paquets ou au poids.',
              ],
              smallDesc: '',
            },
            {
              title: 'Puis-je faire ma dépose seule à la maison ?',
              points: [
                'Non. C’est risqué et souvent douloureux. On voit souvent des cils naturels arrachés à cause de cela.',
              ],
              smallDesc: '',
            },
            {
              title: 'La dépose pique-t-elle ?',
              points: [
                'Non. Le produit est doux et ne touche pas la peau.'
              ],
              smallDesc: '',
            },
            {
              title: 'Combien de temps cela prend ?',
              points: ['20 à 30 minutes.'],
              smallDesc: '',
            },
            {
              title: 'Est-ce que je dois venir si mes extensions tombent seules ?',
              points: [
                'Oui si :' ,
                'Certaines extensions restent collées',
                'La ligne devient irrégulière',
                'les cils sont collés entre eux'              
              ],
              smallDesc: '',
            }
            
          ],
          image: 'assets/images/sourcils/5.png',
          imageAlt: 'Dépose extensions cils à Marrakech',
          imagePosition: 'left',
          conseil: '',
        };
      
        // Section 7
        servicesDepose: any[] = [
          {
            id: 'depose-d-extension',
            subtitle: '',
            title: 'Avantages d’une dépose professionnelle',
            description: `Une dépose faite en salon fait toute la différence.`,
            features: [
              'Aucune douleur : Le produit dissout la colle sans tirer sur les cils naturels.',
              'Aucun cil naturel arraché : Contrairement aux dépôts mal faites ou aux tentatives maison.',
              'Résultat propre : Les cils naturels sont laissés libres, sans résidus.',
              'Prépare les cils pour une nouvelle pose : Base propre = meilleure tenue ensuite.',
              'Sécurisée et hygiénique : Outils propres + produits adaptés.',
              'Convient aux yeux sensibles : Pas de brûlure, pas de rougeur.',
            ],
            image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
            imageAlt: 'depose-d-extension',
            imagePosition: 'left',
            conseil: ` `,
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
          descriptionTwo : "La dépose est très demandée avant les événements ou avant de repartir sur un style plus naturel.",
              
        };
      
        // Section Cta
        ctaData: CtaBannerDataType = {
          description: `
                      Si vous souhaitez une dépose d’extensions de cils à Marrakech douce et sécurisée, vous pouvez nous écrire pour connaître les disponibilités ou poser vos questions.
              `,
          buttonText: 'Envoyer un message pour les disponibilités',
          buttonLink: 'https://dikidi.net/1891924?p=0.pi',
        };
}
