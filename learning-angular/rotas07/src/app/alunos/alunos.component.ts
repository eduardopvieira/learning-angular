import { Component, NgZoneOptions, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

  alunos: any[] = [];

  constructor(private alunosServ: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosServ.getAlunos();
  }
}
