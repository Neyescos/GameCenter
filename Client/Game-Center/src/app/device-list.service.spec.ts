import { TestBed } from '@angular/core/testing';

import { DeviceListService } from './device-list.service';

describe('DeviceListService', () => {
  let service: DeviceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
