/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DreamDetailsService } from './dream-details.service';

describe('Service: DreamDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DreamDetailsService]
    });
  });

  it('should ...', inject([DreamDetailsService], (service: DreamDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
