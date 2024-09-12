import { map, subscribeOn, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';

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
  }

  hasError(field: string) {
    return this.form.get(field)!.errors
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Ação realizada com sucesso.')
          //this.location.back() <-- isso volta pra pagina anterior, mas pessoalmente acho ruim entao comentei
        },
        error => this.modal.showAlertDanger('Erro ao realizar ação.'),
      )
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
