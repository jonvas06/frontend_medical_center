import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from '../patient/components/appointment/appointment.component';
import { PatientRegistrationComponent } from '../patient/components/registration/registration.component';
import { DoctorRegistrationComponent } from '../doctor/components/registration/registration.component';

const routes: Routes = [
  { path: 'agendar-cita', component: AppointmentComponent },
  { path: 'register-patient', component: PatientRegistrationComponent },
  { path: 'register-doctor', component: DoctorRegistrationComponent },
  // Otras rutas aplicación
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '', redirectTo: '/Admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
