import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../models/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { LoginPayload} from '../models/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl = 'http://localhost:8080/showtracker/api';

  constructor(private http: HttpClient) { }

  register(payload: RegisterPayload): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/auth/register`, payload)
  }

  login(payload: LoginPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload)
  }

 

  /*-------------------LOCAL STORAGE-----------------*/

  public saveSessionId(token: string): void {
    window.sessionStorage.removeItem('sessionID');
    window.sessionStorage.setItem('sessionID', token);
  }

  public getSessionId(): string | null {
    return window.sessionStorage.getItem('sessionID');
  }

  public saveAccountId(id: string): void {
    window.sessionStorage.removeItem('accountID');
    window.sessionStorage.setItem('accountID', id);
  }

  public getAccountId(): string | null {
    return window.sessionStorage.getItem('accountID');
  }

  clearSessionStorage(): void {
    window.sessionStorage.clear();
  }
}
