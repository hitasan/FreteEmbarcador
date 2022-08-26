import { TestBed } from '@angular/core/testing';

import { PrazoEntregaService } from './prazoEntrega.service';

describe('PrazoEntregaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrazoEntregaService = TestBed.get(PrazoEntregaService);
    expect(service).toBeTruthy();
  });
});
