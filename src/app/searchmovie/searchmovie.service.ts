import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  private readonly baseUrl = 'http://www.omdbapi.com/?t=';

  private httpClient = inject(HttpClient)

  consultarFilme(titulo: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${titulo}&apikey=3fdd9682`);
  }

}
