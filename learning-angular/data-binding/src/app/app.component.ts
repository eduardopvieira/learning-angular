import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valor: number = 9237;
  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  recriarCiclo() {
    this.deletarCiclo = false;
  }
}
