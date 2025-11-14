import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../components/cta-banner/cta-banner.component';
import { ContentSectionData } from '../../../components/content-section/content-section.component';
import { AccordionDataType } from '../../../components/see-more/see-more.component';
import { LocationDataType } from '../../../components/dynamic-location-section/dynamic-location-section.component';

@Component({
  selector: 'app-sourcils',
  templateUrl: './sourcils.component.html',
  styleUrl: './sourcils.component.css',
})
export class SourcilsComponent {
  /** carousel content */
      slides: Array<any> = [
        {
          title: 'Sourcils Marrakech : des lignes naturelles, propres et adaptées à chaque visage',
          subtitle: '',
          description: `
                      À Marrakech, beaucoup de clientes cherchent une solution pour des sourcils naturels et bien dessinés, malgré la chaleur et l’humidité.
                      Chez Russiaville Beauty, nous créons une ligne adaptée à votre visage, durable et harmonieuse.
                      Nos clientes de Guéliz, Majorelle, Hivernage et Sidi Ghanem viennent souvent avec les mêmes questions : durée du brow lift, repousse, teinture, forme idéale…
                      Ici, vous trouverez des réponses simples et toutes nos prestations sourcils à Marrakech.
                      `,
          buttonText: 'Réserver',
          buttonLink: '/1891924?p=0.pi',
        }
      ];
    
      slideImage : string = 'assets/images/sourcils/1.png';
      slideImageAlt : string = 'Sourcils Marrakech';
    
      /****  Lopp Section ***/
      items : string [] = ["Lignes naturelles, propres et adaptées à chaque visage "]
    
      /** second section start */
      data : ContentSectionData= {
        title : "Brow lamination Marrakech",
        description : "Le brow lamination est devenu l’une des demandes les plus fréquentes à Marrakech. Beaucoup de clientes ont des sourcils qui tombent, s’éparpillent ou ne gardent pas leur forme, surtout en été. La lamination vient résoudre tout ça.",
        buttonText : "Réserver",
        buttonLink : "Réserver",
        leftImage : {
          id : "1",
          src: "assets/images/sourcils/2.png",
          alt:"Extensions cil à cil Marrakech 2d"
        },
          rightImage : {
          id : "2",
          src: "assets/images/sourcils/3.png",
          alt: "Extensions cil à cil Marrakech 4d"
        },
        embeddedImage : {
          id : "3",
          src: "assets/images/sourcils/3.jpg",
          alt: "Extensions cil à cil Marrakech 3d"
        }
    
      }
      /****** accordion Data */
      accordionData: AccordionDataType = [
          {
            title: 'Ce que fait le brow lamination',
            points: [
              'Redresser les poils', 
              'Harmoniser la ligne', 
              'Donner un effet lifté' , 
              'Masquer les zones clairsemées' , 
              'Rendre les sourcils plus denses',
              'La tenue varie entre 6 et 8 semaines, même pendant les journées chaudes de Marrakech.'
            ]
          },
          {
            title: 'Pour qui ?',
            points: [
              'Sourcils qui manquent de structure', 
              'Poils qui descendent' , 
              'Sourcils indisciplinés' , 
              'femmes qui veulent un résultat durable' , 
              'Clientes qui ne veulent pas maquiller tous les jours'
            ]
          },
          {
            title: 'Conseils après la séance',
            points: [
              'Garder au sec pendant 24 heures', 
              'Brosser légèrement le matin' , 
              'Utiliser une huile nourrissante légère' , 
            ]
          }
        ];
    
      // Section 4 service with accordionds
       servicesAbout: any[] = [
        {
          id: 'nails',
          subtitle: '',
          title: 'Restructuration sourcils Marrakech',
          description: 'La restructuration des sourcils est essentielle pour redonner une forme propre et équilibrée. Beaucoup de clientes arrivent avec une ligne trop fine, trop arrondie ou mal équilibrée. Chez Russiaville Beauty, on commence par analyser votre visage avant de toucher un seul poil.',
          features: [
            {
              title : "Notre technique",
              points : [
                "Tracé de la ligne naturelle",
                "Observation de la symétrie",
                "Correction douce, sans affiner",
                "Nettoyage autour de la ligne",

              ],
              smallDesc : ""
            },
             {
              title : "La restructuration est idéale pour :",
              points : [
                "les sourcils trop épilés",
                "les zones vides",
                "les sourcils asymétriques",
                "les clientes qui veulent une ligne nette pour les événements",

              ],
              smallDesc : "Cette prestation est très demandée à Majorelle et Hivernage, où les clientes cherchent une ligne élégante mais naturelle."
            }
          ],
          image: 'assets/images/sourcils/5.png',
          imageAlt: 'Nails Service',
          imagePosition: 'left',
          conseil : 'Conseil : Éviter de toucher les poils entre deux séances pour garder la forme. ' 
        },
        
      ];
    
