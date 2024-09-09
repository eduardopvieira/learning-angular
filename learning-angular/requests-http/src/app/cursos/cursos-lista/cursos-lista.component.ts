import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError, empty, Observable, of, Subject, subscribeOn } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[] = [];

  bsModalRef: BsModalRef = new BsModalRef();

  cursos$!: Observable<Curso[]>; //notação finlandesa: variaveis terminadas em $ indicam observables
  error$ = new Subject<boolean>();


  constructor(private service: CursosService,
    private modalService: BsModalService) {

  }

  ngOnInit() {
    // this.service.list()
    //   .subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return of();
        })
      )



    this.service.list().
      pipe(
        catchError(error => of())
      )
      .subscribe(
        dados => {
          console.log(dados)
        },
        error => console.error(error),
        () => console.log('OBSERVABLE COMPLETO')
      )
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger'
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde'
  }

}