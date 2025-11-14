import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
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

    // Statistics data
  statisticsData: any = {
    blocks: [
      { number: '8960', suffix: '+', label: 'Visites clients' },
      { number: '40', suffix: '+', label: 'Styliste certifié(e)s' },
      { number: '368', label: 'Couleurs de vernis' },
      { number: '96', suffix: ',8%', label: 'Client(e)s satisfait(e)s' }
    ]
  };

  galleryData = {
    images: [
      { id: 1, src: 'assets/images/gallery/1.png', alt: 'gallery-image' },
      { id: 2, src: 'assets/images/gallery/2.png', alt: 'gallery-image' },
      { id: 3, src: 'assets/images/gallery/3.png', alt: 'gallery-image' },
      { id: 4, src: 'assets/images/gallery/4.png', alt: 'gallery-image' },
      { id: 5, src: 'assets/images/gallery/5.png', alt: 'gallery-image' },
      { id: 6, src: 'assets/images/gallery/6.png', alt: 'gallery-image' },
      { id: 7, src: 'assets/images/gallery/7.png', alt: 'gallery-image' },
      { id: 8, src: 'assets/images/gallery/8.png', alt: 'gallery-image' },
      { id: 9, src: 'assets/images/gallery/9.png', alt: 'gallery-image' },
      { id: 10, src: 'assets/images/gallery/10.png', alt: 'gallery-image' },
      { id: 11, src: 'assets/images/gallery/11.png', alt: 'gallery-image' },
      { id: 12, src: 'assets/images/gallery/12.png', alt: 'gallery-image' },
      { id: 13, src: 'assets/images/gallery/13.png', alt: 'gallery-image' },
      { id: 14, src: 'assets/images/gallery/14.png', alt: 'gallery-image' },
      { id: 15, src: 'assets/images/gallery/15.png', alt: 'gallery-image' },
      { id: 16, src: 'assets/images/gallery/16.png', alt: 'gallery-image' },
      { id: 17, src: 'assets/images/gallery/17.png', alt: 'gallery-image' },
      { id: 18, src: 'assets/images/gallery/18.png', alt: 'gallery-image' }
    ],
    instagramLink: 'https://www.instagram.com/russiaville.beauty/'
  };
}
