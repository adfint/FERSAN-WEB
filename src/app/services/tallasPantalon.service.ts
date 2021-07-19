import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map,catchError} from 'rxjs/operators';
import { tallasPantalon } from '../models';
import { throwError } from 'rxjs';
import productDetails from '../RequestPaths/paths'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TallasPantalonService {
    constructor(private http: HttpClient) { }

    tallas : tallasPantalon;
    getTallasPantalon() {        
        return this.http.get<tallasPantalon[]>(`${productDetails.productDetails.getPantsSizes}`, httpOptions)
        .pipe(map(
            tallas => {    
                 return tallas;
            }),
            catchError(this.handleError));    
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError(error);
      }
}