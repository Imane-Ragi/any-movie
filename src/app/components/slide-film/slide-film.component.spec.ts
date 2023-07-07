import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFilmComponent } from './slide-film.component';

describe('SlideFilmComponent', () => {
  let component: SlideFilmComponent;
  let fixture: ComponentFixture<SlideFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideFilmComponent]
    });
    fixture = TestBed.createComponent(SlideFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
