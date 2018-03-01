import { Component, Input } from '@angular/core';

export class Banda {
	id: number;
	nombre: string;
  constructor(id,nombre){
    this.id=id;
    this.nombre=nombre;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mis bandas favoritas';
  bandas = BANDAS;

  banda: Banda;

  seleccionar(item: Banda): void {
  	this.banda = item;
  }
}
const BANDAS: Banda[] = [
{id: 11, nombre: 'Linkin Park'},
{id: 12, nombre: 'Nirvana'},
{id: 13, nombre: 'Swedish House Mafia'},
{id: 14, nombre: '50 Cent'},
{id: 15, nombre: 'Combichrist'}
];