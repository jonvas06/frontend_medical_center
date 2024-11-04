import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'register-patient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent{
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      patientFName: ['', Validators.required],
      patientSName: ['', Validators.required],
      patientFSame: ['', Validators.required],
      patientSSame: ['', Validators.required],
      patientemail: ['', Validators.required],
      patientdirec: ['', Validators.required],
      patientphone: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Datos del formulario:', this.registrationForm.value);
      // Aquí puedes añadir lógica para enviar los datos al backend
    }
  }
}
