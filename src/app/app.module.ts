import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<--NgModel esta aquí

import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './banda-detalle.component';
import { BandasComponent } from './bandas.component';
import { BandaService } from './banda.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent,
    BandasComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule, //<-- importa el FormsModule antes del enlace con [(ngModel)]
    RouterModule.forRoot([
      { path: 'bandas', component: BandasComponent }
    ])
  ],
  providers: [BandaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
