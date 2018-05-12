/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResetUserService } from './reset-user.service';

describe('Service: ResetUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetUserService]
    });
  });

  it('should ...', inject([ResetUserService], (service: ResetUserService) => {
    expect(service).toBeTruthy();
  }));
});
