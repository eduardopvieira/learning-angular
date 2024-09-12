import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/curso';
import { delay, take, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso: Curso): Observable<Curso> {
    // Se o curso não tiver um ID, gera um novo ID como número inteiro
    if (!curso.id) {
      curso.id = Math.floor(Date.now() / 1000).toString(); // Gera um número inteiro com base no timestamp
    }

    return this.http.post<Curso>(this.API, curso).pipe(take(1));
  }

  update(curso: Curso) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: Curso) {
    if (curso.id) {
      return this.update(curso);
    }
    return this.create(curso);
  };

  remove(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
} 