      // secction 5
      highlightData: any = {
        subtitle: 'Sublimez votre beauté naturelle',
        title: 'Teinture sourcils Marrakech',
        text: `La teinture des sourcils est une solution simple pour éviter le maquillage quotidien.
              Elle donne un effet plus dense, plus net, et peut corriger visuellement les zones moins fournies.`,
    
        features: [
            {
              title : "Avantages",
              points : [
                "Effet propre pendant 3 à 4 semaines",
                "Remplissage visuel des trous",
                "Couleur adaptée à votre teint",
                "Tenue même pendant les activités en extérieur",

              ],
              smallDesc : "La teinture sourcils est très utile si vous vivez à Marrakech et que vous voulez un résultat durable malgré le climat."
            },
             {
              title : "Pour qui ?",
              points : [
                "Sourcils clairs",
                "Sourcils irréguliers",
                "Maquillage difficile sur peau grasse",
                "Clientes actives ou sportives",
              ],
              smallDesc : ""
            }
        ],
        image: 'assets/images/sourcils/5.jpg',
        imageAlt: 'soin beauté ongles cils sourcils',
        imagePosition: 'right',
        conseil : 'C’est aussi la prestation préférée des touristes qui veulent un regard net sans maquillage pendant tout leur séjour.'
      };
    
      /* Section 6
        highlightDataDepose: any = {
          subtitle: '',
          title: 'Dépose ongles Marrakech',
          text: `La dépose doit être douce pour ne pas abîmer l’ongle naturel.
                Beaucoup de clientes viennent avec des ongles fragilisés à cause de dépôts mal faits ailleurs.`,
      
          features: [
            'Limage léger',
            'Produit adapté',
            'Aucune traction',
            'Nettoyage précis',
            'Hydratation de l’ongle naturel',
          ],
          textSecond : "Quand faire une dépose ?",
          featuresSecond : [
            'Gel trop épais',
            'Gel qui se soulève',
            'Besoin de repartir sur une base saine',
            'Envie de faire une pause',
          ],
          image: 'assets/images/gallery/15.png',
          imageAlt: 'soin beauté ongles cils sourcils',
          imagePosition: 'right',
          conseil : 'Ne jamais tirer sur le gel à la maison. Cela abîme fortement la plaque de l’ongle.'
        };
      */
    
      // Section 7
       servicesDepose: any[] = [
        {
          id: 'nails',
          subtitle: '',
          title: 'Épilation sourcils Marrakech',
          description: 'L’épilation sourcils doit rester précise et douce. Beaucoup de clientes viennent parce qu’elles ont été trop épilées ailleurs ou que la forme a perdu sa symétrie.',
          features: [
            'Epilation douce, sans affiner',
            'Respect de la ligne naturelle',
            'Nettoyage au fil ou à la pince',
            'Travail précis autour de l’arc',
            'Conseils selon la repousse',
          ],
          image: 'assets/images/sourcils/4.png',
          imageAlt: 'Dépose ongles Marrakech',
          imagePosition: 'left',
          conseil : `
                    Résultat : Une ligne nette, naturelle, sans trou et adaptée à votre visage.
                    Nous évitons toujours l’effet “sourcil trop fin”, un problème encore fréquent à Marrakech.
                    `   
        },
      ];
  
      // Section 8
         
      locationSectionData : LocationDataType = {
          title : "Sourcils Marrakech & quartiers proches",
          description : "Nos prestations sourcils sont adaptées au mode de vie des clientes de Marrakech. Nous recevons chaque jour des clientes de :",
          locations : [
            { name: 'Guéliz', icon: '📍' },
            { name: 'Majorelle', icon: '📍' },
            { name: 'Hivernage', icon: '📍' },
            { name: 'Sidi Ghanem', icon: '📍' },
            { name: 'Route de Casa', icon: '📍' },
            { name: 'Centre-ville', icon: '📍' }
          ],
          descriptionTwo : "La chaleur du Maroc influence souvent :",
          points : [
            { name: 'La tenue de la teinture', icon: '✦' },
            { name: 'La direction des poils', icon: '✦' },
            { name: 'La répousse', icon: '✦' },
            { name: 'La discipline du sourcil', icon: '✦' }
          ],
          descriptionThree : "C’est pour ça que nos techniques sont ajustées selon la saison. En été, par exemple, on adapte la coloration pour éviter qu’elle s’éclaircisse trop vite.",
        }
      
  
  
      // Section Cta 
      ctaData : CtaBannerDataType = {
            subtitle : "Des techniques adaptées à votre visage, votre style et la vie quotidienne sous le soleil de Marrakech.",
            title : "Sublimez vos sourcils naturellement à Marrakech",
            description : "Si vous cherchez une solution naturelle et durable pour vos sourcils à Marrakech, vous pouvez nous envoyer un message pour connaître les disponibilités ou poser vos questions.",
            buttonText : "Envoyer un message pour les disponibilités",
            buttonLink : "https://dikidi.net/1891924?p=0.pi",
      }
}
