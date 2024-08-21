import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent implements OnInit {

  aluno: any = {}
  inscricao: Subscription = new Subscription();


  constructor(private route: ActivatedRoute, private as: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.aluno = this.as.getAluno(id);

        if (this.aluno === null) {
          console.log("n deu")
        }
      }
    );
  }
}
