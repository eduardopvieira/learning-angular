import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard] // Prote
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  }
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura o roteador no nível raiz
  exports: [RouterModule]  // Exporta RouterModule para que possa ser usado em outros módulos
})
export class AppRoutingModule { }