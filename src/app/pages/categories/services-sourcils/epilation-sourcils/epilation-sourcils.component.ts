import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-epilation-sourcils',
  templateUrl: './epilation-sourcils.component.html',
  styleUrl: './epilation-sourcils.component.css'
})
export class EpilationSourcilsComponent {
   /** carousel content */
                slides: Array<any> = [
                  {
                    title:
                      'Épilation sourcils Marrakech : une ligne propre et naturelle',
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
                  'Épilation sourcils Marrakech';
              
                /****  Lopp Section ***/
                items: string[] = ['Propre et naturelle'];
              
                // Section 3 service with accordionds
                servicesAbout: ServiceAbout | any = {
                  id: 'Épilation sourcils Marrakech',
                  subtitle: '',
                  title: 'Comment se déroule la prestation',
                  features: [
                    {
                      title: '1.  Mise en forme douce',
                      points: [
                        'La ligne est travaillée avec délicatesse pour conserver un aspect naturel tout en apportant netteté et harmonie.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: '2. Épilation à la pince ou cire adaptée',
                      points: [
                        'Selon votre peau et votre type de poils, on choisit la méthode la plus douce et la plus précise pour retirer les poils indésirables.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: '3. Finitions précises',
                      points: [ 
                        'Chaque poil est ajusté avec soin pour obtenir une forme propre, équilibrée et parfaitement définie.', 
                              ],
                      smallDesc: '',
                    },
                    {
                      title: '4. Conseils de repousse',
                      points: [
                        'On vous guide sur les zones à laisser repousser, les gestes à éviter et les produits à utiliser pour garder une belle ligne entre les rendez-vous.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: '5. Possibilité d’ajouter une restructuration ou une teinture sourcils',
                      points: [
                        'Pour un résultat encore plus net ou plus intense, vous pouvez compléter avec une restructuration ou une teinture sourcils selon vos besoins.',
                      ],
                      smallDesc: '',
                    }
                  ],
                  image: 'assets/images/extension_de_cils/extension1d.png',
                  imageAlt: 'Épilation sourcils Marrakech',
                  imagePosition: 'left',
                  
                };
              
                // secction 4
                highlightData: any = {
                  subtitle: 'Sublimez votre beauté naturelle',
                  title: 'Avantages :',          
                  features: [
                    {
                      title: 'Un rendu propre en quelques minutes',
                      points: ['La prestation offre un coup de frais immédiat : vos sourcils retrouvent une ligne nette sans effort.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Une forme qui respecte votre morphologie',
                      points: ['On travaille la ligne en suivant la direction naturelle du poil et la structure du visage pour un résultat équilibré.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Sensation légère et confortable',
                      points: ['L’épilation est réalisée avec une technique douce, ce qui limite au maximum l’inconfort.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Une tenue qui reste régulière',
                      points: ['La forme conserve sa netteté plusieurs semaines, même avec la chaleur ou un rythme actif.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Parfait pour un look impeccable en toute occasion',
                      points: ['Un excellent choix avant une séance photo, un événement ou un voyage pour des sourcils impeccables.'],
                      smallDesc: '',
                    },    
                  ],
                  image: 'assets/images/sourcils/5.jpg',
                  imageAlt: 'Avantages de épilation sourcils Marrakech',
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
                      title: 'Ça repousse plus vite après ?',
                      points: [
                        'Non, la repousse reste naturelle.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: 'Cire ou pince ?',
                      points: [
                        'On choisit selon votre peau.',
                      ],
                      smallDesc: '',
                    },
                    
                  ],
                  image: 'assets/images/sourcils/5.png',
                  imageAlt: 'Épilation sourcils de sourcils faq',
                  imagePosition: 'left',
                  conseil: '',
                };
              
                // Section 7
                servicesDepose: any[] = [
                  {
                    id: 'Épilation sourcils',
                    subtitle: '',
                    title: 'Pourquoi notre salon',
                    features: [
                      'Travail propre et maîtrisé : Chaque sourcil est travaillé avec précision, sans gestes brusques ni finitions approximatives, pour un résultat net et harmonieux. ',
                      'Zéro sur-épilation :  Nous respectons toujours votre densité naturelle on nettoie, on structure, mais on ne retire jamais plus que nécessaire afin de conserver une ligne pleine et élégante.',
                      'Ambiance calme et moderne : Le salon offre un cadre apaisant et contemporain, pensé pour que chaque cliente profite d’un moment de détente tout en recevant un soin de qualité.',
                      'Emplacement idéal entre Guéliz et Majorelle : Situé dans une zone facilement accessible, notre salon est parfait pour les clientes locales comme pour les visiteurs qui veulent une mise en beauté rapide et professionnelle.',
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
                  description: `Écrivez-nous pour connaître les disponibilités.`,
                  buttonText: 'Envoyer un message pour les disponibilités',
                  buttonLink: 'https://dikidi.net/1891924?p=0.pi',
                };
}
