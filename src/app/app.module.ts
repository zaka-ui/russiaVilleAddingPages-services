import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NailsComponent } from './nails/nails.component';
import { LashesComponent } from './lashes/lashes.component';
import { BrowsComponent } from './brows/brows.component';
import { TousTarifsComponent } from './tous-tarifs/tous-tarifs.component';
import { FormsModule } from '@angular/forms';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { LoopCarouselComponent } from './components/loop-carousel/loop-carousel.component';
import { AboutServicesComponent } from './components/about-services/about-services.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { ServicesBoxesComponent } from './components/services-boxes/services-boxes.component';
import { HighlightSectionComponent } from './components/highlight-section/highlight-section.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingHeroComponent } from './components/pricing-hero/pricing-hero.component';
import { PricingShowcaseComponent } from './components/pricing-showcase/pricing-showcase.component';
import { ServicesFeaturesComponent } from './components/services-features/services-features.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { ReviewsBgsComponent } from './components/reviews-bgs/reviews-bgs.component';
import { AllGalleryComponent } from './components/all-gallery/all-gallery.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ExtensionsDeCilsComponent } from './pages/categories/extensions-de-cils/extensions-de-cils.component';
import { SourcilsComponent } from './pages/categories/sourcils/sourcils.component';
import { OnglesComponent } from './pages/categories/ongles/ongles.component';
import { HighlightsWithLocationComponent } from './components/highlights-with-location/highlights-with-location.component';
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { AboutServiceWithAccordionComponent } from './components/about-service-with-accordion/about-service-with-accordion.component';
import { HighlightSectionWithAccordionComponent } from './components/highlight-section-with-accordion/highlight-section-with-accordion.component';
import { DynamicLocationSectionComponent } from './components/dynamic-location-section/dynamic-location-section.component';
import { ExtensionsCilAcilComponent } from './pages/categories/services-cils/extensions-cil-acil/extensions-cil-acil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    HomepageComponent,
    ServicesComponent,
    BlogsComponent,
    ContactsUsComponent,
    PhotosComponent,
    AboutUsComponent,
    NailsComponent,
    LashesComponent,
    BrowsComponent,
    TousTarifsComponent,
    HeroCarouselComponent,
    LoopCarouselComponent,
    AboutServicesComponent,
    AboutIntroComponent,
    ServicesBoxesComponent,
    HighlightSectionComponent,
    PricingComponent,
    ContentSectionComponent,
    ReviewsComponent,
    WorkingHoursComponent,
    StatisticsComponent,
    GalleryComponent,
    PricingHeroComponent,
    PricingShowcaseComponent,
    ServicesFeaturesComponent,
    FaqsComponent,
    CtaBannerComponent,
    ReviewsBgsComponent,
    AllGalleryComponent,
    AboutSectionComponent,
    ExtensionsDeCilsComponent,
    SourcilsComponent,
    OnglesComponent,
    HighlightsWithLocationComponent,
    SeeMoreComponent,
    AboutServiceWithAccordionComponent,
    HighlightSectionWithAccordionComponent,
    DynamicLocationSectionComponent,
    ExtensionsCilAcilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
