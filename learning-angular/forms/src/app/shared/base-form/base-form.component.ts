import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent {

  formulario!: FormGroup

  abstract submit(): any

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido')
      this.formulario.markAllAsTouched()
    }
  }

  verificaValidacoesForm(fg: FormGroup) {
    fg.markAllAsTouched();
    fg.markAsDirty();
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    const control = this.formulario.get(campo);

    if (control == null) {
      return false;
    } else {
      return control && !control.valid && (control.touched || control.dirty);
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
    }
  }

  getCampo(campo: string) {
    return this.formulario.get(campo);
  }

}
