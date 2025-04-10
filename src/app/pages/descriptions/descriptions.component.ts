import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-descriptions',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './descriptions.component.html'
})
export class DescriptionsComponent implements OnInit {
  personaje: any;
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
          .subscribe(res => this.personaje = res);
      }
    });
  }
}

