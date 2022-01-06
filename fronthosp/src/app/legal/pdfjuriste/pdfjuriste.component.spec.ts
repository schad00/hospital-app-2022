import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfjuristeComponent } from './pdfjuriste.component';

describe('PdfjuristeComponent', () => {
  let component: PdfjuristeComponent;
  let fixture: ComponentFixture<PdfjuristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfjuristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfjuristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
