import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientRegistrationComponent } from './patient/components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './patient/components/appointment/appointment.component';
import { DoctorRegistrationComponent } from './doctor/components/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent,
    PatientRegistrationComponent,
    DoctorRegistrationComponent,
    AppointmentComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_medical_center';
}
