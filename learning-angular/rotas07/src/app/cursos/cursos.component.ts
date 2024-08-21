import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  pagina: number = 0;
  inscricao = new Subscription();

  constructor(private cs: CursosService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cs.getCursos();

    this.inscricao = this.actRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { 'pagina': this.pagina } });
  }

  voltarPagina() {
    this.pagina--;
  }
}
