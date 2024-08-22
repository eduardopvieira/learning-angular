import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        //console.log(childRoute);
        //console.log(state)

        if (state.url.includes('editar')) {
            //alert('Usuario sem acesso')
            //return of(false);
        }

        return true;
    }

}