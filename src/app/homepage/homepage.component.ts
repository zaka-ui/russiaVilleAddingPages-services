import { AfterViewInit, Component, ElementRef, ViewChildren, QueryList, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',

  styleUrls: ['./homepage.component.css'] // <-- fix here
})
export class HomepageComponent implements OnInit { // added implements OnInit
  slideImage: string = 'assets/images/hero-3-img.jpg'
  slideImageAlt: string = "'jdozjdoadjozad'"

  slides: any[] = [
    {
      subtitle: 'Des ongles qui parlent de vous',
      title: 'Des Ongles Qui Vous Définissent',
      description: 'Perfectionnez chaque détail avec nos prestations d’onglerie haut de gamme chez <strong>Russiaville Beauty</strong>.',
      buttonText: 'Découvrir Nos Services',
      buttonLink: '#ongles'
    },

  ];

  // Items used by the loop text carousel (short labels that repeat)
  loopItems: string[] = [
    'Ongles', 'Cils', 'Sourcils'
  ];

  // Services data for about sections
  servicesAbout: any[] = [
    {
      id: 'nails',
      subtitle: 'Beauté des ongles',
      title: 'Des ongles élégants, <br> à votre image',
      description: 'Offrez à vos mains une touche d\'élégance avec notre service de manucure professionnelle. Techniques modernes, couleurs tendance, et respect de la santé de vos ongles.',
      features: [
        'Designs personnalisés',
        'Produits de qualité supérieure',
        'Stérilisation médicale'
      ],
      image: 'assets/images/img-22.png',
      imageAlt: 'Nails Service',
      imagePosition: 'left'
    }
  ];

  // About intro data
  aboutIntroData: any = {
    subtitle: 'Il est temps d\'être belle',
    description: 'Nos talentueuses techniciennes sont prêtes à réaliser des manucures et pédicures inspirées des dernières tendances. Des finitions élégantes, une tenue longue durée, et une qualité qui vous fera revenir.'
  };

  // Services boxes data
  servicesBoxesData: any = {
    services: [
      {
        id: 'nails-box',
        icon: 'flaticon-manicure-7',
        title: 'Ongles',
        description: 'Manucures, pédicures et soins des ongles avec des produits de haute qualité pour un résultat impeccable.'
      },
      {
        id: 'lashes-box',
        icon: 'flaticon-eyelashes',
        title: 'Cils',
        description: 'Rehaussement, extensions ou volume russe – sublimez votre regard avec un résultat naturel et glamour.'
      },
      {
        id: 'brows-box',
        icon: 'flaticon-eyebrow',
        title: 'Sourcils',
        description: 'Épilation, restructuration ou teinture – redessinez vos sourcils pour mettre en valeur vos traits.'
      }
    ],
    blockInfo: 'Sublimez votre <a href="/tarifs"> beauté naturelle</a> grâce à nos services haut de gamme'
  };

  // Highlight (ct-07) section data
  highlightData: any = {
    subtitle: 'Sublimez votre beauté naturelle',
    title: 'Ongles. Cils. Sourcils.',
    text: `Vivez l’expérience d’un soin complet où chaque détail compte. De la brillance de vos ongles à la courbure parfaite de vos cils, en passant par la définition de vos sourcils, nous révélons votre éclat naturel avec élégance et précision.`,
    features: [
      'Résultats longue durée et naturels',
      'Techniciennes expertes & passionnées',
      'Hygiène irréprochable et produits de qualité'
    ],
    image: 'assets/images/img-55.png',
    imageAlt: 'soin beauté ongles cils sourcils',
    imagePosition: 'right'
  };

  // Pricing data
  pricingData: any = {
    subtitle: 'Laissez votre beauté briller',
    title: 'Offrez-vous un moment de détente',
    description: `Nous partageons des conseils d'experts, les dernières tendances en beauté et des soins de qualité pour sublimer votre style`,
    leftColumn: {
      items: [
        { name: 'Épilation sourcils', price: '100 DH' },
        { name: 'Coloration sourcils', price: '100 DH' },
        { name: 'Lamination sourcils', price: '300 DH' },
        { name: 'Rehaussement de cils', note: 'Lamination', price: '300 DH' },
        { name: 'Extensions classiques', note: 'Volume 1D', price: '400 DH' },
        { name: 'Volume russe (3D)', price: '600 DH' }
      ]
    },
    rightColumn: {
      items: [
        { name: 'Manucure simple', note: 'Sans vernis', price: '200 DH' },
        { name: 'Manucure permanent', price: '300 DH' },
        { name: 'Manucure gel', price: '400 DH' },
        { name: 'Pédicure simple', note: 'Petiteure sans vernis', price: '300 DH' },
        { name: 'Pédicure gel', price: '400 DH' },
        { name: 'Extensions gel', note: 'Pour mains ou pieds', price: '600 DH' }
      ]
    },
    blockInfo: `Prenez soin de vous avec Russiaville Beauty. <a href="/tarifs">Voir tous nos services</a>`
  };

