export interface CreateDaemonDate {
    ip: string;
    port: number;
    prefix: string;
    remarks: string;
    apiKey: string;
}
export interface UpdateDaemonDate extends CreateDaemonDate {
    available: boolean;
}
