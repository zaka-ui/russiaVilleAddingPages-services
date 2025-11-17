import { Component } from '@angular/core';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-brow-lamination',
  templateUrl: './brow-lamination.component.html',
  styleUrl: './brow-lamination.component.css'
})
export class BrowLaminationComponent {
   /** carousel content */
            slides: Array<any> = [
              {
                title:
                  'Brow lamination Marrakech : des sourcils nets et naturellement liftés',
                subtitle: '',
                description: `
                              Beaucoup de clientes de Guéliz, Majorelle et Hivernage viennent nous voir parce qu’elles veulent des sourcils disciplinés, qui tiennent toute la journée malgré la chaleur de Marrakech. Le brow lamination Marrakech aide à redresser les poils, remplir les zones clairsemées et structurer le regard sans maquillage.
                            `,
                buttonText: 'Réserver',
                buttonLink: '/1891924?p=0.pi',
              },
            ];
          
            slideImage: string =
              'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
            slideImageAlt: string =
              'Lamination des sourcils Marrakech';
          
            /****  Lopp Section ***/
            items: string[] = ['sourcils nets et naturel'];
          
            // Section 3 service with accordionds
            servicesAbout: ServiceAbout | any = {
              id: 'Brow lamination',
              subtitle: '',
              title: 'Comment se déroule la prestation',
              description: `Le brow lamination dure en moyenne 35 à 45 minutes :`,
              features: [
                {
                  title: '1. Nettoyage doux',
                  points: [
                    'On commence par nettoyer délicatement vos sourcils pour éliminer maquillage, sébum et impuretés. Cela permet aux produits d’agir uniformément et garantit un résultat propre et homogène.',
                  ],
                  smallDesc: '',
                },
                {
                  title: '2. Application de la solution lift',
                  points: [
                    'La solution lift assouplit les poils pour permettre de les repositionner. C’est ce qui crée l’effet “brow lift”, avec des sourcils plus disciplinés, plus denses et mieux orientés.',
                  ],
                  smallDesc: '',
                },
                {
                  title: '3. Mise en forme selon votre ligne naturelle',
                  points: [ 
                    'Les poils sont ensuite placés dans la forme qui met le mieux en valeur votre regard. On suit la direction naturelle de votre ligne pour un résultat harmonieux, élégant et adapté à votre visage.', 
                          ],
                  smallDesc: '',
                },
                {
                  title: '4. Hydratation finale pour garder des poils souples',
                  points: [
                    'Une lotion nourrissante est appliquée pour renforcer, protéger et assouplir les poils après le traitement. Elle évite qu’ils deviennent secs et assure une tenue belle et naturelle.',
                  ],
                  smallDesc: '',
                },
                {
                  title: 'Possibilité d’ajouter une teinture sourcils Marrakech',
                  points: [
                    'Pour un effet encore plus structuré, vous pouvez ajouter une teinture des sourcils Marrakech. Elle intensifie la couleur, comble visuellement les zones clairsemées et donne un résultat plus défini, sans maquillage.',
                  ],
                  smallDesc: '',
                },
              ],
              image: 'assets/images/extension_de_cils/extension1d.png',
              imageAlt: 'Brow lamination',
              imagePosition: 'left',
              
            };
          
            // secction 4
            highlightData: any = {
              subtitle: 'Sublimez votre beauté naturelle',
              title: 'Avantages du brow lamination',          
              features: [
                {
                  title: 'Effet lifté pendant 6 à 8 semaines',
                  points: ['Le brow lift maintient les poils parfaitement disciplinés et orientés vers le haut pendant plusieurs semaines. Le résultat reste net et structuré sans besoin de maquillage quotidien.'],
                  smallDesc: '',
                },
                {
                  title: 'Structure le regard sans maquillage',
                  points: ['La lamination donne naturellement plus de volume, de netteté et de définition aux sourcils. Le regard paraît plus ouvert et encadré, même sans crayon ni gel fixateur'],
                  smallDesc: '',
                },
                {
                  title: 'Convient aux sourcils fins, clairsemés ou indisciplinés',
                  points: ['Le traitement épaissit visuellement les poils et comble les petites zones vides. Il est parfait pour les sourcils qui tombent, manquent de densité ou ont du mal à rester en place.'],
                  smallDesc: '',
                },
                {
                  title: 'Résiste à la chaleur et à l’humidité',
                  points: ['À Marrakech, la chaleur et la transpiration peuvent faire tomber le maquillage. Grâce au brow lift, vos sourcils restent nets, propres et disciplinés malgré la chaleur, l’eau ou l’humidité.'],
                  smallDesc: '',
                },
                {
                  title: 'Parfait pour les clientes actives et les touristes',
                  points: ['Idéal pour celles qui veulent un résultat durable sans retouche : sportives, femmes très actives, ou touristes qui souhaitent rester impeccables pendant tout leur séjour à Marrakech.'],
                  smallDesc: '',
                },    
              ],
              image: 'assets/images/sourcils/5.jpg',
              imageAlt: 'Avantages du brow lamination',
              imagePosition: 'right',
              conseil: '',
            };
          
            faqData: ServiceAbout | any = {
              id: 'brow-lamination',
              subtitle: '',
              title: 'Questions fréquentes',
              description: ``,
              features: [
                {
                  title: 'Ça tient avec la chaleur de Marrakech ?',
                  points: [
                    'Oui, le résultat reste stable même en été.',
                  ],
                  smallDesc: '',
                },
                {
                  title: 'Ça fait mal ?',
                  points: [
                    'Non, la prestation est indolore.',
                  ],
                  smallDesc: '',
                },
                {
                  title: 'Faut-il entretenir après ?',
                  points: [
                    'Juste hydrater légèrement les poils.',
                  ],
                  smallDesc: '',
                },
                
              ],
              image: 'assets/images/sourcils/5.png',
              imageAlt: 'brow lamination faq',
              imagePosition: 'left',
              conseil: '',
            };
          
            // Section 7
            servicesDepose: any[] = [
              {
                id: 'lamination-de-sourcils',
                subtitle: '',
                title: 'Pourquoi choisir notre salon',
                features: [
                  'Travail précis et adapté à la forme de votre visage',
                  'Produits doux, non agressifs',
                  'Résultats naturels et élégants',
                  'Salon calme et propre, proche de Guéliz',
                ],
                image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
                imageAlt: 'coloration de cils marrakech',
                imagePosition: 'left',
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
              title : "Prendre rendez-vous",  
              description: `
                           Envie de sourcils nets et liftés ?
                          Vous pouvez nous écrire pour les disponibilités.
                            `,
              buttonText: 'Envoyer un message pour les disponibilités',
              buttonLink: 'https://dikidi.net/1891924?p=0.pi',
            };
}
