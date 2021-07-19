import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map,catchError} from 'rxjs/operators';
import { Empresas } from '../models';
import company from '../RequestPaths/paths'
import { throwError } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmpresasService {

    
constructor(private http: HttpClient) { }

empresas : Empresas;
    getEmpresas() {
        return this.http.get<Empresas[]>(`${company.company.get_all}`, httpOptions)
        .pipe(map(
            empresas => { 
                localStorage.setItem('EmpresasActuales', JSON.stringify(empresas));   
                 return empresas;
            }),
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError(error);
      }    
}