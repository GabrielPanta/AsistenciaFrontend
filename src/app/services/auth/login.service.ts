import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }
}
