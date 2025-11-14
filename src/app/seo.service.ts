import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoMeta {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  // Predefined SEO entries for the services
  private seoMap: { [key: string]: SeoMeta } = {
    ong1: {
      title: 'Ongles - Russiaville Beauty | Pose, manucure & soins',
      description: 'Découvrez nos prestations professionnelles pour les ongles : pose de vernis, gel, résine, manucure et soins. Résultats soignés et durables chez Russiaville Beauty.',
      image: 'assets/images/gallery/5.png',
      keywords: 'ongles, manucure, pose gel, Russiaville Beauty, vernis semi-permanent',
      canonical: '/tarifs/ongles',
      ogType: 'article'
    },
    cils: {
      title: 'Extensions de cils & rehaussement - Russiaville Beauty',
      description: 'Sublimez votre regard avec nos extensions de cils, rehaussement et teinture. Techniques professionnelles adaptées à vos envies.',
      image: 'assets/images/s_lashes.png',
      keywords: 'extensions de cils, rehaussement, cils, Russiaville Beauty',
      canonical: '/tarifs/cils',
      ogType: 'article'
    },
    sourcils: {
      title: 'Sourcils - Design, microblading & restructuration',
      description: 'Travail précis des sourcils : épilation, restructuration, microblading et stylisme. Pour un résultat naturel et harmonieux.',
      image: 'assets/images/s_brows.png',
      keywords: 'sourcils, microblading, restructuration, Russiaville Beauty',
      canonical: '/tarifs/sourcils',
      ogType: 'article'
    },
    default: {
      title: 'Russiaville Beauty - Salons & Tarifs',
      description: 'Russiaville Beauty, votre salon pour ongles, cils et sourcils. Découvrez nos services et tarifs.',
      image: 'assets/images/brand.png',
      keywords: 'Russiaville Beauty, salon, beauté, ongles, cils, sourcils',
      canonical: '/',
      ogType: 'website'
    }
  };

  constructor(private title: Title, private meta: Meta) {}

  // Return the SEO metadata for a given service id (falls back to default)
  getSeoForService(id: string): SeoMeta {
    return this.seoMap[id] || this.seoMap['default'];
  }

  // Apply the SeoMeta to the document (title + common meta tags)
  applySeo(seo: SeoMeta) {
    if (!seo) { return; }
    // Title
    if (seo.title) {
      this.title.setTitle(seo.title);
    }

    // Basic meta tags
    if (seo.description) {
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({ property: 'og:description', content: seo.description });
    }
    if (seo.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    }
    if (seo.image) {
      this.meta.updateTag({ property: 'og:image', content: seo.image });
    }
    if (seo.canonical) {
      // Note: Angular Meta doesn't manage link[rel="canonical"]; components can set it manually if needed.
      this.meta.updateTag({ property: 'og:url', content: seo.canonical });
    }
    if (seo.ogType) {
      this.meta.updateTag({ property: 'og:type', content: seo.ogType });
    }
  }
}

/*
Usage hint (in a component):
// import { SeoService } from 'src/app/services/seo.service';
// constructor(private seoService: SeoService) {}
// ngOnInit() {
//   const seo = this.seoService.getSeoForService('ong1');
//   this.seoService.applySeo(seo);
//}
*/
