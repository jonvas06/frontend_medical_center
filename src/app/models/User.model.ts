export interface User {
    userId: number;               // user_iduser
    auditStatus: 'A' | 'E';       // user_audsta
    firstName: string;            // user_ffname
    secondName: string;           // user_sfname
    firstLastName: string;        // user_flname
    secondLastName: string;       // user_slname
    roleId: number;               // user_idrole
    email: string;                // user_eemail
    phoneNumber: string;          // user_phonee
    workId: number;               // user_idwork
    specialityId: number;         // user_idespe
}
  