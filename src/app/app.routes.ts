import { Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient/components/registration/registration.component';
import { AppointmentComponent } from './patient/components/appointment/appointment.component';
import { DoctorRegistrationComponent } from './doctor/components/registration/registration.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'register-patient', component: PatientRegistrationComponent},
    {path: 'register-doctor', component: DoctorRegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'agendar-cita', component: AppointmentComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}

];
