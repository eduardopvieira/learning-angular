import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription = new Subscription();


  constructor(public route: ActivatedRoute, public as: AlunosService, public router: Router) { }

  //catastrofe

  ngOnInit() {
    this.inscricao = this.route.params.subscribe( //faça a inscrição pegar as informaçoes necessarias de quando houver mudança
      (params: any) => {

        let id = params['id']
        this.aluno = this.as.getAluno(id);
      }
    );
  }



  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos/editar']);
  }




  AlunoDetalheComponent() { }

}
