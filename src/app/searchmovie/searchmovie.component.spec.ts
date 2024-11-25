import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Necessário para HttpClient no AppComponent
        SearchmovieComponent, // Importa o componente standalone
      ],
      declarations: [AppComponent],
    });
  });

  it('deve criar o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance; // Tipando explicitamente
    expect(app).toBeTruthy();
  });

  it(`deve ter o título 'searchmovie'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance; // Tipando explicitamente
    expect(app.title).toEqual('searchmovie');
  });
});
