import { TestBed } from '@angular/core/testing';

import { TipoOperacaoService } from './tipoOperacao.service';

describe('TipoOperacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoOperacaoService = TestBed.get(TipoOperacaoService);
    expect(service).toBeTruthy();
  });
});
