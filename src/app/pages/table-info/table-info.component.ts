import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-table-info',
  imports: [CommonModule, PokemonModalComponent],
  standalone: true,
  templateUrl: './table-info.component.html',
  styleUrl: './table-info.component.css'
})
export class TableInfoComponent implements OnInit{

  pokemons : any[] = [];

  constructor( private pokemonService: PokemonService){};

  @ViewChild(PokemonModalComponent) modal!: PokemonModalComponent;

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


  openModal(url: string, name:string){
    this.modal.pokemon_info(url)
    this.modal.visible=true
    this.modal.pokemonName = name
    console.log(name)
  }
}
