import { Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient/components/registration/registration.component';
import { AppointmentComponent } from './patient/components/appointment/appointment.component';
import { DoctorRegistrationComponent } from './doctor/components/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { PatientListComponent } from './patient/components/patient-list/patient-list.component';
import { DoctorListComponent } from './doctor/components/doctor-list/doctor-list.component';

export const routes: Routes = [
    {path: 'register-patient', component: PatientRegistrationComponent, canActivate: [AuthGuard], data: { roles: [2,3] } },
    {path: 'patient-list', component: PatientListComponent, canActivate: [AuthGuard], data: { roles: [3] } },
    {path: 'register-doctor', component: DoctorRegistrationComponent, canActivate: [AuthGuard], data: { roles: [2,3] }},
    {path: 'doctor-list', component: DoctorListComponent, canActivate: [AuthGuard], data: { roles: [3] } },
    {path: 'login', component: LoginComponent},
    {path: 'agendar-cita', component: AppointmentComponent, canActivate: [AuthGuard], data: { roles: [1,3] }},
    {path: '**', redirectTo: '', pathMatch: 'full'}

];
