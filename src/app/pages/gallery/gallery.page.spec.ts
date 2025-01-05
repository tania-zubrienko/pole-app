import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { GalleryPage } from './gallery.page';

describe('galleryPage', () => {
  let component: GalleryPage;
  let fixture: ComponentFixture<GalleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
