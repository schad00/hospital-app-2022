import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspatientComponent } from './formspatient.component';

describe('FormspatientComponent', () => {
  let component: FormspatientComponent;
  let fixture: ComponentFixture<FormspatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormspatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
