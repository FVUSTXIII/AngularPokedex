import { TestBed } from '@angular/core/testing';

import { FetchPokemonServiceService } from './fetch-pokemon-service.service';

describe('FetchPokemonServiceService', () => {
  let service: FetchPokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
