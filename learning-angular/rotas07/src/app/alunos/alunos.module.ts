import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { alunosDeactivateGuard } from '../guards/alunos.deactivate.guard';
import { provideRouter, withComponentInputBinding } from '@angular/router';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlunosService
  ]
})
export class AlunosModule { }
