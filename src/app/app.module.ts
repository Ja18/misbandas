import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<--NgModel esta aquí
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BandaDetalleComponent } from './banda-detalle.component';
import { BandasComponent } from './bandas.component';
import { BandaService } from './banda.service';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { TableroComponent } from './tablero.component';

// Imports para cargar y configurar in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BandaDetalleComponent,
    BandasComponent,
    TableroComponent    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "bandas", component: BandasComponent},
      { path: "tablero", component: TableroComponent},
      { path: "", redirectTo: "/tablero", pathMatch: "full"},
      { path: "detalle/:id", component: BandaDetalleComponent},
    ])
  ],
  providers: [BandaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
