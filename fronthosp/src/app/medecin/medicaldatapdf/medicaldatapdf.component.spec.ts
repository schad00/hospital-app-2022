import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldatapdfComponent } from './medicaldatapdf.component';

describe('MedicaldatapdfComponent', () => {
  let component: MedicaldatapdfComponent;
  let fixture: ComponentFixture<MedicaldatapdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicaldatapdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaldatapdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
