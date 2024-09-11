import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Curso } from '../cursos-lista/curso';
import { CursosService } from '../cursos.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CursoResolverGuard implements Resolve<Curso> {


  constructor(private service: CursosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    //o "of" retorna um observable a partir de um objeto
    return of({
      id: null,
      nome: null
    })

  }

}
