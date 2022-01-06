import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsmedecinComponent } from './formsmedecin.component';

describe('FormsmedecinComponent', () => {
  let component: FormsmedecinComponent;
  let fixture: ComponentFixture<FormsmedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsmedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
