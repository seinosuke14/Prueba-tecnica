import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchersComponent } from '../searchers/searchers.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,SearchersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filtro = '';
 

  actualizarFiltro(valor: string) {
    this.filtro = valor;
  }
}
