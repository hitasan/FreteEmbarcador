import { TestBed } from '@angular/core/testing';

import { FiltroDocCargaService } from './filtroDocCarga.service';

describe('FiltroDocCargaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltroDocCargaService = TestBed.get(FiltroDocCargaService);
    expect(service).toBeTruthy();
  });
});
