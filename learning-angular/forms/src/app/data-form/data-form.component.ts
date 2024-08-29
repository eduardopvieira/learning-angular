import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup;
  estados!: EstadoBr[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dropdownServ: DropdownService) { }

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

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')?.value;

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm();

        this.http.get('//viacep.com.br/ws/' + cep + '/json').subscribe(dados => this.populaDadosForm(dados));

      }
    }
  }

  populaDadosForm(dados: any) {

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        //numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        //cep: dados.cep,
        //numero: '',
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }



  onSubmit() {

    console.log(this.formulario.value);

    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map((res: any) => res))
        .subscribe((dados: any) => {
          console.log(dados);
          //reseta o form apos a enviada da requisiçao:

          this.formulario.reset();
        });
    } else {
      alert('erro')
      this.formulario.markAllAsTouched();
    }
  }

  ngOnInit() {

    this.dropdownServ.getEstadosBr().subscribe(
      dados => {
        this.estados = dados;
        console.log(dados)
      }
    );

    console.log(this.estados);

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      })
    });

  };
}
