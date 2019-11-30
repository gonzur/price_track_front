import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhResultComponent } from './searh-result.component';

describe('SearhResultComponent', () => {
  let component: SearhResultComponent;
  let fixture: ComponentFixture<SearhResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
