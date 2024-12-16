import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'register-patient',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [PatientService]
})
export class PatientRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.registrationForm = this.fb.group({
      patientFName: ['', Validators.required],
      patientSName: [''],
      patientFSame: ['', Validators.required],
      patientSSame: [''],
      patientemail: ['', Validators.required], //requerido
      patientphone: [''],  
      pant_daybir: [''],
      pant_passwo: ['', Validators.required],//requerido
      pant_document: ['', Validators.required],//requerido
    });
  }

  onSubmit(): void {
    console.log("Probando");
    
    if (this.registrationForm.valid) {
      const formData = {
        firstName: this.registrationForm.value.patientFName,
        secondName: this.registrationForm.value.patientSName,
        firstLastname: this.registrationForm.value.patientFSame,
        secondLastname: this.registrationForm.value.patientSSame,
        birthDate: this.registrationForm.value.pant_daybir,
        email: this.registrationForm.value.patientemail,
        phone: this.registrationForm.value.patientemail,
        gender: this.registrationForm.value.patientemail,
        password: this.registrationForm.value.pant_passwo,
        document: this.registrationForm.value.pant_document,
      };

      this.patientService.registerPatient(formData).subscribe(
        response => {
          console.log('Paciente registrado exitosamente:', response);
          alert('Paciente registrado exitosamente');
        },
        error => {
          console.error('Error al registrar el paciente:', error);
          alert('Hubo un problema al registrar el paciente.');
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}