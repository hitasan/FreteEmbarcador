import { TestBed } from '@angular/core/testing';

import { GrupoEmitenteService } from './grupoEmitentes.service';

describe('GrupoEmitenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupoEmitenteService = TestBed.get(GrupoEmitenteService);
    expect(service).toBeTruthy();
  });
});
