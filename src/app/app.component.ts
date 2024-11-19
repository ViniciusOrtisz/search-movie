import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchmovieComponent} from './searchmovie/searchmovie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchmovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'searchmovie';
}
