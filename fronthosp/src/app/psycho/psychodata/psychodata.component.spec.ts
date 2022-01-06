import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychodataComponent } from './psychodata.component';

describe('PsychodataComponent', () => {
  let component: PsychodataComponent;
  let fixture: ComponentFixture<PsychodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
