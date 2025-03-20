import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-modal',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './pokemon-modal.component.html',
  styleUrl: './pokemon-modal.component.css'
})
export class PokemonModalComponent {

  visible: boolean = false;
  pokemonName : string = '';

  constructor( private pokemonService: PokemonService){};

  pokemonInfo : any = {};

  pokemon_info(url: string) {
    this.pokemonInfo = {};
    this.pokemonService.getPokemonInfo(url).subscribe({
      next: (data) => {
        if(data == null){
          this.pokemonInfo = null;
        } else {
          this.pokemonInfo = data;
          console.log(this.pokemonInfo.abilities)
        }
      },
      error: (error) => {
        this.pokemonInfo = null;
        this.visible = true;
        console.error(error);
      }
    }
    )
  }

  closeModal(){
    this.visible = false;
  }
}
