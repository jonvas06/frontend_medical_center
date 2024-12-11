import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-get',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-get.component.html',
  styleUrls: ['./appointment-get.component.css']
})
export class AppointmentGetComponent {
  getAppoForm: FormGroup;
  appointments: any = null;
  errorMessage: string | null = null;

  private apiUrl = 'http://localhost:3001/api/appo';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.getAppoForm = this.fb.group({
      docume: ['', Validators.required]
    });
  }

  getAppointmentsByDocume(): void {
    if (this.getAppoForm.invalid) {
      this.errorMessage = 'Por favor, ingresa un documento válido';
      return;
    }

    const formData = this.getAppoForm.value;

    this.http.post(`${this.apiUrl}/getbydocume`, formData).subscribe({
      next: (response) => {
        this.appointments = response;
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = err.error || 'Error al buscar las citas';
        this.appointments = null;
      }
    });
  }
}
