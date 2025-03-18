import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-info',
  imports: [CommonModule],
  templateUrl: './table-info.component.html',
  styleUrl: './table-info.component.css'
})
export class TableInfoComponent implements OnInit{

pokemon_info() {
console.log("sirve");
}
  pokemons : any[] = [];

  constructor( private pokemonService: PokemonService){};

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (data) => {
        this.pokemons = data.results;
        console.log("Funciona :)")
      },
      error: (error) => {
        console.error(error);
      }
    }
    )
  }
}
