import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/api/user/signup';

  constructor(private http: HttpClient) {}

  registerPatient(patientData: any): Observable<any> {
    console.log("hola");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, patientData, { headers });
  }
}
