import { TestBed } from '@angular/core/testing';

import { FetchPokemonListService } from './fetch-pokemon-list.service';

describe('FetchPokemonListService', () => {
  let service: FetchPokemonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPokemonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
