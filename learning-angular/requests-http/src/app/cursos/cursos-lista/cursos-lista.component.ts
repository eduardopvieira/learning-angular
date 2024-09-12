import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { catchError, EMPTY, empty, Observable, of, Subject, subscribeOn, switchMap, take } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef();

  cursos$!: Observable<Curso[]>; //notação finlandesa: variaveis terminadas em $ indicam observables
  error$ = new Subject<boolean>();

  idCursoSelecionado: string = '';

  deleteModalRef: BsModalRef = new BsModalRef();
  @ViewChild('deleteModal') deleteModal!: TemplateRef<any>;

  constructor(
    private service: Cursos2Service,
    private modalService: BsModalService,
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

  onDelete(id: string) {
    this.idCursoSelecionado = id;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
    const result$ = this.alertService.showConfirm('Confirmar', 'Tem certeza que deseja remover esse curso?')
    result$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.service.remove(id) : EMPTY)
    ).subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();

      },
      error => this.alertService.showAlertDanger("Erro ao remover curso. Tente novamente mais tarde.")
    );
  }

  onConfirmDelete() {
    this.service.remove(this.idCursoSelecionado).subscribe(
      success => {
        this.onRefresh();
      },
      error => this.alertService.showAlertDanger("Erro ao remover curso. Tente novamente mais tarde.")
    );
    //nao precisa fazer unsubscribe pois no metodo de remove tem
    //o take 1, que cancela a inscriçao sozinho
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

}