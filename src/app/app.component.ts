import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableInfoComponent } from './pages/table-info/table-info.component';

@Component({
  selector: 'app-root',
  imports: [TableInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_pokeApi';
}
