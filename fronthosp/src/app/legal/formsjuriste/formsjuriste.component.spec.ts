import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsjuristeComponent } from './formsjuriste.component';

describe('FormsjuristeComponent', () => {
  let component: FormsjuristeComponent;
  let fixture: ComponentFixture<FormsjuristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsjuristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsjuristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
