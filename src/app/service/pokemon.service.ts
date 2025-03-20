import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  private urlBase: string = "https://pokeapi.co/api/v2/pokemon"

  getPokemons() : Observable<any>{
    return this.http.get<any>(this.urlBase)
  }

  getPokemonInfo(url: string): Observable<any>{
    return this.http.get<any>(url)
  }

  getPokemonByName(name:string): Observable<any>{
    const url = `${this.urlBase}/${name}`
    return this.http.get<any>(url);
  }
}
