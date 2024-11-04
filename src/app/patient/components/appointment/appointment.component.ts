import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  templateUrl: './appointment.component.html',
  imports: [ReactiveFormsModule],
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
