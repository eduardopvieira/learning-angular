import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunosDeactivateGuard } from './guards/alunos.deactivate.guard';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forms',
    component: AlunoFormComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AlunosDeactivateGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura o roteador no nível raiz
  exports: [RouterModule]  // Exporta RouterModule para que possa ser usado em outros módulos
})
export class AppRoutingModule { }



// {
//   path: 'cursos',
//   component: CursosComponent
// },
// {
//   path: 'curso/:id',
//   component: CursoDetalheComponent
// },
// {
//   path: 'naoEncontrado',
//   component: CursoNaoEncontradoComponent
// }