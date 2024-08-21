import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/pt';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ServiceService } from './service.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceService,
    {
      provide: LOCALE_ID,
      deps: [ServiceService],
      useFactory: (service: ServiceService) => service.getLocale()

    }

    //caso queira fazer isso sem usar serviço, é só colocar:
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'

    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
