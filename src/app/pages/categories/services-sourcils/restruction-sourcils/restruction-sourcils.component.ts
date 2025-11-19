import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-restruction-sourcils',
  templateUrl: './restruction-sourcils.component.html',
  styleUrl: './restruction-sourcils.component.css'
})



export class RestructionSourcilsComponent {
   /** carousel content */
              slides: Array<any> = [
                {
                  title:
                    'Restructuration sourcils Marrakech : une ligne adaptée à votre visage',
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
                'Restructuration sourcils Marrakech';
            
              /****  Lopp Section ***/
              items: string[] = ['ligne adaptée à votre visage'];
            
              // Section 3 service with accordionds
              servicesAbout: ServiceAbout | any = {
                id: 'Restructuration sourcils Marrakech',
                subtitle: '',
                title: 'Comment se déroule la prestation',
                features: [
                  {
                    title: '1. Analyse de la forme du visage',
                    points: [
                      'On étudie la morphologie de votre visage (front, yeux, pommettes, mâchoire) afin de déterminer la forme de sourcils qui vous met le plus en valeur.',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: '2. Mise en évidence de la ligne idéale',
                    points: [
                      'Grâce à des repères précis, on dessine la ligne parfaite pour vos sourcils : équilibrée, harmonieuse et adaptée à votre regard.',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: '3. Épilation précise',
                    points: [ 
                      'On retire poil par poil pour obtenir une forme nette, propre et naturelle. L’objectif : affiner sans trop enlever, et conserver une belle densité.', 
                            ],
                    smallDesc: '',
                  },
                  {
                    title: '4. Correction des asymétries',
                    points: [
                      'On ajuste chaque sourcil pour corriger les légères différences de hauteur, d’épaisseur ou de courbe, afin d’obtenir un résultat plus symétrique et équilibré.',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: 'Conseils pour l’entretien à domicile',
                    points: [
                      'On vous explique comment entretenir votre ligne entre deux rendez-vous : zones à éviter, petites retouches, hydratation, produits adaptés, etc.',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: 'Possibilité d’ajouter une teinture ou un brow lamination Marrakech',
                    points: [
                      'Pour un résultat encore plus structuré, vous pouvez compléter la prestation avec une teinture ou un brow lamination Marrakech, afin d’intensifier la couleur, combler les zones clairsemées et obtenir un effet lifté durable',
                    ],
                    smallDesc: '',
                  },
                ],
                image: 'assets/images/extension_de_cils/extension1d.png',
                imageAlt: 'Comment se déroule la prestation de restructuration sourcils Marrakech',
                imagePosition: 'left',
                
              };
            
              // secction 4
              highlightData: any = {
                subtitle: 'Sublimez votre beauté naturelle',
                title: 'Avantages de la restructuration',          
                features: [
                  {
                    title: 'Ligne propre et naturelle',
                    points: ['La mise en forme permet d’obtenir des sourcils nets, structurés et harmonieux, tout en préservant leur aspect naturel.'],
                    smallDesc: '',
                  },
                  {
                    title: 'Correction des erreurs d’épilation',
                    points: ['On rééquilibre la ligne en comblant visuellement les zones trop épilées et en redessinant une forme plus cohérente et élégante.'],
                    smallDesc: '',
                  },
                  {
                    title: 'Ouvre le regard immédiatement',
                    points: ['Une bonne architecture de sourcils liftent visuellement le regard, apportant plus de fraîcheur et de définition dès la fin de la prestation.'],
                    smallDesc: '',
                  },
                  {
                    title: 'Convient à tous types de sourcils',
                    points: ['Fins, épais, clairsemés ou indisciplinés : la technique s’adapte à chaque morphologie pour un résultat sur-mesure.'],
                    smallDesc: '',
                  },
                  {
                    title: 'Résultat durable malgré la chaleur',
                    points: ['La forme reste nette et propre même avec la chaleur de Marrakech, la transpiration ou un rythme de vie actif.'],
                    smallDesc: '',
                  },    
                ],
                image: 'assets/images/sourcils/5.jpg',
                imageAlt: 'Avantages de restructuration de sourcils',
                imagePosition: 'right',
                conseil: '',
              };
            
              faqData: ServiceAbout | any = {
                id: 'restructuration-de-sourcils-lamination',
                subtitle: '',
                title: 'Questions fréquentes',
                description: ``,
                features: [
                  {
                    title: 'On peut rattraper des sourcils trop épilés ?',
                    points: [
                      'Oui, on crée une ligne adaptée et on laisse repousser les zones nécessaires',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: 'Ça fait mal ?',
                    points: [
                      'La douleur est très légère.',
                    ],
                    smallDesc: '',
                  },
                  {
                    title: 'Combien de temps ça dure ?',
                    points: [
                      '2 à 5 semaines selon votre repousse.',
                    ],
                    smallDesc: '',
                  },
                  
                ],
                image: 'assets/images/sourcils/5.png',
                imageAlt: 'Restructuration de sourcils faq',
                imagePosition: 'left',
                conseil: '',
              };
            
              // Section 7
              servicesDepose: any[] = [
                {
                  id: 'Restructuration-de-sourcils',
                  subtitle: '',
                  title: 'Pourquoi notre salon',
                  features: [
                    'Grande précision',
                    'Respect de votre morphologie',
                    'Travail naturel, jamais trop fin',
                    'Ambiance calme proche de Guéliz',
                  ],
                  image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
                  imageAlt: 'Salon Russiaville beauty marrakech',
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
                title : "Réserver",  
                description: `
                             Vous pouvez nous écrire pour un diagnostic rapide.

                              `,
                buttonText: 'Envoyer un message pour les disponibilités',
                buttonLink: 'https://dikidi.net/1891924?p=0.pi',
              };
      

    
      constructor(private seoService: SeoService) {} // added constructor injection
      ngOnInit(): void {
        // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
        const seo = this.seoService.getSeoForService('serviceRestructionSourcils');
        this.seoService.applySeo(seo);
      }
    
}
