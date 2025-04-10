import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchersComponent } from "./searchers/searchers.component";
import { RouterOutlet,RouterModule, Router } from '@angular/router';
import { HomeComponent } from "./home/home.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {

  filtro = '';
 

  actualizarFiltro(valor: string) {
    this.filtro = valor;
  }

}

