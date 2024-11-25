import { Component, inject } from '@angular/core';
import { SearchMovieService } from './searchmovie.service';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { Filmes } from './Filmes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchmovie',
  standalone: true,
  imports: [FormsModule , CommonModule],   // Adicionado FormsModule para usar ngModel
  templateUrl: './searchmovie.component.html',
  styleUrl: './searchmovie.component.css',
})
export class SearchmovieComponent {
  titulo: string = ''; // Inicialize como string vazia
  filmes!: Filmes;
  favoritos: Filmes[] = [];


  private searchMovieServie = inject(SearchMovieService);

  constructor(){
    this.carregarFavoritos();
  }

   // Função para adicionar um filme aos favoritos
   adicionarAosFavoritos(filme: Filmes) {
    if (!this.eFavorito(filme)) {
      this.favoritos.push(filme); // Adiciona o filme ao array local
      this.salvarFavoritos(); // Salva no LocalStorage
      alert(`${filme.Title} foi adicionado aos favoritos!`);
    } else {
      alert(`${filme.Title} já está nos favoritos.`);
    }
  }

  // Verifica se um filme já está nos favoritos
  eFavorito(filme: Filmes): boolean {
    return this.favoritos.some((fav) => fav.imdbID === filme.imdbID);
  }

  // Salva os favoritos no LocalStorage
  private salvarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }

  // Carrega os favoritos do LocalStorage
  public carregarFavoritos() {
    const storedFavoritos = localStorage.getItem('favoritos');
    this.favoritos = storedFavoritos ? JSON.parse(storedFavoritos) : [];
    console.log('Favoritos carregados:', this.favoritos);
    console.log(this.favoritos[0].Title)
  }

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
      alert('O título do filme não foi informado');
    }
  }
}
