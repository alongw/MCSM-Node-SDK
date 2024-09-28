import { Deamon } from '@/modules/daemon';
import type { AxiosInstance } from 'axios';
import type { InstanceConfig } from '@/types/instance';
export declare class Instance {
    #private;
    constructor(request: AxiosInstance, InstanceUUID: string, Daemon: Deamon);
    get InstanceUUID(): string;
    get DaemonUUID(): string;
    get useDaemon(): Deamon;
    getInstanceDetail: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<import("@/types/instance").Instance>, any>>;
    updateInstanceConfig: (InstanceConfig: InstanceConfig) => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    deleteInstance: (config: {
        deleteFile: boolean;
    }) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
    start: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    stop: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    kill: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    restart: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    update: (task_name: string) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
    send: (command: string) => Promise<import("axios").AxiosResponse<import("../types/request").Response<{
        instanceUuid: string;
    }>, any>>;
    getOutput: (size: number | "infinity") => Promise<import("axios").AxiosResponse<import("../types/request").Response<string>, any>>;
    reinstallation: (config: {
        targetUrl: string;
        title: string;
        description: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
}
export declare const addInstance: (request: AxiosInstance, data: InstanceConfig, daemon: Deamon) => Promise<Instance>;
export declare const multiWorkerInstance: (request: AxiosInstance, instance: Instance[], config: {
    method: "start" | "stop" | "restart" | "kill";
}) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
