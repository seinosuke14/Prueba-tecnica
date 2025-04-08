import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchersComponent } from "./searchers/searchers.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Prueba-tecnica';
  
}
