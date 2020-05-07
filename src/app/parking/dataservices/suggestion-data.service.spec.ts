import { TestBed } from '@angular/core/testing';

import { SuggestionDataService } from './suggestion-data.service';

describe('SuggestionDataService', () => {
  let service: SuggestionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
