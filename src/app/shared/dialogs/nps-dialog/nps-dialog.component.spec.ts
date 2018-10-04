import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsDialogComponent } from './nps-dialog.component';

describe('NpsDialogComponent', () => {
  let component: NpsDialogComponent;
  let fixture: ComponentFixture<NpsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
