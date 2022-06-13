import { TestBed } from '@angular/core/testing';

import { ConfigParamService } from './configparam.service';

describe('ConfigParamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigParamService = TestBed.get(ConfigParamService);
    expect(service).toBeTruthy();
  });
});
