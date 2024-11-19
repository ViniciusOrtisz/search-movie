import { Component, inject } from '@angular/core';
import { SearchMovieService } from './searchmovie.service';
import { Filmes } from './Filmes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchmovie',
  standalone: true,
  imports: [FormsModule], // Adicionado FormsModule para usar ngModel
  templateUrl: './searchmovie.component.html',
  styleUrl: './searchmovie.component.css',
})
export class SearchmovieComponent {
  titulo: string = ''; // Inicialize como string vazia
  filmes!: Filmes;

  private searchMovieServie = inject(SearchMovieService);

  onConsultaFilme() {
    if (this.titulo.trim()) {
      // Realiza a consulta com o valor do input
      this.searchMovieServie.consultarFilme(this.titulo).subscribe({
        next: (filmes: Filmes) => {
          this.filmes = filmes;
          console.log(filmes);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    } else {
      console.error('O título do filme não foi informado');
    }
  }
}
