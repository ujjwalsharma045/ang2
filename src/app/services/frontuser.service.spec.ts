/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FrontuserService } from './frontuser.service';

describe('FrontuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontuserService]
    });
  });

  it('should ...', inject([FrontuserService], (service: FrontuserService) => {
    expect(service).toBeTruthy();
  }));
});
