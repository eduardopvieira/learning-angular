import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError, empty, Observable, of, Subject, subscribeOn } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) {

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
          //this.error$.next(true);
          this.handleError()
          return of();
        })
      )
  }

  handleError() {
    this.alertService.showAlertDanger('´Não foi possivel carregar.')
  }

  onEdit(id: string | null) {
    if (id !== null) {
      this.router.navigate(['editar', id], { relativeTo: this.route })
    } else {
      console.log("id é nulo deu erro aqui (cursos-lista-component.ts")
    }
  }

}