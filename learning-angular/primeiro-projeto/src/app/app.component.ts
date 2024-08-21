import { Component } from '@angular/core';
import { NgModule } from '@angular/core'; //usar esse negocio se nao o codigo quebra
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosComponent } from './cursos/cursos.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuPrimeiro2Component, CursosComponent], //sempre que for usar um componente, tem que importar aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salve';
}
