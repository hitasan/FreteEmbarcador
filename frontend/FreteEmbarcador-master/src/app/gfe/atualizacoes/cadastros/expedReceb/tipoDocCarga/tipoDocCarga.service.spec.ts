import { TestBed } from '@angular/core/testing';

import { TipoDocCargaService } from './tipoDocCarga.service';

describe('TipoDocCargaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDocCargaService = TestBed.get(TipoDocCargaService);
    expect(service).toBeTruthy();
  });
});
