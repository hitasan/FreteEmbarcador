import { TestBed } from '@angular/core/testing';

import { UnitizadorService } from './unitizador.service';

describe('UnitizadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitizadorService = TestBed.get(UnitizadorService);
    expect(service).toBeTruthy();
  });
});
