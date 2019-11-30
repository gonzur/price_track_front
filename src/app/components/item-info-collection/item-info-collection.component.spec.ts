import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoCollectionComponent } from './item-info-collection.component';

describe('ItemInfoCollectionComponent', () => {
  let component: ItemInfoCollectionComponent;
  let fixture: ComponentFixture<ItemInfoCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
