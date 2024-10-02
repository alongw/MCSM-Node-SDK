import { type CreateDaemonDate, type UpdateDaemonDate } from './../apis/daemon';
import { AxiosInstance } from 'axios';
export * from './../types/daemon';
export declare class Deamon {
    #private;
    constructor(request: AxiosInstance, daemonUUID: string);
    get daemonUUID(): string;
    remove: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
    link: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<any>, any>>;
    update: (data: UpdateDaemonDate) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
}
export declare const addDaemon: (request: AxiosInstance, data: CreateDaemonDate) => Promise<Deamon>;
