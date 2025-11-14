import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { NailsComponent } from './nails/nails.component';
import { LashesComponent } from './lashes/lashes.component';
import { BrowsComponent } from './brows/brows.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactsUsComponent } from './contacts-us/contacts-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TousTarifsComponent } from './tous-tarifs/tous-tarifs.component';
import { ExtensionsDeCilsComponent } from './pages/categories/extensions-de-cils/extensions-de-cils.component';
import { SourcilsComponent } from './pages/categories/sourcils/sourcils.component';
import { OnglesComponent } from './pages/categories/ongles/ongles.component';
import { ExtensionsCilAcilComponent } from './pages/categories/services-cils/extensions-cil-acil/extensions-cil-acil.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'tarifs', component: TousTarifsComponent },
    { path: 'tarifs/ongles', component: NailsComponent },
    { path: 'tarifs/cils', component: LashesComponent },
    { path: 'tarifs/sourcils', component: BrowsComponent },
    { path: 'tarifs/tous', component: TousTarifsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'contactez-nous', component: ContactsUsComponent },
    { path: 'a-propos-de-nous', component: AboutUsComponent },
    { path: 'categorie/extension-de-cils-marrakech', component: ExtensionsDeCilsComponent },
    { path: 'categorie/sourcils-marrakech', component: SourcilsComponent },
    { path: 'categorie/ongles-marrakech', component: OnglesComponent },
    

    /****************************** Extension cils services routes *****************************************************/
    { path: 'categorie/extension-de-cils/cil-à-cil-a-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/extensions-volume-naturel-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/extensions-volume-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/extension-mega-volume-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/remplissage-extensions-cils', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/depose-extensions-cils', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/coloration-cils-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/extension-de-cils/lamination-cils-marrakech', component: ExtensionsCilAcilComponent }, // Change Component

    /****************************** Sourcils services routes *****************************************************/
    { path: 'categorie/sourcils/brow-lamination', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/sourcils/restruction-sourcils', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/sourcils/teintre-sourcils', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/sourcils/épilation-sourcils', component: ExtensionsCilAcilComponent }, // Change Component


     /****************************** Ongles services Ongle *****************************************************/
    { path: 'categorie/ongles/manucure-semi-permanente-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/ongles/extension-ongles-gel-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/ongles/depose-ongles-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/ongles/pedicure-gel-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    { path: 'categorie/ongles/art-et-design-ongles-marrakech', component: ExtensionsCilAcilComponent }, // Change Component
    
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
