/**
 * Instance API
 * https://docs.mcsmanager.com/apis/api_instance.html
 */
import type { AxiosInstance } from 'axios';
import type { Response } from './../types/request';
import type { Instance, InstanceConfig } from './../types/instance';
export declare const getInstanceDetail: (request: AxiosInstance, instanceUUID: string, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<Instance>, any>>;
export declare const createInstance: (request: AxiosInstance, daemonId: string, config: InstanceConfig) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
    config: InstanceConfig;
}>, any>>;
export declare const updateInstanceConfig: (request: AxiosInstance, instanceUUID: string, daemonUUID: string, config: InstanceConfig) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const deleteInstance: (request: AxiosInstance, instanceUUIDList: string[] | string, daemonUUID: string, config: {
    deleteFile: boolean;
}) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const startInstance: (request: AxiosInstance, instanceUUID: string, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const stopInstance: (request: AxiosInstance, instanceUUID: string, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const restartInstance: (request: AxiosInstance, instanceUUID: string, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const killInstance: (request: AxiosInstance, instanceUUID: string, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const multiWorker: (request: AxiosInstance, instance: {
    instanceUUID: string;
    daemonUUID: string;
}[], config: {
    method: "start" | "stop" | "restart" | "kill";
}) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const updateInstance: (request: AxiosInstance, instanceUUID: string, daemonUUID: string, config: {
    task_name: string;
}) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const sendCommand: (request: AxiosInstance, instanceUUID: string, daemonUUID: string, config: {
    command: string;
}) => Promise<import("axios").AxiosResponse<Response<{
    instanceUuid: string;
}>, any>>;
export declare const getOutput: (request: AxiosInstance, instanceUUID: string, daemonUUID: string, config?: {
    size: number;
}) => Promise<import("axios").AxiosResponse<Response<string>, any>>;
export declare const reinstallation: (request: AxiosInstance, instanceUUID: string, daemonUUID: string, config: {
    targetUrl: string;
    title: string;
    description: string;
}) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
