import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsRatingNumberComponent } from './nps-rating-number.component';

describe('NpsRatingNumberComponent', () => {
  let component: NpsRatingNumberComponent;
  let fixture: ComponentFixture<NpsRatingNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsRatingNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsRatingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
