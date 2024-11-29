import { TestBed } from '@angular/core/testing';

import { UsersDetailDataService } from './users-detail-data.service';

describe('UsersDetailDataService', () => {
  let service: UsersDetailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDetailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
