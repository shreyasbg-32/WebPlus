import { TestBed } from '@angular/core/testing';

import { BloodServiceService } from './blood-service.service';

describe('BloodServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodServiceService = TestBed.get(BloodServiceService);
    expect(service).toBeTruthy();
  });
});
