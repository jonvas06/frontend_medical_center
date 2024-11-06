import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'register-patient',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [PatientService]
})
export class PatientRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.registrationForm = this.fb.group({
      patientFName: ['', Validators.required],
      patientSName: ['', Validators.required],
      patientFSame: ['', Validators.required],
      patientSSame: ['', Validators.required],
      patientemail: ['', Validators.required],
      patientphone: ['', Validators.required],
      pant_daybir: ['', Validators.required],
      pant_passwo: ['', Validators.required],
      pant_document: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = {
        audsta: 'A',
        idrole: 1, // id cualquiera que represente el rol de paciente
        ffname: this.registrationForm.value.patientFName,
        sfname: this.registrationForm.value.patientSName,
        flname: this.registrationForm.value.patientFSame,
        slname: this.registrationForm.value.patientSSame,
        daybir: this.registrationForm.value.pant_daybir,
        eemail: this.registrationForm.value.patientemail,
        passwo: this.registrationForm.value.pant_passwo,
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