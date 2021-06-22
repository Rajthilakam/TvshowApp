import { TestBed } from '@angular/core/testing';

import { ShowdetailService } from './showdetail.service';

describe('ShowdetailService', () => {
  let service: ShowdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
