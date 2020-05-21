import { TestBed } from '@angular/core/testing';

import { DoctloginService } from './doctlogin.service';

describe('DoctloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctloginService = TestBed.get(DoctloginService);
    expect(service).toBeTruthy();
  });
});
