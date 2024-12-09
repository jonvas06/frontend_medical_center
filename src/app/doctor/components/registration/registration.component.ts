import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DoctorService } from '../../../services/doctor.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'register-doctor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DoctorService]
})
export class DoctorRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {
    this.registrationForm = this.fb.group({
      user_ffname: ['', Validators.required],
      user_sfname: [''],
      user_flname: ['', Validators.required],
      user_slname: [''],
      user_email: ['', Validators.required],
      user_phonee: [''],
      user_daybir: [''],
      user_passwo: ['', Validators.required],
      user_docume: ['', Validators.required],
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
        daybir: this.registrationForm.value.user_daybir,
        phonee: this.registrationForm.value.user_phonee,
        email: this.registrationForm.value.user_email,
        password: this.registrationForm.value.user_passwo,
        docume: this.registrationForm.value.user_docume,
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