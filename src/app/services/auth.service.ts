import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPayload } from '../models/register-payload';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { LoginPayload} from '../models/login-payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://showtracker-env-1.eba-hwbn4ifk.us-east-2.elasticbeanstalk.com/showtracker/api';

  constructor(private http: HttpClient) { }

  register(payload: RegisterPayload): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/auth/register`, payload)
  }

  login(payload: LoginPayload): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload)
  }

  getAuth(): Auth | null {
    const auth = localStorage.getItem('auth');
    if (auth) {
      return JSON.parse(auth);
    }
    return null;
  }
 
}
