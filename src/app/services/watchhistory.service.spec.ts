import { TestBed } from '@angular/core/testing';

import { WatchhistoryService } from './watchhistory.service';

describe('WatchhistoryService', () => {
  let service: WatchhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
