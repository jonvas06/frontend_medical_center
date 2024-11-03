import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      speciality: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Appointment Data:', this.appointmentForm.value);
      // Aquí iría la lógica para enviar los datos al backend
    } else {
      console.log('Form is not valid');
    }
  }
}
