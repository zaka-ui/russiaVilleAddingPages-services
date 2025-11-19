import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoMeta {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  robots?: string; // ← NEW
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  // Predefined SEO entries for the services
  private seoMap: { [key: string]: SeoMeta } = {
    ong1: {
      title: 'Ongles - Russiaville Beauty | Pose, manucure & soins',
      description:
        'Découvrez nos prestations professionnelles pour les ongles : pose de vernis, gel, résine, manucure et soins. Résultats soignés et durables chez Russiaville Beauty.',
      image: 'assets/images/gallery/5.png',
      keywords:
        'ongles, manucure, pose gel, Russiaville Beauty, vernis semi-permanent',
      canonical: '/tarifs/ongles',
      ogType: 'article',
      robots: 'index, follow'
    },
    cils: {
      title: 'Extensions de cils & rehaussement - Russiaville Beauty',
      description:
        'Sublimez votre regard avec nos extensions de cils, rehaussement et teinture. Techniques professionnelles adaptées à vos envies.',
      image: 'assets/images/s_lashes.png',
      keywords: 'extensions de cils, rehaussement, cils, Russiaville Beauty',
      canonical: '/tarifs/cils',
      ogType: 'article',
      robots: 'index, follow'
    },
    sourcils: {
      title: 'Sourcils - Design, microblading & restructuration',
      description:
        'Travail précis des sourcils : épilation, restructuration, microblading et stylisme. Pour un résultat naturel et harmonieux.',
      image: 'assets/images/s_brows.png',
      keywords: 'sourcils, microblading, restructuration, Russiaville Beauty',
      canonical: '/tarifs/sourcils',
      ogType: 'article',
      robots: 'index, follow' 
    },
    cilsPage: {
      title: 'Extensions de cils Marrakech – 1D à 4D, Remplissage & Lamination',
      description:
        'Pose 1D, 2D, volume russe, méga volume, remplissage, dépose et lamination à Marrakech. Résultats durables malgré la chaleur. Salon proche Guéliz.',
      image: 'assets/images/extension_de_cils/remplissage.webp',
      keywords: 'Extensions de cils Marrakech',
      canonical: '/extension-de-cils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    sourcilsPage: {
      title: 'Sourcils Marrakech – Brow lift, Teinture & Restructuration',
      description: 'Brow lamination, restructuration, teinture et épilation sourcils à Marrakech. Résultats naturels et durables. Salon proche Guéliz et Majorelle.',
      keywords: 'Sourcils Marrakech',
      canonical: '/sourcils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
     onglesPage: {
      title: 'Ongles Marrakech – Manucure gel, Semi-permanent & Nail art',
      description: 'Manucure gel, semi-permanent, extensions, dépose, pédicure gel et nail art à Marrakech. Résultats propres et durables. Salon proche Guéliz.',
      keywords: 'Ongles Marrakech',
      canonical: '/ongles-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    // services extensions start
    ServiceColorationCils  :{
      title: 'Coloration cils Marrakech – Teinture légère et effet naturel',
      description: 'Coloration cils Marrakech : teinture naturelle, effet plus dense sans mascara. Résultat durable malgré la chaleur. Salon proche Guéliz.',
      keywords: 'Coloration cils Marrakech',
      canonical: '/extension-de-cils/coloration-cils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceDeposeDeCils  :{
      title: 'Dépose extensions cils Marrakech – Retrait doux et sans douleur',
      description: 'Dépose extensions cils Marrakech : retrait doux, rapide et sans abîmer les cils naturels. Technique sécurisée et produits adaptés. Salon proche Guéliz.',
      keywords: 'Dépose extensions cils Marrakech',
      canonical: '/extension/depose-extensions-cils-a-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceExtensionMegaVolume  :{
      title: 'Extensions de cils mega volume Marrakech – Pose 4D intense',
      description: 'Extensions de cils mega volume 4D à Marrakech : résultat intense, profond et durable. Bouquets légers, confortables et adaptés au climat. Salon proche Guéliz.',
      keywords: 'Extensions de cils mega volume 4D à Marrakech ',
      canonical: '/extension/extension-de-cils-mega-volume-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
     serviceExtensionVolumeNaturel  :{
      title: 'Extensions de cils volume naturel Marrakech – Pose 2D légère',
      description: 'Extensions de cils volume naturel 2D à Marrakech : rendu doux, dense et léger. Pose adaptée à la chaleur, tenue longue et méthode douce. Salon proche Guéliz.',
      keywords: 'Extensions de cils volume naturel Marrakech',
      canonical: '/extension/extensions-de-cils-volume-naturel-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceExtensionVolume3D  :{
      title: 'Extensions volume Marrakech – Pose 3D / Volume russe',
      description: 'Extensions volume russe 3D à Marrakech : regard intense, dense et durable. Pose légère, confortable et adaptée au climat. Salon proche Guéliz.',
      keywords: 'Extensions de cils volume russe 3D à Marrakech',
      canonical: '/extension/extensions-de-cils-volume-3d-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceExtensionCilACil  :{
      title: 'Extensions cil à cil Marrakech – Pose naturelle 1D',
      description: 'Extensions cil à cil Marrakech 1D pour un effet naturel et durable. Pose légère, confortable et adaptée à la chaleur. Salon proche Guéliz.',
      keywords: 'Extensions cil à cil Marrakech',
      canonical: '/extension/cil-à-cil-a-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceLaminationCil  :{
      title: 'Lamination cils Marrakech – Lash lift naturel et longue tenue',
      description: 'Lamination cils Marrakech : cils recourbés, plus denses et naturels pendant 6 à 8 semaines. Résultat durable malgré la chaleur. Salon proche Guéliz.',
      keywords: 'Lamination cils Marrakech',
      canonical: '/extension-de-cils/lamination-cils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceRemplissageExtensionCils  :{
      title: 'Remplissage extensions cils Marrakech – Retouche 1D à 4D',
      description: 'Remplissage extensions cils Marrakech : retouche 1D, 2D, 3D et 4D. Ligne propre, volume uniforme et tenue longue malgré la chaleur. Salon proche Guéliz.',
      keywords: 'Remplissage extensions cils Marrakech',
      canonical: '/extension/remplissage-extensions-cils-a-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    // Service sourcils start 
    serviceBrowLamination  :{
      title: 'Brow lamination Marrakech – Sourcils liftés & naturels',
      description: 'Obtenez des sourcils disciplinés et naturellement liftés grâce au brow lamination à Marrakech. Résultat durable 6–8 semaines, idéal chaleur et regard structuré.',
      keywords: 'Brow lamination Marrakech',
      canonical: '/sourcils/brow-lamination-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceEpilationSourcils  :{
      title: 'Épilation sourcils Marrakech – Ligne naturelle & soignée',
      description: 'Épilation sourcils à Marrakech avec respect de votre ligne naturelle. Résultat propre, élégant et rapide. Méthode douce, idéale avant événements ou photos.',
      keywords: 'Épilation sourcils à Marrakech',
      canonical: '/sourcils/epilation-de-sourcils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceRestructionSourcils  :{
      title: 'Restructuration sourcils Marrakech – Ligne naturelle & harmonieuse',
      description: 'Restructuration sourcils à Marrakech pour corriger la forme, ouvrir le regard et rééquilibrer les sourcils. Technique précise, résultat naturel et durable.',
      keywords: 'Restructuration sourcils Marrakech',
      canonical: '/sourcils/restruction-sourcils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceTeintureSourcils  :{
      title: 'Teintur sourcils Marrakech – Regard intense & naturel',
      description: 'Teinture sourcils à Marrakech pour un regard plus intense sans maquillage. Résultat naturel, tient 2–3 semaines et résiste à la chaleur et aux activités.',
      keywords: 'Teinture sourcils à Marrakech',
      canonical: '/sourcils/teintre-sourcils-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },

    // Service ongle start 
    serviceDeposeOngles  :{
      title: 'Dépose ongles Marrakech – Retrait doux sans abîmer l’ongle',
      description: 'Dépose d’ongles à Marrakech réalisée sans douleur, sans abîmer l’ongle naturel. Technique douce, produits adaptés, soin hydratant inclus.',
      keywords: 'Dépose d’ongles à Marrakech',
      canonical: '/ongles/depose-ongles-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceNailArt :{
      title: 'Nail art Marrakech – Design personnalisé & longue tenue',
      description: 'Nail art à Marrakech : design personnalisé selon votre style. Tenue longue, techniques modernes, parfait pour événements, photos ou mariage.',
      keywords: 'nail art Marrakech, design ongles personnalisé, ongles artistiques, salon beauté Marrakech',
      canonical: '/ongles/art-et-design-ongles-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceExtensionOnglesGel  :{
      title: 'Extension ongles en gel Marrakech – Résultat solide & élégant',
      description: 'Extensions d’ongles en gel à Marrakech : structure solide, finition élégante et tenue longue même sous la chaleur. Idéal mariages, shootings ou look quotidien.',
      keywords: 'extension ongles gel Marrakech, pose gel, ongles solides Marrakech, salon manucure Marrakech',
      canonical: '/ongles/extensions-ongles-gel-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },
    serviceManucureSemiPermanant  :{
      title: 'Manucure semi-permanente Marrakech – Brillance & tenue longue',
      description: 'Manucure semi-permanente à Marrakech avec tenue 2–3 semaines sans s’écailler. Brillance durable malgré la chaleur. Produits professionnels et protocole précis.',
      keywords: 'Manucure semi permanente Marrakech, vernis longue tenue, salon beauté Marrakech, pose semi permanent',
      canonical: '/ongles/manucure-semi-permanente-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    },    
      servicePedicureGel  :{
      title: 'Pédicure gel Marrakech – Tenue 4 à 6 semaines & finition nette',
      description: 'Pédicure gel à Marrakech : tenue 4 à 6 semaines, couleur résistante à la chaleur et résultat propre et élégant. Idéal pour vacances, mariages et quotidien.',
      keywords: 'pédicure gel Marrakech, pédicure longue tenue, beauté pieds Marrakech, salon esthétique Marrakech',
      canonical: '/ongles/pedicure-gel-marrakech',
      ogType: 'article',
      robots: 'index, follow' 
    }, 

    default: {
      title: 'Russiaville Beauty - Salons & Tarifs',
      description:
        'Russiaville Beauty, votre salon pour ongles, cils et sourcils. Découvrez nos services et tarifs.',
      image: 'assets/images/brand.png',
      keywords: 'Russiaville Beauty, salon, beauté, ongles, cils, sourcils',
      canonical: '/',
      ogType: 'website',
      robots: 'index, follow'
    },
  };

  constructor(private title: Title, private meta: Meta) {}

  // Return the SEO metadata for a given service id (falls back to default)
  getSeoForService(id: string): SeoMeta {
    return this.seoMap[id] || this.seoMap['default'];
  }

  // Apply the SeoMeta to the document (title + common meta tags)
  applySeo(seo: SeoMeta) {
    if (!seo) {
      return;
    }
    // Title
    if (seo.title) {
      this.title.setTitle(seo.title);
    }

    // Basic meta tags
    if (seo.description) {
      this.meta.updateTag({ name: 'description', content: seo.description });
      this.meta.updateTag({
        property: 'og:description',
        content: seo.description,
      });
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
    if (seo.robots) {
      this.meta.updateTag({ name: 'robots', content: seo.robots });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' }); // default
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
