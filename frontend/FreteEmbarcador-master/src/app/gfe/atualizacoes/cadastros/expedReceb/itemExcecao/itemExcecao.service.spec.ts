import { TestBed } from '@angular/core/testing';

import { ItemExcecaoService } from './itemExcecao.service';

describe('ItemExcecaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemExcecaoService = TestBed.get(ItemExcecaoService);
    expect(service).toBeTruthy();
  });
});
