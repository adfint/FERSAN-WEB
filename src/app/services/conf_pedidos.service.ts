import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map,catchError} from 'rxjs/operators';
import { configPedidos } from '../models';
import { throwError } from 'rxjs';
import orders from '../RequestPaths/paths'


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Conf_Pedidos {
    constructor(private http: HttpClient) { }

    config : configPedidos;

    getConfiguraciones(idEmpresa: number, IdPersonal: number) {
        return this.http.post<configPedidos[]>(`${orders.orders.getConfigurationOrders}`, { idEmpresa: idEmpresa, IdPersonal: IdPersonal })
        .pipe(map(
            config => {    
                 return config;
            }),
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError(error);
      }
}