import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';
import { SeoService } from '../../../../seo.service';

@Component({
  selector: 'app-teinture-sourcils',
  templateUrl: './teinture-sourcils.component.html',
  styleUrl: './teinture-sourcils.component.css'
})



export class TeintureSourcilsComponent {
    /** carousel content */
                slides: Array<any> = [
                  {
                    title:
                      'Teinture sourcils Marrakech : un regard plus foncé sans maquillage',
                    subtitle: '',
                    description: `
                              De nombreuses clientes de Guéliz et Sidi Ghanem choisissent la teinture sourcils Marrakech pour intensifier 
                              leur regard sans avoir à utiliser un crayon chaque matin.
                              La teinte résiste très bien à la chaleur et aux activités quotidiennes.
                                `,
                    buttonText: 'Réserver',
                    buttonLink: '/1891924?p=0.pi',
                  },
                ];
              
                slideImage: string =
                  'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
                slideImageAlt: string =
                  'Teinture sourcils Marrakech';
              
                /****  Lopp Section ***/
                items: string[] = ['Un regard plus foncé sans maquillage'];
              
                // Section 3 service with accordionds
                servicesAbout: ServiceAbout | any = {
                  id: 'Restructuration sourcils Marrakech',
                  subtitle: '',
                  title: 'Comment se déroule la prestation',
                  features: [
                    {
                      title: '1. Choix de la couleur adaptée à votre peau',
                      points: [
                        'Nous sélectionnons une teinte harmonisée à votre peau et à votre couleur naturelle de sourcils pour un résultat subtil et élégant.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: '2. Application de la teinture',
                      points: [
                        'La coloration est appliquée avec précision pour intensifier la ligne, combler visuellement les zones claires et apporter plus de définition.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: '3. Définition légère de la ligne',
                      points: [ 
                        'La couleur permet d’accentuer la forme naturelle du sourcil sans effet artificiel, pour un regard plus structuré mais toujours naturel.', 
                              ],
                      smallDesc: '',
                    },
                    {
                      title: '4. Nettoyage douxs',
                      points: [
                        'Après la pause, la teinture est retirée délicatement pour révéler une couleur uniforme, propre et bien définie.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: 'Possibilité d’associer à une restructuration ou un brow lamination Marrakech',
                      points: [
                        'Pour un résultat encore plus net et durable, la teinture peut être combinée à une restructuration ou à un brow lamination Marrakech, selon vos besoins.',
                      ],
                      smallDesc: '',
                    },
                    
                  ],
                  image: 'assets/images/extension_de_cils/extension1d.png',
                  imageAlt: 'Comment se déroule la prestation :  teinture de sourcils ',
                  imagePosition: 'left',
                  conseil : "Durée : 20 minutes - Une prestation rapide, efficace et idéale pour intensifier le regard sans maquillage."
                  
                };
              
                // secction 4
                highlightData: any = {
                  subtitle: 'Sublimez votre beauté naturelle',
                  title: 'Avantages de la teinture des sourcils',          
                  features: [
                    {
                      title: 'Regard plus profond sans maquillage',
                      points: ['La teinture intensifie la couleur des sourcils, donnant immédiatement plus de profondeur et de définition au regard, sans avoir besoin de crayon ou gel.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Couvre les poils clairs',
                      points: ['Elle colore les poils les plus fins et clairs, ce qui crée une ligne plus dense et uniforme, idéale pour les sourcils peu visibles.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Tient entre 2 et 3 semaines',
                      points: ['La teinture offre un résultat durable qui reste visible plusieurs semaines, parfait pour celles qui veulent une routine beauté simplifiée.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Résiste à la transpiration et à la chaleur',
                      points: ['Même avec la chaleur de Marrakech ou une journée active, la couleur reste nette et propre, sans couler ni s’estomper trop vite.'],
                      smallDesc: '',
                    },
                    {
                      title: 'Parfait pour les vacances, mariages, shooting',
                      points: ['C’est la solution idéale pour un regard soigné en toute occasion : voyages, événements, séances photo ou simplement un quotidien sans maquillage'],
                      smallDesc: '',
                    },    
                  ],
                  image: 'assets/images/sourcils/5.jpg',
                  imageAlt: 'Teinture sourcils Marrakech',
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
                      title: 'Ça tache la peau ?',
                      points: [
                        'La teinte colore légèrement la peau pendant 24–48h, puis s’estompe.',
                      ],
                      smallDesc: '',
                    },
                    {
                      title: 'Cela abîme les poils ?',
                      points: [
                        'Non, nos produits sont doux.',
                      ],
                      smallDesc: '',
                    },
                  
                    
                  ],
                  image: 'assets/images/sourcils/5.png',
                  imageAlt: 'Teinture sourcils faq',
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
                      'Teintes naturelles adaptées au type de peau',
                      'Rendu propre et non “dessiné”',
                      'Produits de qualité',
                    ],
                    image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
                    imageAlt: 'Salon Russiaville beauty marrakech',
                    imagePosition: 'right',
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
                              Vous pouvez nous écrire si vous voulez un résultat net et durable.
                                `,
                  buttonText: 'Envoyer un message pour les disponibilités',
                  buttonLink: 'https://dikidi.net/1891924?p=0.pi',
                };
    
  constructor(private seoService: SeoService) {} // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('serviceTeintureSourcils');
    this.seoService.applySeo(seo);
  }

}
