import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContactRequestService } from './contact-request.service';

describe('ContactRequestService', () => {
  let service: ContactRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContactRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
