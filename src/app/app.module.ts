import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<--NgModel esta aquí
import { HttpModule } from '@angular/http';

// Imposrts para cargar y configurar in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './banda-detalle.component';
import { BandasComponent } from './bandas.component';
import { TableroComponent } from './tablero.component';//importar componente tablero

import { BandaService } from './banda.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent,
    BandasComponent,
    TableroComponent // usar el componente tablero
  ],
  
  imports: [
    BrowserModule,
    FormsModule, //<-- importa el FormsModule antes del enlace con [(ngModel)]
    InMemoryWebApiModule.forRoot(InMemoryDataService), // in-memory web API
    HttpModule,
    AppRoutingModule // <-- importar el modulo app routing
  ],
  providers: [BandaService],
  bootstrap: [AppComponent]
})
export class AppModule { }