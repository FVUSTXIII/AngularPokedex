import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../interfaces/pokemon.interface';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input('active_pokemon') pokemon : Pokemon = {
    abilities: [],
    height: 0,
    id: 0,
    moves: [],
    name: '',
    types: [],
    weight: 0
  };
 
  constructor (@Inject(MAT_BOTTOM_SHEET_DATA) public pokemon_ : any) {
    this.pokemon = pokemon_.pokemon
  }

  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }
  getTypes(): string[] {
   let type_arr : string[] = [];
    this.pokemon.types.forEach(type => {
      type_arr.push(type.type.name)
    });
    return type_arr;
  }
  get pokemons() {
    return this.pokemon;
  }
}
