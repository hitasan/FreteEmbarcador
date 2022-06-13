import { TestBed } from '@angular/core/testing';

import { GenericaService } from './generica.service';

describe('GenericaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericaService = TestBed.get(GenericaService);
    expect(service).toBeTruthy();
  });
});
