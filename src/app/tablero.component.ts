import { Component, OnInit } from '@angular/core';

import { Banda } from './banda';
import { BandaService } from './banda.service';

@Component ({
    selector: 'mi-tablero',
    templateUrl: './tablero.component.html'
})

export class TableroComponent implements OnInit{

    bandas: Banda[] = [];

    // usa el constructor para invocar el servicio de datos 
    constructor(private bandaService: BandaService){}

    ngOnInit(): void {
        this.bandaService.getBandas()
            .then(bandas => this.bandas = bandas.slice(1, 5));
    }    
}