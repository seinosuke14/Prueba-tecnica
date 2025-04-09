import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchersComponent } from "./searchers/searchers.component";
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchersComponent, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {

  filtro = '';

  actualizarFiltro(valor: string) {
    this.filtro = valor;
  }
}

