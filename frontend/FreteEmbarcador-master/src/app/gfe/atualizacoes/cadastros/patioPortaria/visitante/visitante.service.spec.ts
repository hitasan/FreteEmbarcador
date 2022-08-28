import { TestBed } from '@angular/core/testing';

import { VisitanteService } from './visitante.service';

describe('VisitanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitanteService = TestBed.get(VisitanteService);
    expect(service).toBeTruthy();
  });
});
