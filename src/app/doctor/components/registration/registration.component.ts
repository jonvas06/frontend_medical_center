import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../../services/patient.service';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'register-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DoctorService]
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {
    this.registrationForm = this.fb.group({
      user_ffname: ['', Validators.required],
      user_sfname: ['', Validators.required],
      user_flname: ['', Validators.required],
      user_slname: ['', Validators.required],
      user_eemail: ['', Validators.required],
      user_phonee: ['', Validators.required],
      user_passwo: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = {
        audsta: 'A',
        idrole: 2, // id cualquiera que represente el rol de doctor
        ffname: this.registrationForm.value.user_ffname,
        sfname: this.registrationForm.value.user_sfname,
        flname: this.registrationForm.value.user_flname,
        slname: this.registrationForm.value.user_slname,
        daybir: this.registrationForm.value.user_eemail,
        eemail: this.registrationForm.value.user_phonee,
        passwo: this.registrationForm.value.user_passwo,
      };

      this.doctorService.registerDoctor(formData).subscribe(
        response => {
          console.log('Doctor registrado exitosamente:', response);
          alert('Doctor registrado exitosamente');
        },
        error => {
          console.error('Error al registrar el doctor:', error);
          alert('Hubo un problema al registrar el doctor.');
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}