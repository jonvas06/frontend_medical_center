export interface Schedule {
    scheduleId: number;           // sche_idsche
    auditStatus: 'A' | 'E';       // sche_audsta
    userId: number;               // sche_iduser
    day: string;                  // sche_dayday
    timeStart: Date;              // sche_timest
    timeEnd: Date;                // sche_timend
}
  