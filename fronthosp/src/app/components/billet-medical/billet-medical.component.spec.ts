import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilletMedicalComponent } from './billet-medical.component';

describe('BilletMedicalComponent', () => {
  let component: BilletMedicalComponent;
  let fixture: ComponentFixture<BilletMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilletMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilletMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
