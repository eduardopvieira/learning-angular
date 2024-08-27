import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent implements OnInit {
  
  constructor(public route: ActivatedRoute, public alunoService: AlunosService) { }

  
  id: string = "";
  aluno?: Aluno;
  inscricao: Subscription = new Subscription();
  


  ngOnInit() {
    // this.inscricao = this.route.params.subscribe( //faça a inscrição pegar as informaçoes necessarias de quando houver mudança
    //   (params: any) => {
    //     this.id = params['id'];

    //     this.aluno = this.as.getAluno(this.id);
    //   }
    // );



    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log("INFOZADA: "  + info)
        this.aluno = info['alunoqwe'];
        console.log("Aluno retornado detalhe: ")
        console.log(this.aluno?.id, this.aluno?.nome, this.aluno?.email)
      }
    );
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
