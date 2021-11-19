import { TestBed } from '@angular/core/testing';

import { SfrequestsService } from './sfrequests.service';

describe('SfrequestsService', () => {
  let service: SfrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
