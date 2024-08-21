import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent implements OnInit {

  id: string = "";
  curso: any;
  inscricao: Subscription = new Subscription(); //isso aqui é uma boa pratica, sempre atribua inscriçoes a atributos.

  constructor(private route: ActivatedRoute, private cs: CursosService, private router: Router) {
    //this.id = this.router.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe( //faça a inscrição pegar as informaçoes necessarias de quando houver mudança
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cs.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['/cursos/naoEncontrado'])
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe(); //desinscreva quando o componente for destruido pois nao é do nosso interesse que ele continue recebendo alteraçoes
  }
}
