import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'] // fixed property name
})
export class AboutUsComponent implements OnInit { // added OnInit
  
  // Services Features data
  servicesFeaturesData = {
    boxes: [
      {
        id: 'sb-5-1',
        icon: 'flaticon-slippers',
        title: 'Ambiance <br> chaleureuse',
        text: 'Un cadre accueillant et confortable pour votre bien-être',
        delay: 'delay-2'
      },
      {
        id: 'sb-5-2',
        icon: 'flaticon-group',
        title: 'Équipe de professionnels',
        text: 'Des experts passionnés à votre service pour des soins de qualité',
        delay: 'delay-3'
      },
      {
        id: 'sb-5-3',
        icon: 'flaticon-skin-care-2',
        title: 'Matériaux professionnels',
        text: 'Nous utilisons des produits haut de gamme pour chaque prestation',
        delay: 'delay-4'
      },
      {
        id: 'sb-5-4',
        icon: 'flaticon-calendar-1',
        title: 'Réservation en ligne facile',
        text: 'Réservez votre rendez-vous en quelques clics, rapidement et simplement',
        delay: 'delay-5'
      }
    ]
  };

  // CTA Banner data
  ctaBannerData = {
    subtitle: 'C’est le moment de changer !',
    title: 'Sublimez votre beauté naturelle avec <br> Russiaville Beauty',
    description: 'Profitez de soins personnalisés dans une ambiance chaleureuse. Notre équipe passionnée vous accompagne pour révéler votre éclat.',
    buttonText: 'Réserver en ligne',
    buttonLink: 'https://dikidi.net/1891924',
    backgroundImage: '../../assets/images/bg-01.jpg'
  };


    // About Section data
  aboutSectionData = {
    subtitle: 'Russiaville Beauty',
    title: 'Sublimez votre regard <br> et vos mains',
    description: 'Chez <strong>Russiaville Beauty</strong>, nous révélons votre beauté naturelle avec nos prestations haut de gamme en manucure, extensions de cils et restructuration des sourcils. Une expertise professionnelle dans une ambiance élégante et relaxante.',
    image: 'assets/images/RUSSIABEAUTY.png',
    imageAlt: 'Nails Service',
    checkpoints: [
      'Designs d\'ongles modernes et personnalisés',
      'Extensions de cils effet naturel ou glamour',
      'Restructuration et teinture des sourcils',
      'Hygiène irréprochable et matériel stérilisé'
    ]
  }

  constructor(private seoService: SeoService) {} // inject SeoService

  ngOnInit(): void {
    const seo: SeoMeta = {
      title: 'À propos — Russiaville Beauty',
      description: this.aboutSectionData?.description?.replace(/<[^>]*>/g, '') || 'Découvrez Russiaville Beauty : manucure, extensions de cils et restructuration des sourcils dans un cadre professionnel.',
      image: this.aboutSectionData?.image || 'assets/images/brand.png',
      keywords: 'à propos, Russiaville Beauty, salon beauté, ongles, cils, sourcils',
      canonical: '/a-propos',
      ogType: 'website'
    };
    this.seoService.applySeo(seo);
  }
}
