import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-pokemon-form',
  imports: [FormsModule, PokemonModalComponent ],
  standalone: true,
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent {
  constructor( private pokemonService: PokemonService){};
  pokemonName: string = "";
  
  //Permite acceder a los metodos del componente hijo, en este caso el modal
  @ViewChild(PokemonModalComponent) modal!: PokemonModalComponent;

  onSubmit() {
    this.pokemonName = this.pokemonName.toLowerCase();
    this.modal.pokemon_info(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)
    this.modal.visible = true;
    this.modal.pokemonName = this.pokemonName
    }
}
