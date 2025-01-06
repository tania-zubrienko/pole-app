import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { FavouritesPage } from './pages/favourites/favourites.page';
import { CompletedPage } from './pages/completed/completed.page';


@NgModule({
  declarations: [ProfilePage, FavouritesPage, CompletedPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilePageRoutingModule,
  ],
  exports:[
    FavouritesPage, CompletedPage
  ]
})
export class ProfilePageModule {}
