import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent, CursoDetalheComponent] //consigo chamar essa classe dentro do html de outras classes
})
export class CursosModule { }
