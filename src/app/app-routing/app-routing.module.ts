import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from '../patient/components/appointment/appointment.component';
import { RegistrationComponent } from '../patient/components/registration/registration.component';

const routes: Routes = [
  { path: 'agendar-cita', component: AppointmentComponent },
  { path: 'register-patient', component: RegistrationComponent },
  // Otras rutas aplicación
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '', redirectTo: '/Admin', pathMatch: 'full' },
  { path: '', redirectTo: '/RegisterPatient', pathMatch: 'full' },
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
