import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonList, Result } from '../interfaces/pokemonList.interface';
import { FetchPokemonServiceService } from './fetch-pokemon-service.service';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonListService {
  private _pokemons : Pokemon[] = [];
  
  private _service_url : string = "https://pokeapi.co/api/v2"
  constructor(private _http : HttpClient, private _fetchPokemonServiceService : FetchPokemonServiceService) { }
  fetchPokemonList( ) : void { // change to  when possible
    const params = new HttpParams()
                      .set('limit', '50')
                      .set('offset', '1');
    this._http.get<PokemonList>(`${ this._service_url }/pokemon`, { params : params}).
                              subscribe( ( resp : PokemonList ) => {
                                resp.results.forEach( result => {
                                  const {name, url} = result;
                                  this._fetchPokemonServiceService.fetchPokemon(url, this._pokemons);
                                })
                              });
  
  } 
  get pokemons () {
    return [... this._pokemons];
  }
}


