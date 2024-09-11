import { map, subscribeOn, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../cursos-lista/curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    //private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const curso = this.route.snapshot.data['curso']


    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.maxLength(20)]]
    });

    // let registro = null;

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curso$ = this.service.loadByID(id);
    //     curso$.subscribe((curso: Curso) => {
    //       registro = curso;
    //       this.updateForm(curso)
    //     })
    //   }
    // )

    //esse código abaixo é o de cima refatorado (ele tb ta comentado pq agora ta tudo no resolver)
    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap(id => this.service.loadByID(id))
    //   )
    //   .subscribe(curso => { this.updateForm(curso) }
    //   )

    // concatMap -> ordem da requisiçao importa (se eu estou criando os registros 1, 2 e 3, vai receber os resultados dos registros 1 2 e 3 em ordem)
    // mergeMap -> ordem nao importa
    // exhaustMap -> casos de login. faz a requisiçao do 1, espera resposta, faz do 2, espera resposta, faz do 3, espera resposta...

    //console.log(registro)

    //desnecessario por causa do resolver:

    // updateForm(curso: Curso) {
    //   this.form.patchValue({
    //     id: curso.id,
    //     nome: curso.nome
    //   })
    // }


  }



  hasError(field: string) {
    return this.form.get(field)!.errors
  }

  onSubmit() {
    this.submitted = true;
    //console.log(this.form.valid)
    if (this.form.valid) {
      console.log('submit')

      //update
      console.log(this.form.value.id)

      if (this.form.value.id !== null) {
        this.service.update(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Update feito com sucesso.')
            //this.location.back() <-- isso volta pra pagina anterior, mas pessoalmente acho ruim entao comentei
          },
          error => this.modal.showAlertDanger('Erro ao atualizar curso.'),
          () => console.log('update completo')
        )
        //create
      } else {
        console.log(this.form.value.nome)
        this.service.create(this.form.value.nome).subscribe(
          success => {
            this.modal.showAlertSuccess('Curso criado com sucesso.')
            //this.location.back() <-- isso volta pra pagina anterior, mas pessoalmente acho ruim entao comentei
          },
          error => this.modal.showAlertDanger('Erro ao criar curso.'),
          () => console.log('request completo')
        )
      }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
