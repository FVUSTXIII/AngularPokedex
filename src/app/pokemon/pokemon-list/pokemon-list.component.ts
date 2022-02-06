import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { FetchPokemonListService } from '../services/fetch-pokemon-list.service';
import { FetchPokemonServiceService } from '../services/fetch-pokemon-service.service';
import { Result } from '../interfaces/pokemonList.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons_ : Pokemon[] = [];
  constructor(private _fetch_pokemon_list_setvice : FetchPokemonListService) { 
    this._fetch_pokemon_list_setvice.fetchPokemonList();
   
  }
  get pokemons() {
    this.pokemons_ = this._fetch_pokemon_list_setvice.pokemons;
    this.pokemons_.forEach (pokemon => {
      console.log(pokemon)
      
    })
    return [... this.pokemons_];
  }
  triggerModal() {
    
  }


}
