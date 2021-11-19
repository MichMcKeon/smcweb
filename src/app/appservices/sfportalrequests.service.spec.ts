import { TestBed } from '@angular/core/testing';

import { SfportalrequestsService } from './sfportalrequests.service';

describe('SfportalrequestsService', () => {
  let service: SfportalrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfportalrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
