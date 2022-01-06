import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecindataComponent } from './medecindata.component';

describe('MedecindataComponent', () => {
  let component: MedecindataComponent;
  let fixture: ComponentFixture<MedecindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
