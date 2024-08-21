import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular", "js"];

  mostrarCursos: boolean = false;

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit() { }

}
