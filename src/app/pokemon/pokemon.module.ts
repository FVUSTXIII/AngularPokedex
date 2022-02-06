import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DialogServiceService } from './services/dialog-service.service';
import { Pokemon } from './interfaces/pokemon.interface';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PokemonListComponent
  ],

})
export class PokemonModule {
 
 }

