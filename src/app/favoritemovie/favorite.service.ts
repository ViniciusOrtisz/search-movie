import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly localStorageKey = 'favorites';

  constructor() {}

  /**
   * Recupera a lista de favoritos do LocalStorage
   */
  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.localStorageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  /**
   * Adiciona um filme/série aos favoritos
   */
  addFavorite(item: any): void {
    const favorites = this.getFavorites();
    if (!favorites.find(fav => fav.id === item.id)) {
      favorites.push(item);
      localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
    }
  }

  /**
   * Remove um filme/série dos favoritos
   */
  removeFavorite(id: string): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
  }

  /**
   * Verifica se um item está nos favoritos
   */
  isFavorite(id: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.id === id);
  }
}
