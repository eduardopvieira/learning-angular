import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estado-br';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private pathJson = 'assets/estadosbr.json';

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>(this.pathJson).pipe();
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'c++', desc: 'C++' },
      { nome: 'angular', desc: 'Angular' },
      { nome: 'php', desc: 'PHP' },

    ]
  }

  getNewsletter() {
    return [
      { valor: 's', desc: "Sim" },
      { valor: 'n', desc: "Não" }
    ]
  }
}