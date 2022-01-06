import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfpsychoComponent } from './pdfpsycho.component';

describe('PdfpsychoComponent', () => {
  let component: PdfpsychoComponent;
  let fixture: ComponentFixture<PdfpsychoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfpsychoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfpsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
