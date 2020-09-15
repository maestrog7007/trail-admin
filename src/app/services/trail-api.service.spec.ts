import { TestBed } from '@angular/core/testing';

import { TrailAPIService } from './trail-api.service';

describe('TrailAPIService', () => {
  let service: TrailAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
