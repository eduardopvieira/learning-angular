import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  usuario: any = {
    nome: '',
    email: ''
  }

  onSubmit(form: any) {

    console.log(form);

    this.http.post('enderecoServer/formUsuario', JSON.stringify(form.value)).pipe(map((res: any) => res)).subscribe((dados: any) => console.log(dados));
  }

  constructor(private http: HttpClient) { }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'is-valid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any) {

    //Nova variável "cep" somente com dígitos.
    var cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.http.get('//viacep.com.br/ws/' + cep + '/json').subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: any, form: any) {
    form.setValue({
      nome: null,
      email: null,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }



}
