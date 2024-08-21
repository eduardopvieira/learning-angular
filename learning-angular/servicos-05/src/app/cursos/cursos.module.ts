import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosService } from '../cursos/cursos.service';



@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule
    ],
    providers: [
        CursosService
    ]
})
export class CursosModule { }
