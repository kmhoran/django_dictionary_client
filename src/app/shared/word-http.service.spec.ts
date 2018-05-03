import { TestBed, inject } from '@angular/core/testing';

import { WordHttpService } from './word-http.service';

describe('WordHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordHttpService]
    });
  });

  it('should be created', inject([WordHttpService], (service: WordHttpService) => {
    expect(service).toBeTruthy();
  }));
});
