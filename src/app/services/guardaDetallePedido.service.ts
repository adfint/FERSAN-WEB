import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { detallePedido } from '../models';

import order from '../RequestPaths/paths'

@Injectable()
export class guardaDetallePedido {
constructor(private http: HttpClient) { }
    
respuesta: any;
    guardaDetallePedido(params: detallePedido) {
        // console.log("entro detalle");
        return this.http.post<any>(`${order.orders.saveEmployeeOrder}`,  params )
        .pipe(map(respuesta => {
             return respuesta;
        }),
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError('Surgio un problema al insertar el detalle del pedido!.' + error);
      }
}

  