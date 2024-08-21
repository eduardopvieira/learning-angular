import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css',
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(private cServ: CursosService) {
    this.cursosService = cServ;
  }

  ngOnInit() {
    this.cursos = this.cServ.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }

}
