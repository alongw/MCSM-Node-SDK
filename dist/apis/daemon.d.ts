import type { AxiosInstance } from 'axios';
import type { Response } from './../types/request';
import type { CreateDaemonDate, UpdateDaemonDate } from './../types/daemon';
export * from './../types/daemon';
export declare const removeDaemon: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const linkDaemon: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<any>, any>>;
export declare const updateDaemon: (request: AxiosInstance, daemonUUID: string, data: UpdateDaemonDate) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const addDaemon: (request: AxiosInstance, data: CreateDaemonDate) => Promise<import("axios").AxiosResponse<Response<string>, any>>;
