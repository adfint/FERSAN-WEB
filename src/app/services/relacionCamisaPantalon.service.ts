import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { relacionCamisaPantalon, tallaPlayera } from '../models';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import productDetails from '../RequestPaths/paths'


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class relacionPantalonC {
    
    constructor(private http: HttpClient) { }
    relacionPC : relacionCamisaPantalon;
    tallaPlayera : tallaPlayera;
    getRelPantCam() {        
        return this.http.get<relacionCamisaPantalon[]>(`${productDetails.productDetails.getRelationShirtPant}`, httpOptions)
        .pipe(map(
            relacionPC => {    
                 return relacionPC;
            }),
            catchError(this.handleError));            
    }

    gettallasPlayeras() {        
        return this.http.get<tallaPlayera[]>(`${productDetails.productDetails.getShirtsSizes}`, httpOptions)
        .pipe(map(
            tallaPlayera => {    
                 return tallaPlayera;
            }),
            catchError(this.handleError));            
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError(error);
      }
}