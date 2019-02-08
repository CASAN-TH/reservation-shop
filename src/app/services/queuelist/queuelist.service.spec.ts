import { TestBed } from '@angular/core/testing';

import { QueuelistService } from './queuelist.service';

describe('QueuelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueuelistService = TestBed.get(QueuelistService);
    expect(service).toBeTruthy();
  });
});
