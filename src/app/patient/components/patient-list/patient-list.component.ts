import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos', error);
      }
    });

}}
