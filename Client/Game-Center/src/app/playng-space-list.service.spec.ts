import { TestBed } from '@angular/core/testing';

import { PlayngSpaceListService } from './playng-space-list.service';

describe('PlayngSpaceListService', () => {
  let service: PlayngSpaceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayngSpaceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
