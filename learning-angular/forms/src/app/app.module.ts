import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';



@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
