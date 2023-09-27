import { TestBed } from '@angular/core/testing';

import { CautraloiService } from './cautraloi.service';

describe('CautraloiService', () => {
  let service: CautraloiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CautraloiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
