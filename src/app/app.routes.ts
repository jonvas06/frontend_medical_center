import { Routes } from '@angular/router';
import { RegistrationComponent } from './patient/components/registration/registration.component';
import { AppointmentComponent } from './patient/components/appointment/appointment.component';

export const routes: Routes = [
    {path: 'register-patient', component: RegistrationComponent},
    {path: 'agendar-cita', component: AppointmentComponent}

];
