/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactlistService } from './contactlist.service';

describe('ContactlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactlistService]
    });
  });

  it('should ...', inject([ContactlistService], (service: ContactlistService) => {
    expect(service).toBeTruthy();
  }));
});
