import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { Output } from '@angular/core';



@Component({
  selector: 'app-header',
  imports: [FormsModule , TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  Title = 'rick and Mortys Worlds';
  nombrePersonaje = '';

  @Output() buscar = new EventEmitter<string>();

  emitirBusqueda(){
    this.buscar.emit(this.nombrePersonaje);
  }
}


