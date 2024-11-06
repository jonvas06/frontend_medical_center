import { Component } from '@angular/core';
import { PatientRegistrationComponent } from '../patient/components/registration/registration.component'
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PatientRegistrationComponent, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
