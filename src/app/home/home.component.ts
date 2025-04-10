import { Component } from '@angular/core';
import { SearchersComponent } from '../searchers/searchers.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [SearchersComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filtro: string = '';

  actualizarFiltro(valor: string) {
    this.filtro = valor;
  }
}
