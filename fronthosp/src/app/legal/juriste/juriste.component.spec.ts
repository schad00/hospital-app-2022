import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuristeComponent } from './juriste.component';

describe('JuristeComponent', () => {
  let component: JuristeComponent;
  let fixture: ComponentFixture<JuristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