  // Content section (ct-05) data
  contentSectionData: any = {
    subtitle: 'L\'élégance au bout des doigts',
    title: 'Sublimez votre beauté, vivez l\'expérience Russieville Beauty',
    description: `Bien plus qu'un salon, un véritable cocon de beauté. Notre équipe experte révèle votre éclat à travers des prestations personnalisées pour vos ongles, cils et sourcils. Chaque rendez-vous devient un moment de plaisir et de confiance.`,
    buttonText: 'Découvrir la galerie',
    buttonLink: '/photos',
    leftImage: {
      id: 'ct-5-1',
      src: 'assets/images/sourcils_image.png',
      alt: 'image contenu'
    },
    rightImage: {
      id: 'ct-5-3',
      src: 'assets/images/cils_image.png',
      alt: 'image contenu'
    },
    embeddedImage: {
      id: 'ct-5-2',
      src: 'assets/images/gallery/8.png',
      alt: 'image contenu'
    }
  };

  // Reviews data
  reviewsData: any = {
    subtitle: 'Nos clientes heureuses',
    title: 'Des avis authentiques & Real Reviews',
    description: `Découvrez pourquoi nos clientes choisissent <strong>Russiaville Beauty</strong> pour sublimer leurs ongles et cils.`,
    reviews: [
      {
        stars: 5,
        text: '"Service parfait pour mes ongles en gel, je suis conquise !"',
        author: 'Anaïs B.',
        avatar: 'assets/images/review-author-1.jpg'
      },
      {
        stars: 4.5,
        text: '"Première pose de cils et je suis bluffée par le résultat !"',
        author: 'Sophie M.',
        avatar: 'assets/images/review-author-2.jpg'
      },
      {
        stars: 5,
        text: '"L\'accueil est chaleureux et le résultat est toujours impeccable."',
        author: 'Jade K.',
        avatar: 'assets/images/review-author-3.jpg'
      },
      {
        stars: 5,
        text: '"Mes extensions de cils tiennent super bien, même après 3 semaines !"',
        author: 'Camille R.',
        avatar: 'assets/images/review-author-4.jpg'
      },
      {
        stars: 4.5,
        text: '"Salon propre, équipe professionnelle, je recommande vivement."',
        author: 'Layla H.',
        avatar: 'assets/images/review-author-5.jpg'
      },
      {
        stars: 5,
        text: '"Résultat incroyable pour mes ongles en acrylique, je suis fan !"',
        author: 'Sabrina L.',
        avatar: 'assets/images/review-author-6.jpg'
      },
      {
        stars: 4.5,
        text: '"Pose rapide et sans douleur, mes cils sont superbes !"',
        author: 'Claire M.',
        avatar: 'assets/images/review-author-7.jpg'
      },
      {
        stars: 5,
        text: '"Le personnel est adorable, je reviens chaque mois pour mes retouches !"',
        author: 'Nora E.',
        avatar: 'assets/images/review-author-8.jpg'
      },
      {
        stars: 5,
        text: '"J\'ai enfin trouvé LE salon qui respecte mes envies à chaque fois."',
        author: 'Emma S.',
        avatar: 'assets/images/review-author-9.jpg'
      }
    ]
  };

  // Working hours data
  workingHoursData: any = {
    title: 'Horaires d\'ouverture',
    hours: [
      { day: 'Lundi – Dimanche', time: '10h00 - 20h00' }
    ],
    buttonText: 'Réserver en ligne',
    buttonLink: 'https://dikidi.net/1891924',
    leftImage: 'assets/images/ct-04-1.jpg',
    rightImage: 'assets/images/ct-04-2-01.png'
  };

  // Statistics data
  statisticsData: any = {
    blocks: [
      { number: '8960', suffix: '+', label: 'Visites clients' },
      { number: '40', suffix: '+', label: 'Styliste certifié(e)s' },
      { number: '368', label: 'Couleurs de vernis' },
      { number: '96', suffix: ',8%', label: 'Client(e)s satisfait(e)s' }
    ]
  };

  // Gallery data
  galleryData: any = {
    instagramHandle: 'russiaville.beauty',
    images: [
      { id: 'img-3-1', src: 'assets/images/gallery/17.png' },
      { id: 'img-3-2', src: 'assets/images/gallery/2.png' },
      { id: 'img-3-3', src: 'assets/images/gallery/3.png' },
      { id: 'img-3-4', src: 'assets/images/gallery/4.png' },
      { id: 'img-3-5', src: 'assets/images/gallery/5.png' },
      { id: 'img-3-6', src: 'assets/images/gallery/6.png' },
      { id: 'img-3-7', src: 'assets/images/gallery/7.png' },
      { id: 'img-3-8', src: 'assets/images/gallery/8.png' },
      { id: 'img-3-9', src: 'assets/images/gallery/9.png' },
      { id: 'img-3-10', src: 'assets/images/gallery/10.png' },
      { id: 'img-3-11', src: 'assets/images/gallery/11.png' },
      { id: 'img-3-12', src: 'assets/images/gallery/12.png' }
    ]
  };

  constructor(private seoService: SeoService) { } // added constructor injection

  ngOnInit(): void {
    // apply default SEO for the homepage (falls back to 'default' defined in SeoService)
    const seo = this.seoService.getSeoForService('default');
    this.seoService.applySeo(seo);
  }

}

