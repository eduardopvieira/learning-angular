import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';



@NgModule({
  declarations: [DataFormComponent, CampoControlErroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DataFormModule { }
