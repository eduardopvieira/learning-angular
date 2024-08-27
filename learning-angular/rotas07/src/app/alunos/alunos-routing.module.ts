import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheResolver } from './aluno-detalhe/guards/aluno-detalhe.resolver';

const routes: Routes = [ //No angular, rotas sao avaliadas na ordem em que sao inseridas.
  {
    path: '', component: AlunosComponent, children: [
      { path: 'novo', component: AlunoFormComponent }, // O alunos/novo vem primeiro pois "novo" é hardcoded
      { path: ':id', component: AlunoDetalheComponent,
        resolve: { alunoqwe : AlunoDetalheResolver }
       }, //o :id é um parametro dinamico, portanto, vem depois do hardcoded
      { path: ':id/editar', component: AlunoFormComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
