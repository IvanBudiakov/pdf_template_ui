import { TestBed } from '@angular/core/testing';

import { ConfigloadService } from './configload.service';

describe('ConfigloadService', () => {
  let service: ConfigloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
