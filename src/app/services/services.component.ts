import { Component, OnInit } from '@angular/core';
import { SeoMeta, SeoService } from '../seo.service';

@Component({
  selector: 'app-services',
  template: `
    <section class="tarifs-page static-tarifs">
      <div class="container">
        <header class="page-header">
          <h4>Nos tarifs</h4>
          <h1>Nos tarifs pour une expérience unique</h1>
          <p>Découvrez nos prestations détaillées pour les ongles, les cils et les sourcils — qualité professionnelle, hygiène irréprochable et résultat sur mesure.</p>
        </header>

        <!-- Ongles -->
        <section class="tarifs-section ongles" id="ongles">
          <h2 [innerHTML]="pricingDataOngles.title"></h2>
          <p *ngIf="pricingDataOngles.description" [innerHTML]="pricingDataOngles.description"></p>

          <div class="columns">
            <div class="col">
              <div *ngFor="let cat of pricingDataOngles.leftColumn.categories">
                <h4>{{ cat.category }}</h4>
                <ul>
                  <li *ngFor="let it of cat.items">
                    <span class="name" [innerHTML]="it.name"></span>
                    <span class="price">{{ it.price }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col">
              <div *ngFor="let cat of pricingDataOngles.rightColumn.categories">
                <h4>{{ cat.category }}</h4>
                <ul>
                  <li *ngFor="let it of cat.items">
                    <span class="name" [innerHTML]="it.name"></span>
                    <span class="price">{{ it.price }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p class="note" [innerHTML]="pricingDataOngles.blockInfo"></p>
        </section>

        <!-- Cils -->
        <section class="tarifs-section cils" id="cils">
          <h2 [innerHTML]="pricingDataCils.title"></h2>
          <p *ngIf="pricingDataCils.description" [innerHTML]="pricingDataCils.description"></p>

          <div class="columns">
            <div class="col">
              <div *ngFor="let cat of pricingDataCils.leftColumn.categories">
                <h4>{{ cat.category }}</h4>
                <ul>
                  <li *ngFor="let it of cat.items">
                    <span class="name" [innerHTML]="it.name"></span>
                    <span class="price">{{ it.price }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col">
              <div *ngFor="let cat of pricingDataCils.rightColumn.categories">
                <h4>{{ cat.category }}</h4>
                <ul>
                  <li *ngFor="let it of cat.items">
                    <span class="name" [innerHTML]="it.name"></span>
                    <span class="price">{{ it.price }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p class="note" [innerHTML]="pricingDataCils.blockInfo"></p>
        </section>

        <!-- Sourcils -->
        <section class="tarifs-section sourcils" id="sourcils">
          <h2 [innerHTML]="pricingDataSourcils.title"></h2>
          <p *ngIf="pricingDataSourcils.description" [innerHTML]="pricingDataSourcils.description"></p>

          <div class="columns">
            <div class="col">
              <ul *ngIf="pricingDataSourcils.leftColumn?.items">
                <li *ngFor="let it of pricingDataSourcils.leftColumn.items">
                  <span class="name" [innerHTML]="it.name"></span>
                  <span class="price">{{ it.price }}</span>
                </li>
              </ul>
            </div>

            <div class="col">
              <ul *ngIf="pricingDataSourcils.rightColumn?.items">
                <li *ngFor="let it of pricingDataSourcils.rightColumn.items">
                  <span class="name" [innerHTML]="it.name"></span>
                  <span class="price">{{ it.price }}</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="note" [innerHTML]="pricingDataSourcils.blockInfo"></p>
        </section>

      </div>
    </section>
  `,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // Pricing data for Sourcils (Brows)
  pricingDataSourcils = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Sourcils',
    description: '',
    leftColumn: {
      items: [
        { name: 'Epilation sourcils', price: '100 dh' },
        { name: 'Coloration sourcils', price: '100 dh' }
      ]
    },
    rightColumn: {
      items: [
        { name: 'Brows lamination', price: '300 dh' },
        { name: 'All', price: '400 dh' }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

  // Pricing data for Cils (Lashes)
  pricingDataCils = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Cils',
    description: '',
    leftColumn: {
      categories: [
        {
          category: 'LASHES',
          items: [
            { name: 'Cil à cil', price: '(1 D) 400 dh' },
            { name: 'Natural volume', price: '(2 D) 500 dh' },
            { name: 'Russian volume', price: '(3 D) 600 dh' },
            { name: 'Mega volume', price: '(4 D) 700 dh' }
          ]
        },
        {
          category: 'REMPLISSAGE',
          items: [
            { name: 'Eyelash filler', price: '(1 D) 300 dh' },
            { name: 'Before', price: '(2 D) 400 dh' }
          ]
        }
      ]
    },
    rightColumn: {
      categories: [
        {
          category: 'CILS AU NATUREL',
          items: [
            { name: 'Lamination / Remplacement', price: '300 dh' },
            { name: 'Coloration cils', price: '50 dh' },
            { name: 'Remove / Dépose', price: '100 dh' },
            { name: 'Démaquillage', price: '50 dh' }
          ]
        },
        {
          category: 'REMPLISSAGE',
          items: [
            { name: '21 days max', price: '(3 D) 500 dh' },
            { name: '', price: '(4 D) 600 dh' }
          ]
        }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

  // Pricing data for Ongles (Nails)
  pricingDataOngles = {
    subtitle: 'Beauty Tarifs',
    title: 'Tarif des Ongles',
    description: '',
    leftColumn: {
      categories: [
        {
          category: 'NAILS',
          items: [
            { name: 'Manicure sans vernis', price: '200 dh' },
            { name: 'Manicure permanent', price: '300 dh' },
            { name: 'Manicure gel', price: '400 dh' },
            { name: 'Manicure gel extension', price: '600 dh' }
          ]
        },
        {
          category: 'NAIL OPTIONS',
          items: [
            { name: 'Dépose / Remove', price: '50 dh' },
            { name: 'French & ombré', price: '100 dh' }
          ]
        }
      ]
    },
    rightColumn: {
      categories: [
        {
          category: 'NAIL OPTIONS',
          items: [
            { name: 'Renforcement / repair', price: '50 dh' },
            { name: 'Design par ongle', price: '10 dh' }
          ]
        },
        {
          category: 'PEDICURE',
          items: [
            { name: 'Pedicure sans vernis', price: '300 dh' },
            { name: 'Pedicure semi permanent', price: '350 dh' },
            { name: 'Pedicure gel', price: '400 dh' },
            { name: 'Pedicure gel extension', price: '500 dh' }
          ]
        }
      ]
    },
    blockInfo: 'Contactez-nous pour réserver votre rendez-vous'
  };

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

  // Reviews data
  reviewsData = {
    subtitle: 'Elles en parlent',
    title: 'Ce que nos clientes disent de Russiaville Beauty',
    description: '',
    reviews: [
      {
        title: 'Extensions de cils parfaites',
        stars: 5,
        text: "J'ai adoré mes extensions de cils ! Le salon est propre, professionnel et l'équipe est adorable.",
        author: 'Émilie B.',
        avatar: 'assets/images/review-author-1.jpg',
        date: '12 août 2025'
      },
      {
        title: 'Sourcils impeccables',
        stars: 5,
        text: "Le résultat de mes sourcils était incroyable. J'ai reçu tellement de compliments. Merci Russiaville Beauty !",
        author: 'Sofia M.',
        avatar: 'assets/images/review-author-2.jpg',
        date: '03 juillet 2025'
      },
      {
        title: 'Manucure tenue longue durée',
        stars: 5,
        text: "Les ongles tiennent super bien et sont parfaitement réalisés. L'ambiance est agréable et relaxante.",
        author: 'Camille R.',
        avatar: 'assets/images/review-author-3.jpg',
        date: '21 juin 2025'
      },
      {
        title: 'Service attentionné !',
        stars: 5,
        text: "On se sent tout de suite à l'aise. Elles sont à l'écoute et très minutieuses. Une vraie pépite à découvrir !",
        author: 'Inès L.',
        avatar: 'assets/images/review-author-4.jpg',
        date: '08 mai 2025'
      },
      {
        title: 'Tout est parfait !',
        stars: 5,
        text: "J'ai testé les trois prestations : ongles, cils, sourcils. À chaque fois, c'est parfait. Je reviendrai, c'est sûr !",
        author: 'Laura D.',
        avatar: 'assets/images/review-author-5.jpg',
        date: '30 avril 2025'
      }
    ]
  };

  // FAQs data
  faqsData = {
    subtitle: 'Questions Fréquentes',
    title: 'Une question sur nos prestations ?',
    contactLink: '/contactez-nous',
    contactText: 'Vous ne trouvez pas votre réponse ?',
    faqs: [
      {
        question: 'Combien de temps durent les extensions de cils ?',
        answer: 'Les extensions tiennent entre 3 et 4 semaines. Nous conseillons un remplissage toutes les 2 à 3 semaines pour un effet optimal.',
        isActive: true
      },
      {
        question: 'Les poses d\'ongles conviennent-elles aux ongles fragiles ?',
        answer: 'Oui. Nous utilisons des produits professionnels respectueux des ongles naturels et adaptons nos techniques selon votre type d\'ongles.',
        isActive: false
      },
      {
        question: 'Où se trouve le salon ?',
        answer: 'Nous sommes situés à Avenue Yaacoub Almansour centre d\'affaire Sara Guéliz, 5e étage porte 25 — Marrakech . Vous pouvez retrouver l\'itinéraire exact sur notre page <a href="/contactez-nous">Contact</a>.',
        isActive: false
      },
      {
        question: 'Quels sont vos horaires d\'ouverture ?',
        answer: 'Nous sommes ouverts du mardi au samedi, de 10h à 19h. Fermé le dimanche et lundi. Nos horaires peuvent varier les jours fériés.',
        isActive: false
      },
      {
        question: 'Avez-vous un parking ou stationnement à proximité ?',
        answer: 'Oui, il y a des places de stationnement à proximité immédiate du salon. Stationnement gratuit les 30 premières minutes selon la zone.',
        isActive: false
      },
      {
        question: 'Comment prendre rendez-vous ?',
        answer: 'Directement en ligne via notre site, par téléphone ou Instagram. Nous vous conseillons de réserver à l\'avance, surtout en week-end.',
        isActive: false
      },
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons les paiements en espèces ou carte bancaire . Aucun paiement par chèque.',
        isActive: false
      },
      {
        question: 'Peut-on venir à deux ou en groupe ?',
        answer: 'Oui, sur réservation uniquement. Indiquez-le lors de la prise de rendez-vous pour que nous puissions organiser votre venue.',
        isActive: false
      },
      {
        question: 'Comment annuler ou déplacer un rendez-vous ?',
        answer: 'Contactez-nous au moins 24h à l\'avance pour tout changement. Toute annulation de dernière minute pourra entraîner des frais.',
        isActive: false
      }
    ]
  };

  // CTA Banner data
  ctaBannerData = {
    subtitle: 'Prête pour une transformation ?',
    title: 'Sublime ta beauté naturelle à Russiaville Beauty',
    description: 'Soin des ongles, extension de cils, sourcils parfaitement dessinés… Chez <strong>Russiaville Beauty</strong>, on révèle ta beauté avec élégance et précision.',
    buttonText: 'Prendre rendez-vous',
    buttonLink: 'https://dikidi.net/1891924',
    backgroundImage: 'url(/assets/images/banner-bg.jpg)'
  };

  constructor(private seoService: SeoService) {} // inject SeoService

  ngOnInit(): void {
    // Static tarifs page SEO
    const seo: SeoMeta = {
      title: 'Nos tarifs pour une expérience unique - Russiaville Beauty',
      description: 'Consultez nos tarifs détaillés pour les ongles, les cils et les sourcils. Prestations professionnelles, hygiène et qualité garantis.',
      image: 'assets/images/brand.png',
      keywords: 'tarifs, ongles, cils, sourcils, Russiaville Beauty',
      canonical: '/tarifs',
      ogType: 'website'
    };
    this.seoService.applySeo(seo);
  }
}

