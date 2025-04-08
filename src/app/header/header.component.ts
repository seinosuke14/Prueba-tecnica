import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FormsModule , TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  Title: string = 'rick and Mortys Worlds';
}


