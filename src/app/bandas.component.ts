import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService } from './banda.service';

@Component({
  selector: 'mis-bandas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BandaService]
})

export class BandasComponent implements OnInit {
  title = 'Mis bandas favoritas';
  bandas : Banda[];
  banda: Banda;
  constructor(private bandaService: BandaService){ }

  getBandas(): void{
  //  this.bandas = this.bandaService.getBandas();
  this.bandaService.getBandas().then(bandas => this.bandas = bandas);
  }

  ngOnInit(): void {
    this.getBandas();
  }
  
  seleccionar(item: Banda): void {
  	this.banda = item;
  }

  nuevo(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.bandaService.crearNuevo(nombre)
    .then(banda =>{
      this.bandas.push(banda);
      this.banda = null;
    }); 
  }

  borrar(banda: Banda): void {
    this.bandaService
      .borrar(banda.id)
      .then( () => {
        this.bandas = this.bandas.filter(h => h !== banda);
        if (this.banda === banda) { this.banda = null; }
      });
  }
  }