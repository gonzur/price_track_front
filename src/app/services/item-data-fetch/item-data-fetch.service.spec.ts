import { TestBed } from '@angular/core/testing';

import { ItemDataFetchService } from './item-data-fetch.service';

describe('ItemDataFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDataFetchService = TestBed.get(ItemDataFetchService);
    expect(service).toBeTruthy();
  });
});
