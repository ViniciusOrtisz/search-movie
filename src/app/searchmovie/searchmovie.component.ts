import { Component, inject } from '@angular/core';
import { SearchMovieService } from './searchmovie.service';
import { FavoritesService } from '../favoritemovie/favorite.service';

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

  filmesfavoritos: any[] = []; // Lista de filmes ou séries

  constructor(private favoritesService: FavoritesService) {}

  toggleFavorite(filmefav: any): void {
    if (this.favoritesService.isFavorite(filmefav.id)) {
      this.favoritesService.removeFavorite(filmefav.id);
    } else {
      this.favoritesService.addFavorite(filmefav);
    }
  }

  isFavorite(filmefavId: string): boolean {
    return this.favoritesService.isFavorite(filmefavId);
  }
}
