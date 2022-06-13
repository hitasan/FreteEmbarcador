import { TestBed } from '@angular/core/testing';

import { UnidadeNegocioService } from './unidadenegocio.service';

describe('UnidadeNegocioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadeNegocioService = TestBed.get(UnidadeNegocioService);
    expect(service).toBeTruthy();
  });
});
