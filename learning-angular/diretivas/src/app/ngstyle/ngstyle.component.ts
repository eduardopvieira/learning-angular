import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.scss'
})
export class NgstyleComponent {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
