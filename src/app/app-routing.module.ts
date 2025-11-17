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
import { ExtensionVolumeNaturelComponent } from './pages/categories/services-cils/extension-volume-naturel/extension-volume-naturel.component';
import { ExtensionVolumeThreeDComponent } from './pages/categories/services-cils/extension-volume-three-d/extension-volume-three-d.component';
import { ExtensionVolumeMegaComponent } from './pages/categories/services-cils/extension-volume-mega/extension-volume-mega.component';
import { RemplissageExtensionsCilsMarrakechComponent } from './pages/categories/services-cils/remplissage-extensions-cils-marrakech/remplissage-extensions-cils-marrakech.component';
import { DeposeExtensionsCilsComponent } from './pages/categories/services-cils/depose-extensions-cils/depose-extensions-cils.component';
import { LaminationDeCilsComponent } from './pages/categories/services-cils/lamination-de-cils/lamination-de-cils.component';
import { ColorationCilsMarrakechComponent } from './pages/categories/services-cils/coloration-cils-marrakech/coloration-cils-marrakech.component';
import { BrowLaminationComponent } from './pages/categories/services-sourcils/brow-lamination/brow-lamination.component';
import { RestructionSourcilsComponent } from './pages/categories/services-sourcils/restruction-sourcils/restruction-sourcils.component';
import { TeintureSourcilsComponent } from './pages/categories/services-sourcils/teinture-sourcils/teinture-sourcils.component';
import { EpilationSourcilsComponent } from './pages/categories/services-sourcils/epilation-sourcils/epilation-sourcils.component';
import { ManucureSemiPermanenteComponent } from './pages/categories/services-ongles/manucure-semi-permanente/manucure-semi-permanente.component';
import { ExtensionOnglesGelComponent } from './pages/categories/services-ongles/extension-ongles-gel/extension-ongles-gel.component';
import { DeposeOnglesComponent } from './pages/categories/services-ongles/depose-ongles/depose-ongles.component';
import { PedicureGelComponent } from './pages/categories/services-ongles/pedicure-gel/pedicure-gel.component';
import { DesignOnglesComponent } from './pages/categories/services-ongles/design-ongles/design-ongles.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'tarifs', component: TousTarifsComponent },
  { path: 'tarifs/ongles', component: NailsComponent },
  { path: 'tarifs/cils', component: LashesComponent },
  { path: 'tarifs/sourcils', component: BrowsComponent },
  { path: 'tarifs/tous', component: TousTarifsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contactez-nous', component: ContactsUsComponent },
  { path: 'a-propos-de-nous', component: AboutUsComponent },
  { path: 'extension-de-cils-marrakech', component: ExtensionsDeCilsComponent },
  { path: 'sourcils-marrakech', component: SourcilsComponent },
  { path: 'ongles-marrakech', component: OnglesComponent },

  /****************************** Extension cils services routes *****************************************************/
  { path: 'extension/cil-à-cil-a-marrakech', component: ExtensionsCilAcilComponent }, 
  { path: 'extension/extensions-de-cils-volume-naturel-marrakech', component: ExtensionVolumeNaturelComponent }, 
  { path: 'extension/extensions-de-cils-volume-3d-marrakech', component: ExtensionVolumeThreeDComponent }, 
  { path: 'extension/extension-de-cils-mega-volume-marrakech', component: ExtensionVolumeMegaComponent }, 
  { path: 'extension/remplissage-extensions-cils-a-marrakech', component: RemplissageExtensionsCilsMarrakechComponent }, 
  { path: 'extension/depose-extensions-cils-a-marrakech', component: DeposeExtensionsCilsComponent },
  { path: 'extension-de-cils/lamination-cils-marrakech', component: LaminationDeCilsComponent }, 
  { path: 'extension-de-cils/coloration-cils-marrakech', component: ColorationCilsMarrakechComponent }, 

  /****************************** Sourcils services routes *****************************************************/
  { path: 'sourcils/brow-lamination-marrakech', component: BrowLaminationComponent },
  { path: 'sourcils/restruction-sourcils-marrakech', component: RestructionSourcilsComponent}, 
  { path: 'sourcils/teintre-sourcils-marrakech', component: TeintureSourcilsComponent }, 
  { path: 'sourcils/epilation-de-sourcils-marrakech', component: EpilationSourcilsComponent },

  /****************************** Ongles services Ongle *****************************************************/
  { path: 'ongles/manucure-semi-permanente-marrakech', component: ManucureSemiPermanenteComponent }, 
  { path: 'ongles/extensions-ongles-gel-marrakech', component: ExtensionOnglesGelComponent},
  { path: 'ongles/depose-ongles-marrakech', component: DeposeOnglesComponent },
  { path: 'ongles/pedicure-gel-marrakech', component: PedicureGelComponent }, 
  { path: 'ongles/art-et-design-ongles-marrakech', component: DesignOnglesComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
