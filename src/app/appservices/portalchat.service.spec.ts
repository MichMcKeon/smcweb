import { TestBed } from '@angular/core/testing';

import { PortalchatService } from './portalchat.service';

describe('PortalchatService', () => {
  let service: PortalchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
