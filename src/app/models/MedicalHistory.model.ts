export interface MedicalHistory {
    historyId: number;            // hism_idhism
    auditStatus: 'A' | 'E';       // hism_audsta
    patientId: number;            // hism_idpant
    historyDate: Date;            // hism_dathis
}
  