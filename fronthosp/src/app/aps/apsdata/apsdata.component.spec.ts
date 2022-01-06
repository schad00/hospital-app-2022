import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApsdataComponent } from './apsdata.component';

describe('ApsdataComponent', () => {
  let component: ApsdataComponent;
  let fixture: ComponentFixture<ApsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
