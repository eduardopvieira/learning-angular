import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})

export class AlunoFormComponent {

  username = new FormControl('', [Validators.required]);

  private formMudou: boolean = false;

  mudarFormMudou() {
    this.formMudou = !this.formMudou;
    console.log(this.formMudou)
  }

  podeMudarRota() {
    if (this.formMudou) {
      console.log('formMudou: ' + this.formMudou)
      return true;
    } else {
      console.log('formMudou: ' + this.formMudou)
      return false;
    }
  }

}
