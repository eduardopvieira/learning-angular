import { AlunosService } from './../../alunos.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../../aluno';


@Injectable({ providedIn: 'root' })
export class AlunoDetalheResolver implements Resolve<Aluno> {
  
  constructor (private alunosService: AlunosService) {}

  aluno: Aluno = {id: 666, nome: "DEMONIO", email: "INFERNO@EMAIL.COM"}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    let id = route.params['id']
    console.log(id);
    this.aluno = this.alunosService.getAluno(id);
    console.log("Aluno encontrado: " + this.aluno.id, this.aluno.nome, this.aluno.email)
    return this.aluno;
    
  }
}