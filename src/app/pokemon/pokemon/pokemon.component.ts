import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../interfaces/pokemon.interface';

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
  }
  active_flag : boolean = false;
  closeModal: string = "";
  
  constructor(private modalService: NgbModal) {}
    

  

}
