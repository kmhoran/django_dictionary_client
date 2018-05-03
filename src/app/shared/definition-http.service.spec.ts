import { TestBed, inject } from '@angular/core/testing';

import { DefinitionHttpService } from './definition-http.service';

describe('DefinitionHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefinitionHttpService]
    });
  });

  it('should be created', inject([DefinitionHttpService], (service: DefinitionHttpService) => {
    expect(service).toBeTruthy();
  }));
});
