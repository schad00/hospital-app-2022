import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingfileComponent } from './feelingfile.component';

describe('FeelingfileComponent', () => {
  let component: FeelingfileComponent;
  let fixture: ComponentFixture<FeelingfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
