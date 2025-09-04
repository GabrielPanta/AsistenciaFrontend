import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

      if(error.status === 0){
        console.error('Se ha producido un error: ', error.error);
      }else{
        console.error('Backend retornó el codigo de estado ',error.status, error.error);
      }
      return throwError(()=>new Error('Algo malo ha pasado; por favor, inténtelo de nuevo más tarde.'));
  }
}
