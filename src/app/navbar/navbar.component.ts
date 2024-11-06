import { Component } from '@angular/core';
import { PatientRegistrationComponent } from '../patient/components/registration/registration.component'
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorRegistrationComponent } from '../doctor/components/registration/registration.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PatientRegistrationComponent,DoctorRegistrationComponent, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
