import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<--NgModel esta aquí

import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './banda-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //<-- importa el FormsModule antes del enlace con [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
