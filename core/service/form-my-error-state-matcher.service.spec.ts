import { TestBed } from '@angular/core/testing';

import { FormMyErrorStateMatcherService } from './form-my-error-state-matcher.service';

describe('FormMyErrorStateMatcherService', () => {
  let service: FormMyErrorStateMatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMyErrorStateMatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
