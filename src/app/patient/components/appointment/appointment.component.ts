import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  templateUrl: './appointment.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  appointmentForm: FormGroup;
  patientData: any;

  private apiUrl = 'http://localhost:3001/api/appo';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.appointmentForm = this.fb.group({
      patientDocument: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
  }

  createAppointment(): void {
    const form: HTMLFormElement = document.getElementById('createAppoForm') as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, any> = {}; 

  // Obtener la fecha del formulario y convertirla a ISO 8601
  const apdate = formData.get('apdate')?.toString();
  const fullDate = apdate ? `${apdate}T10:00:00.000Z` : '';

  data['apdate'] = fullDate;

  // Convertir los IDs a enteros
  data['iduser'] = Number(formData.get('iduser'));
  data['idpant'] = Number(formData.get('idpant'));
  data['idespe'] = Number(formData.get('idespe'));
  data['iddsch'] = Number(formData.get('iddsch'));

  // Asegurarse de que los valores de ID sean números
  console.log('Form data:', data);  // Verifica que los valores sean correctos

  // Recorrer el resto del FormData y agregarlo a 'data'
  formData.forEach((value, key) => {
    if (key !== 'apdate' && key !== 'iduser' && key !== 'idpant' && key !== 'idespe' && key !== 'iddsch') {
      data[key] = value.toString();
    }
  });

    this.http.post(`${this.apiUrl}/create`, data).subscribe({
      next: (response) => {
        alert('Appointment created successfully!');
        console.log(response);
      },
      error: (err) => {
        alert(`Error: ${err.error}`);
      },
    });
  }

  updateAppointment(): void {
    const form: HTMLFormElement = document.getElementById('updateAppoForm') as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    this.http.post(`${this.apiUrl}/update`, data).subscribe({
      next: () => {
        alert('Appointment updated successfully!');
      },
      error: (err) => {
        alert(`Error: ${err.error}`);
      },
    });
  }

  getAppointmentsByDocume(): void {
    const form: HTMLFormElement = document.getElementById('getAppoForm') as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    this.http.post(`${this.apiUrl}/getbydocume`, data).subscribe({
      next: (response) => {
        alert('Appointments retrieved successfully! Check console for details.');
        console.log(response);
      },
      error: (err) => {
        alert(`Error: ${err.error}`);
      },
    });
  }
}
