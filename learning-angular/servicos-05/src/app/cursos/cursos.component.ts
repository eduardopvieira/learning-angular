import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(private cServ: CursosService) {
    this.cursosService = cServ;
  }

  ngOnInit() {
    this.cursos = this.cServ.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
