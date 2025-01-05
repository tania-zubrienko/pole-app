import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { plannerPage } from './planner.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { plannerPageRoutingModule } from './planner-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    plannerPageRoutingModule
  ],
  declarations: [plannerPage]
})
export class plannerPageModule {}
