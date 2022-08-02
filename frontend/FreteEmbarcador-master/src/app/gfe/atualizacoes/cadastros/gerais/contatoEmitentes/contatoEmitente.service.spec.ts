import { TestBed } from '@angular/core/testing';

import { ContatoEmitenteService } from './contatoEmitente.service';

describe('ContatoEmitenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoEmitenteService = TestBed.get(ContatoEmitenteService);
    expect(service).toBeTruthy();
  });
});
