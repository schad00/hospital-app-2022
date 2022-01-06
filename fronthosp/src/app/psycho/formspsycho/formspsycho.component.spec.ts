import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspsychoComponent } from './formspsycho.component';

describe('FormspsychoComponent', () => {
  let component: FormspsychoComponent;
  let fixture: ComponentFixture<FormspsychoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormspsychoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
