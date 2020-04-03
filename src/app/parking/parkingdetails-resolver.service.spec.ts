import { TestBed } from '@angular/core/testing';

import { ParkingdetailsResolverService } from './parkingdetails-resolver.service';

describe('ParkingdetailsResolverService', () => {
  let service: ParkingdetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingdetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
