import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent   {
  constructor() {
  }
}
