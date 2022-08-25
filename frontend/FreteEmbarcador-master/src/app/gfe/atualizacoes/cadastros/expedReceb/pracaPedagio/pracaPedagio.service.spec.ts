import { TestBed } from '@angular/core/testing';

import { PracaPedagioService } from './pracaPedagio.service';

describe('PracaPedagioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracaPedagioService = TestBed.get(PracaPedagioService);
    expect(service).toBeTruthy();
  });
});
