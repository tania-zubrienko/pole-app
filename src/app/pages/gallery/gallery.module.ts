import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryPage } from './gallery.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { galleryPageRoutingModule } from './gallery-routing.module';
import { BeginnerPage } from './pages/beginner/beginner.page';
import { IntermediatePage } from './pages/intermediate/intermediate.page';
import { AdvancedPage } from './pages/advanced/advanced.page';
import { ProPage } from './pages/pro/pro.page';
import { StarPage } from './pages/star/star.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    galleryPageRoutingModule
  ],
  exports:[
    BeginnerPage,
    IntermediatePage,
    AdvancedPage,
    ProPage,
    StarPage
  ],
  declarations: [
    GalleryPage,
    BeginnerPage,
    IntermediatePage,
    AdvancedPage,
    ProPage,
    StarPage
  ]
})
export class GalleryPageModule {}
