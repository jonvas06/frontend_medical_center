import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'http://localhost:3000/api/user/login';
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.isAuthenticated = true;
    return this.http.post(this.apiUrl, credentials, { headers });
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}