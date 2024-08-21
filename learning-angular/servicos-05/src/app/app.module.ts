import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [CursosService, LogService]
})
export class AppModule { }
