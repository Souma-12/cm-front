import { TestBed } from '@angular/core/testing';

import { CandidatsServiceService } from './candidats-service.service';

describe('CandidatsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidatsServiceService = TestBed.get(CandidatsServiceService);
    expect(service).toBeTruthy();
  });
});
