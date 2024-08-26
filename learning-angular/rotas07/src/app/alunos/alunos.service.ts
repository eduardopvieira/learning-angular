import { Injectable } from '@angular/core';

import { Aluno } from './aluno'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno: Aluno = { id: 0, nome: '', email: '' };

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@email.com' },
    { id: 5, nome: 'Aluno 05', email: 'aluno05@email.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: string) {
    let idNum = parseInt(id);
    console.log(idNum)


    for (let i = 0; i < this.alunos.length; i++) {
      this.aluno = this.alunos[i];
      if (this.aluno.id == idNum) {
        return this.alunos[i];
      }
    }
    return null;
  }


  constructor() { }
}
