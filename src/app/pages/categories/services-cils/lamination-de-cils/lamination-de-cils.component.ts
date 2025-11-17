import { Component } from '@angular/core';
import { CtaBannerDataType } from '../../../../components/cta-banner/cta-banner.component';
import { LocationDataType } from '../../../../components/dynamic-location-section/dynamic-location-section.component';
import { ServiceAbout } from '../../../../components/about-service-with-accordion/about-service-with-accordion.component';

@Component({
  selector: 'app-lamination-de-cils',
  templateUrl: './lamination-de-cils.component.html',
  styleUrl: './lamination-de-cils.component.css'
})









export class LaminationDeCilsComponent {
    /** carousel content */
        slides: Array<any> = [
          {
            title:
              'Lamination cils Marrakech : un effet naturel, recourbé et durable sans extensions',
            subtitle: '',
            description: `
                        La lamination cils Marrakech est idéale pour celles qui veulent un regard frais et naturel sans extensions ni mascara. 
                        Ce lash lift recourbe, définit et colore délicatement les cils pour un résultat propre et durable, parfait face à la chaleur de Marrakech. 
                        Une solution simple pour ouvrir le regard dès le réveil, même avec des cils droits ou difficiles à maquiller.
                        `,
            buttonText: 'Réserver',
            buttonLink: '/1891924?p=0.pi',
          },
        ];
      
        slideImage: string =
          'assets/images/extension_de_cils/Extension-cil-a-cil.jpg.webp';
        slideImageAlt: string =
          'Lamination de cils Marrakech';
      
        /****  Lopp Section ***/
        items: string[] = ['effet naturel'];
      
        // Section 3 service with accordionds
        servicesAbout: ServiceAbout | any = {
          id: 'nails',
          subtitle: '',
          title: 'Comment se déroule la lamination des cils',
          description: `La lamination est un soin complet qui restructure la forme des cils naturels.
                        C’est une prestation douce, adaptée à toutes les longueurs, même les cils courts.
                         Étapes du lash lift : 
                        `,
          features: [
            {
              title: '1. Nettoyage et préparation',
              points: [
                'On retire tout résidu pour que le soin tienne bien.',
              ],
              smallDesc: '',
            },
            {
              title: '2. Choix du degré de recourbement',
              points: [
                'On adapte selon votre forme d’œil et votre style : léger, moyen ou fort.',
              ],
              smallDesc: '',
            },
            {
              title: '3. Mise en place du silicone',
              points: [ 
                'On fixe les cils pour leur donner la nouvelle courbure.', 
                      ],
              smallDesc: '',
            },
            {
              title: '4. Application des lotions',
              points: [
                'Les produits restructurent la forme du cil naturel de manière douce.',
              ],
              smallDesc: '',
            },
            {
              title: '5. Teinture (optionnel, mais très demandé)',
              points: [
                ' Parfait pour intensifier le regard sans mascara.',
              ],
              smallDesc: '',
            },
             {
              title: '6. Soin nourrissant',
              points: [
                'Renforce les cils et les rend plus brillants.',
              ],
              smallDesc: '',
            },
          ],
          image: 'assets/images/extension_de_cils/extension1d.png',
          imageAlt: 'Extensions volume naturel Marrakech',
          imagePosition: 'left',
          conseil:
            'Durée : Entre 45 minutes et 1 heure., selon l’état de la pose. Résultat : Un effet recourbé, propre et naturel pendant 6 à 8 semaines.',
        };
      
