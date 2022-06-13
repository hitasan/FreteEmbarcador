import { TestBed } from '@angular/core/testing';

import { GrupoEmpresaService } from './grupoempresa.service';

describe('GrupoEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupoEmpresaService = TestBed.get(GrupoEmpresaService);
    expect(service).toBeTruthy();
  });
});
