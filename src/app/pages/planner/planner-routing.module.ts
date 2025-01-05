import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { plannerPage } from './planner.page';

const routes: Routes = [
  {
    path: '',
    component: plannerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class plannerPageRoutingModule {}
