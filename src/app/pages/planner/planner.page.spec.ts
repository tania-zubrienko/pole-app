import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { plannerPage } from './planner.page';

describe('plannerPage', () => {
  let component: plannerPage;
  let fixture: ComponentFixture<plannerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [plannerPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(plannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
