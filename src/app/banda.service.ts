import { Injectable } from '@angular/core';

import { Banda } from './banda';
import { Http } from '@angular/http';


@Injectable()
export class BandaService {

    private bandasUrl = 'api/bandas';
    constructor(private http: Http){}
        getBandas(): Promise<Banda[]> {
            return this.http.get(this.bandasUrl)
            .toPromise()
            .then(response => response.json().data as Banda[])
            .catch(this.handleError);
        }
        private handleError(error: any): Promise<any> {
            console.error('An error ocurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }

    getBanda(id: number): Promise<Banda> {
        const url = `${this.bandasUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Banda)
        .catch(this.handleError);
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    actualizar(banda: Banda): Promise<Banda> {
        const url = `${this.bandasUrl}/${banda.id}`;
        return this.http
            .put(url, JSON.stringify(banda), {headers: this.headers})
            .toPromise()
            .then ( () => banda)
            .catch(this.handleError);
    }

    crearNuevo(nombre: string): Promise<Banda> {
        return this.http
            .post(this.bandasUrl, JSON.stringify({nombre: nombre}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Banda)
            .catch(this.handleError);
    }

    borrar(id: number): Promise<void> {
        const url = `${this.bandasUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then( () => null)
        .catch(this.handleError);        
    }
}