import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [ //importante declarar cada componente
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [ //nao precisa mexer aqui
    CommonModule
  ],
  exports: [ //exportar caso queira usar em outro modulo
    CursosComponent,
    CursoDetalheComponent
  ],
  providers: [ //colocar isso senao o service nao funciona
    CursosService
  ]
})
export class CursosModule { }
