import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryPage } from './gallery.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { galleryPageRoutingModule } from './gallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    galleryPageRoutingModule
  ],
  declarations: [GalleryPage]
})
export class GalleryPageModule {}
