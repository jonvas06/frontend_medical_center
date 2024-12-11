import { Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient/components/registration/registration.component';
import { AppointmentComponent } from './patient/components/appointment/appointment.component';
import { AppointmentGetComponent } from './patient/components/appointment-get/appointment-get.component';
import { AppointmentUpdateComponent } from './patient/components/appointment-update/appointment-update.component';
import { DoctorRegistrationComponent } from './doctor/components/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path: 'register-patient', component: PatientRegistrationComponent, canActivate: [AuthGuard], data: { roles: [2,3] } },
    {path: 'register-doctor', component: DoctorRegistrationComponent, canActivate: [AuthGuard], data: { roles: [2,3] }},
    {path: 'login', component: LoginComponent},
    {path: 'agendar-cita', component: AppointmentComponent, /*canActivate: [AuthGuard], data: { roles: [1,3] }*/},
    {path: 'buscar-cita', component: AppointmentGetComponent, /*canActivate: [AuthGuard], data: { roles: [1,3] }*/},
    {path: 'actualizar-cita', component: AppointmentUpdateComponent, /*canActivate: [AuthGuard], data: { roles: [1,3] }*/},
    {path: '**', redirectTo: '', pathMatch: 'full'}

];
