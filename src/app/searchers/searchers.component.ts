import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router'; 

interface Personaje {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

@Component({
  selector: 'app-searchers',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './searchers.component.html',
  styleUrls: ['./searchers.component.css']
})
export class SearchersComponent implements OnChanges {
  @Input() personajeBuscar: string = '';
  personajes: Personaje[] = [];
  busquedaRealizada: boolean = false;
  private http = inject(HttpClient);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personajeBuscar'] && this.personajeBuscar.trim()) {
      const url = `https://rickandmortyapi.com/api/character/?name=${this.personajeBuscar}`;
      this.http.get<{ results: Personaje[] }>(url).subscribe({
        next: res => (this.personajes = res.results, this.busquedaRealizada = true),
        error: () => (this.personajes = [], this.busquedaRealizada = true),
      });
    }
  }
}

