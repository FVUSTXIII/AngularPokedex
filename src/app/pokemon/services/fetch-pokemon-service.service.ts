import { Injectable } from '@angular/core';
import { Pokemon, Sprites, OfficialArtwork } from '../interfaces/pokemon.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonServiceService {
  _pokemon : Pokemon = {
    abilities: [],
    height: 0,
    id: 0,
    moves: [],
    name: '',
    types: [],
    weight: 0,
    sprites: undefined
  }
  
  constructor( private _http : HttpClient) { 
    
  }

   fetchPokemon( url_ : string, pokemons : Pokemon[] ) : void {
    this._http.get<Pokemon>(url_)
              .subscribe( ( resp : Pokemon) => {
                pokemons.push(resp);
              });
    
  }
}
