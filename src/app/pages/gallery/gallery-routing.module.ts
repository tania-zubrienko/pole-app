import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPage } from './gallery.page';
import { BeginnerPage } from './pages/beginner/beginner.page';
import { IntermediatePage } from './pages/intermediate/intermediate.page';
import { AdvancedPage } from './pages/advanced/advanced.page';
import { ProPage } from './pages/pro/pro.page';
import { StarPage } from './pages/star/star.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage,
  },
  { path: 'beginner',component: BeginnerPage },
  { path: 'intermediate', component: IntermediatePage},
  { path: 'advanced',component: AdvancedPage },
  { path: 'pro', component: ProPage},
  { path: 'star',component: StarPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class galleryPageRoutingModule {}
