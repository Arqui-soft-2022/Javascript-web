import { TestBed } from '@angular/core/testing';

import { ResultsService } from './components/results/results.service';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
