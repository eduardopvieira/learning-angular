import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent implements OnInit {

  id: string = "";
  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(public route: ActivatedRoute, public as: AlunosService) { }


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe( //faça a inscrição pegar as informaçoes necessarias de quando houver mudança
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.as.getAluno(this.id);
      }
    );
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
