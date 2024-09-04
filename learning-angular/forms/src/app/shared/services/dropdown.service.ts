import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estado-br';
import { map, Observable } from 'rxjs';
import { CidadeBr } from '../models/cidade-br';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private pathEstados = 'assets/estadosbr.json';
  private pathCidades = 'assets/cidadesbr.json';

  constructor(private http: HttpClient) { }

  getEstadosBr(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>(this.pathEstados).pipe();
  }

  getCidades(idEstado: number): Observable<CidadeBr[]> {
    return this.http.get<CidadeBr[]>(this.pathCidades).pipe(
      map((cidades: CidadeBr[]) => cidades.filter(c => c.estado == idEstado))
    );

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