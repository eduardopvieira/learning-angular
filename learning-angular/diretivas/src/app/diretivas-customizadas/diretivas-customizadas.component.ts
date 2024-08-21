import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss'
})
export class DiretivasCustomizadasComponent {

  cursos: string[] = ["Angular", "js"];

  mostrarCursos: boolean = false;

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
