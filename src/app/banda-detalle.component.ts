import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Banda } from './banda';
import { BandaService } from './banda.service';
@Component({
    selector: 'banda-detalle',
    templateUrl: './banda-detalle.component.html',
    styleUrls: ['./banda-detalle.component.css']
})
export class BandaDetalleComponent  implements OnInit {
    @Input() banda: Banda;

    constructor(
        private bandaService: BandaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.bandaService.getBanda(+params.get('id')))
            .subscribe(banda => this.banda = banda);
    }

    goBack(): void {
        this.location.back();
    }
}