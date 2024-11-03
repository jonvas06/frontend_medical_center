export interface Patient {
    patientId: number;            // pant_idpant
    auditStatus: 'A' | 'E';       // pant_audsta
    roleId: number;               // pant_idrole
    firstName: string;            // pant_ffname
    secondName: string;           // pant_sfname
    firstLastName: string;        // pant_flname
    secondLastName: string;       // pant_slname
    dateOfBirth: Date;            // pant_daybir
}
  