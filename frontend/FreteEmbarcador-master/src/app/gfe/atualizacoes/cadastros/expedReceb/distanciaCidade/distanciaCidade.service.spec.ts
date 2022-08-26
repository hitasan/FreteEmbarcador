import { TestBed } from '@angular/core/testing';

import { DistanciaCidadeService } from './distanciaCidade.service';

describe('DistanciaCidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistanciaCidadeService = TestBed.get(DistanciaCidadeService);
    expect(service).toBeTruthy();
  });
});
