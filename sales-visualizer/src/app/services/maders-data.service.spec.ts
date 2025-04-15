import { TestBed } from '@angular/core/testing';

import { MadersDataService } from './maders-data.service';

describe('MadersDataService', () => {
  let service: MadersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
