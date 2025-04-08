import { TestBed } from '@angular/core/testing';

import { KitchenDataService } from './kitchen-data.service';

describe('KitchenDataService', () => {
  let service: KitchenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
