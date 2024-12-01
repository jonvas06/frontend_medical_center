import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http'; // Importa HttpClient
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  templateUrl: './appointment.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  patientData: any; // Variable para almacenar los datos del paciente

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.appointmentForm = this.fb.group({
      patientDocument: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const documentValue = this.appointmentForm.get('patientDocument')?.value;
      
      // Llamada HTTP al backend con el documento ingresado
      this.http.post('http://localhost:3000/find/user', { docume: documentValue }).subscribe({
        next: (response: any) => {
          this.patientData = response.pant; 
          console.log('Datos del paciente:', this.patientData);
        },
        error: (error) => {
          console.error('Error al obtener los datos del paciente', error);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
