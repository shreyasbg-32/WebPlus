import { TestBed } from '@angular/core/testing';

import { QueryansService } from './queryans.service';

describe('QueryansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryansService = TestBed.get(QueryansService);
    expect(service).toBeTruthy();
  });
});
