import { Component ,Input, OnChanges, SimpleChanges, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient  } from '@angular/common/http';
import { Url } from 'url';



interface Personajes {

  id: number;
  name: string;
  image: string;
  status: string;
  species: string;


}

@Component({
  selector: 'app-searchers',
  imports: [CommonModule],
  templateUrl: './searchers.component.html',
  styleUrl: './searchers.component.css'
})
export class SearchersComponent implements OnChanges{

  @Input() personajeBuscar: string = '';
  personajes: Personajes[] = [];
  private http=inject(HttpClient);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personajeBuscar'] && this.personajeBuscar.trim()) {
      const url = `https://rickandmortyapi.com/api/character/?name=${this.personajeBuscar}`;
      this.http.get<{ results: Personajes[] }>(url).subscribe({
        next: res => this.personajes = res.results,
        error: () => this.personajes = [],
      });
    }
  }
}
