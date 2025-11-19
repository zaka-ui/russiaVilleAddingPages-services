import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-manucure-semi-permanente',
  templateUrl: './manucure-semi-permanente.component.html',
  styleUrl: './manucure-semi-permanente.component.css'
})
export class ManucureSemiPermanenteComponent {
     /** carousel content */
                    slides: Array<any> = [
                      {
                        title:
                          'Manucure semi-permanente Marrakech',
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
                      'Manucure semi-permanente Marrakech';
                  
                    /****  Lopp Section ***/
                    items: string[] = ['Résultat ultra net'];
                  
                    // Section 3 service with accordionds
                    servicesAbout: ServiceAbout | any = {
                      id: 'Manucure semi-permanente Marrakech',
                      subtitle: '',
                      title: 'Comment se déroule la prestation',
                      description : "Chez nous, chaque manucure semi-permanente suit un protocole précis :",
                      features: [
                        {
                          title: '1.  Préparation douce des ongles',
                          points: [
                            'On nettoie et prépare l’ongle délicatement pour garantir une pose propre et durable.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '2. Retrait des cuticules sans douleur',
                          points: [
                            'Les cuticules sont repoussées et retirées avec précision pour un contour net et soigné.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '3. Mise en forme selon vos préférences',
                          points: [ 
                            'Carré, rond, amande ou oval : la forme est adaptée à votre style et à votre morphologie d’ongle.', 
                                  ],
                          smallDesc: '',
                        },
                        {
                          title: '4. Base protectrice',
                          points: [
                            'Une base de qualité est appliquée pour renforcer l’ongle et assurer une tenue longue durée.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '5. Application du vernis semi-permanent en fines couches',
                          points: [
                            'Plusieurs couches fines garantissent une couleur uniforme, élégante et sans épaisseur excessive.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '6. Catalysation LED',
                          points: [
                            'Chaque couche est durcie sous lampe LED pour une tenue optimale de 2 à 3 semaines.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '6. Finition brillante ultra-résistante',
                          points: [
                            'Une couche finale scelle la couleur et offre une brillance durable, résistante aux chocs et à la chaleur.',
                          ],
                          smallDesc: '',
                        }
                      ],
                      image: 'assets/images/extension_de_cils/extension1d.png',
                      imageAlt: 'Manucure semi-permanente Marrakech',
                      imagePosition: 'left',
                      conseil : "Nous utilisons des produits adaptés au climat de Marrakech pour éviter les décollements rapides.",
                      
                    };
                  
                    // Avantage secction 4 
                    highlightData: any = {
                      subtitle: 'Sublimez votre beauté naturelle',
                      title: 'Avantages :',          
                      features: [
                        {
                          title: 'Tenue 2 à 3 semaines sans s’écailler',
                          points: ['Le semi-permanent garde une surface lisse et intacte pendant plusieurs semaines, même avec un rythme de vie actif.'],
                          smallDesc: '',
                        },
                        {
                          title: 'Brillance durable sous la chaleur',
                          points: ['La finition reste lumineuse et propre, même en plein été à Marrakech, sans ternir ni ramollir.'],
                          smallDesc: '',
                        },
                        {
                          title: 'Large choix de couleurs tendance',
                          points: ['Des teintes classiques aux couleurs modernes : vous trouvez toujours la nuance qui correspond à votre style.'],
                          smallDesc: '',
                        },
                        {
                          title: 'Technique douce qui protège vos ongles',
                          points: ['La pose est réalisée sans abraser l’ongle, pour maintenir sa santé tout en offrant une tenue renforcée.'],
                          smallDesc: '',
                        },
                        {
                          title: 'Idéal pour travail, soirées, mariages, tourisme',
                          points: ['Parfait pour un look soigné en toutes circonstances : bureau, événements, vacances ou shooting.'],
                          smallDesc: '',
                        },    
                      ],
                      image: 'assets/images/sourcils/5.jpg',
                      imageAlt: 'Avantages de manucure semi-permanente Marrakech',
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
                          title: '“Est-ce que ça abîme les ongles ?”',
                          points: [
                            'Non, si la dépose est faite correctement. Nous évitons tout grattage agressif.',
                          ],
                          smallDesc: '',
                        },
                        {
                          title: '“Est-ce que ça tient bien avec la chaleur de Marrakech ?”',
                          points: [
                            'Oui, grâce à une base et un top adaptés au climat sec.',
                          ],
                          smallDesc: '',
                        },
                         {
                          title: '“Puis-je faire du sport ou piscine ?”',
                          points: [
                            'Oui, aucune gêne.',
                          ],
                          smallDesc: '',
                        },
                        
                      ],
                      image: 'assets/images/sourcils/5.png',
                      imageAlt: 'Manucure semi-permanente Marrakech faq',
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
                          'Protocole précis : Chaque étape suit une méthode rigoureuse pour garantir une pose uniforme, stable et parfaitement réalisée.',
                          'Hygiène stricte : Le matériel est désinfecté et stérilisé entre chaque cliente, pour une expérience sûre et irréprochable.',
                          'Produits longue tenue : Nous utilisons uniquement des vernis et bases de haute qualité, conçus pour durer plusieurs semaines sans s’abîmer.',
                          'Choix de plus de 200 couleurs : Classiques, nude, pastel, éclatantes ou tendances : vous avez un nuancier large pour trouver exactement la teinte qui vous correspond.',
                          'Techniciennes expertes en finition fine et nette : Nos spécialistes maîtrisent la pose en bord très fin, la précision autour des cuticules et la brillance parfaite pour un résultat propre et élégant.',
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
                      description: `Pour une pose semi-permanente qui reste brillante plusieurs semaines, vous pouvez nous écrire pour un créneau.`,
                      buttonText: 'Envoyer un message pour les disponibilités',
                      buttonLink: 'https://dikidi.net/1891924?p=0.pi',
                    };
    constructor(private seoService: SeoService) {} // added constructor injection
    
      ngOnInit(): void {
        // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
        const seo = this.seoService.getSeoForService('serviceManucureSemiPermanant');
        this.seoService.applySeo(seo);
      }
    
}
