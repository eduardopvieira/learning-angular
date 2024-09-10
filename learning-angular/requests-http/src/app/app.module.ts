import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UnsubscribeRxjsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
