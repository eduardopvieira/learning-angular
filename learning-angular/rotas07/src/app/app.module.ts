import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosRoutingModule } from './alunos/alunos-routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';


@NgModule({
  declarations: [ //componentes
    AppComponent,
    HomeComponent,
    LoginComponent,
    RotaNaoEncontradaComponent,

  ],
  imports: [ //modulos
    BrowserModule,
    ReactiveFormsModule,
    //CursosModule,
    //AlunosModule,
    AppRoutingModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard], //servicos. quem esta em provider tem escopo global na aplicaçao
  bootstrap: [AppComponent]
})
export class AppModule { }
