import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty, Observable } from 'rxjs';

import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { CidadeBr } from '../shared/models/cidade-br';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent extends BaseFormComponent {

  //formulario!: FormGroup;
  //estados: Observable<EstadoBr[]> = new Observable<EstadoBr[]>();
  estados: EstadoBr[] = [];
  cidades: CidadeBr[] = [];
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletterOp: any[] = [];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownServ: DropdownService,
    private cepService: ConsultaCepService,
    private verEmailServ: VerificaEmailService
  ) {
    super();
  }

  consultaCEP() {

    let cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)?.subscribe(dados => this.populaDadosForm(dados));
    }
  }

  buildFrameworks() {

    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckBox(1));
  }

  frameworksArrayControls() {
    return (this.formulario.get('frameworks') as FormArray).controls;
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

  override submit() {

    let valueSubmit = Object.assign({}, this.formulario.value); //cria uma copia do formulario para nao afetar o original

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: boolean, i: number) => v ? this.frameworks[i] : null)
        .filter((v: string | null) => v !== null)
    })

    console.log(valueSubmit);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map((res: any) => res))
      .subscribe((dados: any) => {
        console.log(dados);
        //reseta o form apos a enviada da requisiçao:

        this.resetar();
      },
        (error: any) => alert('erro')
      );
  }


  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'c++']);
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2
  }

  validarEmail(formControl: FormControl) {
    return this.verEmailServ.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  ngOnInit() {

    //this.verEmailServ.verificarEmail('email@email.com').subscribe(); (coemntado pq era so pra ver se funcionava)

    //this.estados = this.dropdownServ.getEstadosBr()//.pipe(map((res: any) => res.uf)); 
    this.dropdownServ.getEstadosBr()
      .subscribe(dados => this.estados = dados);
    this.cargos = this.dropdownServ.getCargos();
    this.tecnologias = this.dropdownServ.getTecnologias();
    this.newsletterOp = this.dropdownServ.getNewsletter();

    console.log(this.estados)

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      //parametros abaixo: null = valor inicial, primeiro array eh validaçoes sincronas e o segundo é assincronas
      //o .bind(this) é para fixar o metodo na instancia atual da classe
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, [Validators.requiredTrue]],
      frameworks: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('valor CEP: ', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.formulario.get('endereco.cep')?.value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {})

    this.formulario.get('endereco.estado')?.valueChanges
      .pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        map((estado) => this.estados.filter((e) => e.sigla === estado)),
        map((estados: any[]) => estados && estados.length > 0 ? estados[0].id : empty()),
        switchMap((estadoId: number) => this.dropdownServ.getCidades(estadoId)),
        tap(console.log)
      )
      .subscribe((cidades) => (this.cidades = cidades));
  };
}