        // secction 4
        highlightData: any = {
          subtitle: 'Sublimez votre beauté naturelle',
          title: 'Avantages de la lamination cils Marrakech',
          text: `La lamination est devenue l’une des prestations les plus populaires, car elle correspond parfaitement au mode de vie à Marrakech.`,
      
          features: [
            {
              title: 'Effet naturel garanti',
              points: ['Pas de pose, pas de colle, pas de volume artificiel.'],
              smallDesc: '',
            },
            {
              title: 'Pas de mascara nécessaire',
              points: ['Idéal pour celles qui vivent ou travaillent sous la chaleur.'],
              smallDesc: '',
            },
            {
              title: ' Résultat longue durée',
              points: ['Tient très bien malgré l’humidité et les activités.'],
              smallDesc: '',
            },
            {
              title: 'Ouvre le regard',
              points: ['Surtout si vous avez les cils droits ou tombants.'],
              smallDesc: '',
            },
            {
              title: 'Adapté aux cils courts ou fins',
              points: ['Le résultat reste joli même sur les petites longueurs.'],
              smallDesc: '',
            },
            {
              title: 'Très pratique au quotidien',
              points: ['Vous gagnez du temps chaque matin.'],
              smallDesc: '',
            },
            {
              title: 'Convient aux yeux sensibles',
              points: ['Aucun matériel lourd, aucune colle.'],
              smallDesc: '',
            },
            
            
          ],
          image: 'assets/images/sourcils/5.jpg',
          imageAlt: 'Avantages de la lamination cils Marrakech',
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
              title: 'Combien de temps dure une lamination ?',
              points: [
                'Entre 6 et 8 semaines selon votre routine.',
              ],
              smallDesc: '',
            },
            {
              title: 'Est-ce que ça abîme les cils ?',
              points: [
                'Non. Les produits sont doux et nourrissants.',
              ],
              smallDesc: '',
            },
            {
              title: 'Puis-je mettre du mascara ?',
              points: [
                'Oui, mais éviter les mascaras waterproof qui dessèchent.',
              ],
              smallDesc: '',
            },
            {
              title: 'La lamination résiste-t-elle à la chaleur ?',
              points: ['Oui, c’est l’un de ses plus grands avantages à Marrakech.'],
              smallDesc: '',
            },
            {
              title: 'Puis-je me mouiller les yeux ?',
              points: ['Pas pendant les 24 premières heures.'],
              smallDesc: '',
            },
            {
              title: 'Convient-elle aux cils courts ?',
              points: ['Oui. Le résultat reste visible et plus propre.'],
              smallDesc: '',
            },
            {
              title: 'Puis-je faire une extension après une lamination ?',
              points: ['Oui, mais il vaut mieux espacer les prestations.'],
              smallDesc: '',
            },
          ],
          image: 'assets/images/sourcils/5.png',
          imageAlt: 'lamination cils Marrakech',
          imagePosition: 'left',
          conseil: '',
        };
      
        // Section 7
        servicesDepose: any[] = [
          {
            id: 'LAMINATION-CILS-MARRAKECH',
            subtitle: '',
            title: 'Pourquoi choisir notre lamination cils à Marrakech',
            description: `
                          Chez Russiaville Beauty, on utilise une technique douce et des produits adaptés.
                          Notre objectif : un regard naturel, propre et harmonieux. Ce qui nous distingue :
              `,
            features: [
              'Recourbement adapté à votre forme d’œil',
              'Produits doux et nourrissants',
              'Zéro surtraitement',
              'Pas d’odeur forte',
              'Soin final protecteur',
              'Confort total pendant la pose',
              'Teinture en option',
              'Résultats harmonieux pendant plusieurs semaines',
            ],
            image: 'assets/images/extension_de_cils/extention_de_cils.jpg',
            imageAlt: 'Lamination de cils marrakech',
            imagePosition: 'left',
            conseil: `
                    Nous avons l’habitude de travailler avec des clientes aux cils très droits, fins ou difficiles à recourber.
                      
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
          descriptionTwo : "La lamination est très appréciée dans ces quartiers, car elle donne un rendu propre pour le travail, les sorties ou les voyages.",
              
        };
      
        // Section Cta
        ctaData: CtaBannerDataType = {
          description: `
                    Si vous souhaitez un regard naturel, recourbé et durable, vous pouvez réserver une lamination cils à Marrakech.
                    Vous pouvez aussi nous écrire pour poser vos questions ou vérifier les disponibilités.
              `,
          buttonText: 'Envoyer un message pour les disponibilités',
          buttonLink: 'https://dikidi.net/1891924?p=0.pi',
        };
}
