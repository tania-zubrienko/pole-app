import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';
import { FavouritesPage } from '../favourites/favourites.page';
import { CompletedPage } from '../completed/completed.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path: 'favourites',
    component: FavouritesPage,
  }
  ,
  {
    path: 'completed',
    component: CompletedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
