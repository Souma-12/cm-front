import { TestBed } from '@angular/core/testing';

import { ResponsableServiceService } from './responsable-service.service';

describe('ResponsableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsableServiceService = TestBed.get(ResponsableServiceService);
    expect(service).toBeTruthy();
  });
});
