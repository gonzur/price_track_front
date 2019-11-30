import { TestBed } from '@angular/core/testing';

import { ItemDataAssembleService } from './item-data-assemble.service';

describe('ItemDataAssembleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDataAssembleService = TestBed.get(ItemDataAssembleService);
    expect(service).toBeTruthy();
  });
});
