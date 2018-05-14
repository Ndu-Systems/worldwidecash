/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutomateService } from './automate.service';

describe('Service: Automate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomateService]
    });
  });

  it('should ...', inject([AutomateService], (service: AutomateService) => {
    expect(service).toBeTruthy();
  }));
});
