import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ]
})
export class SharedModule { }
