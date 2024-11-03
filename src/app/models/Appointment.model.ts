export interface Appointment {
    appointmentId: number;        // appo_idappo
    auditStatus: 'A' | 'E';       // appo_audsta
    appointmentDate: Date;        // appo_apdate
    userId: number;               // appo_iduser
    patientId: number;            // appo_idpant
}
  