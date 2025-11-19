import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-extension-ongles-gel',
  templateUrl: './extension-ongles-gel.component.html',
  styleUrl: './extension-ongles-gel.component.css'
})
export class ExtensionOnglesGelComponent {
         /** carousel content */
                        slides: Array<any> = [
                          {
                            title:
                              'Extension ongles gel Marrakech',
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
                          'Extension ongles gel Marrakech';
                      
                        /****  Lopp Section ***/
                        items: string[] = ['Finition fine, propre et impeccable'];
                      
                        // Section 3 service with accordionds
                        servicesAbout: ServiceAbout | any = {
                          id: 'Extension ongles gel Marrakech',
                          subtitle: '',
                          title: 'Comment se déroule la prestation',
                          features: [
                            {
                              title: '1. Préparation de l’ongle',
                              points: [
                                'L’ongle est nettoyé, matifié et préparé pour assurer une excellente adhérence du gel.',
                              ],
                              smallDesc: '',
                            },
                            {
                              title: '2. Pose du chablon ou capsule',
                              points: [
                                'Selon votre ongle, on place un chablon ou une capsule pour créer une extension solide et parfaitement alignée.',
                              ],
                              smallDesc: '',
                            },
                            {
                              title: '3. Construction en gel sculpté',
                              points: [ 
                                'Le gel est sculpté avec précision pour former une extension résistante, fine et élégante.', 
                                      ],
                              smallDesc: '',
                            },
                            {
                              title: '4. Mise en forme adaptée à votre style',
                              points: [
                                'Carré, amande, ballerine, coffin : la forme est travaillée selon vos goûts et la structure de vos doigts.',
                              ],
                              smallDesc: '',
                            },
                            {
                              title: '5. Application couleur ou French',
                              points: [
                                'Vous choisissez une teinte, un French classique ou un effet naturel selon votre style.',
                              ],
                              smallDesc: '',
                            },
                            {
                              title: '6. Finition brillante ou mate',
                              points: [
                                'Une finition au choix scelle le gel pour un résultat durable, net et parfaitement lisse.',
                              ],
                              smallDesc: '',
                            },
                            
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
                              title: 'Résultat solide et élégant',
                              points: ['Les extensions en gel offrent une structure résistante tout en gardant une apparence fine et raffinée.'],
                              smallDesc: '',
                            },
                            {
                              title: 'Idéal pour les ongles cassants ou courts',
                              points: ['Le gel renforce les ongles fragiles et permet d’obtenir immédiatement la longueur que vous souhaitez.'],
                              smallDesc: '',
                            },
                            {
                              title: 'Longue tenue malgré la chaleur',
                              points: ['Même avec la chaleur de Marrakech, le gel reste stable, sans fissures ni décollement.'],
                              smallDesc: '',
                            },
                            {
                              title: 'Toutes les formes possibles : carré, amande, coffin, long ou court',
                              points: ['La technique permet de créer exactement la forme et la longueur que vous aimez, avec une grande précision.'],
                              smallDesc: '',
                            },
                            {
                              title: 'Compatible avec le nail art Marrakech',
                              points: ['Strass, motifs, dessin fin ou effet naturel : les extensions en gel accueillent parfaitement toutes les créations artistiques.'],
                              smallDesc: '',
                            },    
                          ],
                          image: 'assets/images/sourcils/5.jpg',
                          imageAlt: 'Avantages d\'extension ongles gel Marrakech',
                          imagePosition: 'right',
                          conseil: '',
                        };
                      
                        faqData: ServiceAbout | any = {
                          id: 'Extension ongles gel Marrakech',
                          subtitle: '',
                          title: 'Questions fréquentes',
                          description: ``,
                          features: [
                            {
                              title: '“Ça tient combien de temps ?”',
                              points: [
                                '3 à 4 semaines selon la repousse.',
                              ],
                              smallDesc: '',
                            },
                            {
                              title: 'Est-ce que ça fait mal ?',
                              points: [
                                'Non, nous utilisons une technique douce sans chauffe.',
                              ],
                              smallDesc: '',
                            },
                             {
                              title: 'Je peux choisir la longueur ?',
                              points: [
                                ' Oui, du naturel au long glamour.',
                              ],
                              smallDesc: '',
                            },
                            
                          ],
                          image: 'assets/images/sourcils/5.png',
                          imageAlt: 'Extension ongles gel Marrakech faq',
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
                              'Gel professionnel haute qualité',
                              'Formes nettes et symétriques',
                              'Expertise en constructions fines',
                              'Choix de designs modernes',
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
                          description: `Écrivez-nous si vous souhaitez des extensions gel solides et élégantes à Marrakech.`,
                          buttonText: 'Envoyer un message pour les disponibilités',
                          buttonLink: 'https://dikidi.net/1891924?p=0.pi',
                        };

    constructor(private seoService: SeoService) {} // added constructor injection
  
    ngOnInit(): void {
      // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
      const seo = this.seoService.getSeoForService('serviceExtensionOnglesGel');
      this.seoService.applySeo(seo);
    }
}
