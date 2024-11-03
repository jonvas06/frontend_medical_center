export interface MedicalRecord {
    medicalRecordId: number;      // medr_idmedr
    auditStatus: 'A' | 'E';       // medr_audsta
    appointmentId: number;        // medr_idappo
    historyId: number;            // medr_idhism
    recordDate: Date;             // medr_datmed
}
  