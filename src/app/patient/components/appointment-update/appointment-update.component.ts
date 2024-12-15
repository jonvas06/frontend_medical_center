import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.css']
})
export class AppointmentUpdateComponent {
  updateForm: FormGroup;
  private apiUrl = 'http://localhost:3001/api/appo';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.updateForm = this.fb.group({
      idappo: ['', Validators.required],
      estado: ['', Validators.required],
      audsta: ['']
    });
  }

  updateAppointment(): void {
    if (this.updateForm.invalid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const formData = this.updateForm.value;

    const data = {
      idappo: Number(formData.idappo),
      estado: formData.estado,
      audsta: "A"
    };

    this.http.post(`${this.apiUrl}/update`, data).subscribe({
      next: () => {
        alert('Cita actualizada correctamente!');
      },
      error: (err) => {
        alert(`Error: ${err.error}`);
      }
    });
  }
}
