import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableroComponent } from './tablero.component';//importar componente tablero
import { BandasComponent } from './bandas.component';
import { BandaDetalleComponent } from './banda-detalle.component';

const Routes = [
    { path: 'bandas', component: BandasComponent }, // ruta para listar bandas
    { path: 'tablero', component: TableroComponent }, // ruta para mostrar tablero
    { path: '', redirectTo: '/tablero', pathMatch: 'full'},
    { path: 'detalle/:id', component: BandaDetalleComponent}, // ruta con parametro
];

@NgModule({
    imports: [
        RouterModule.forRoot( Routes)],

  })
export class AppRoutingModule { }