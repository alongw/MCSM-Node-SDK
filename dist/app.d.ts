import { Deamon, type CreateDaemonDate } from './modules/daemon';
import { Instance } from './modules/instance';
import type { AxiosInstance } from 'axios';
import type { MCSM_CONSTRUCTOR_CONFIG } from './types/index';
import type { InstanceConfig } from './types/instance';
export declare class MCSManagerClient {
    #private;
    constructor(config: MCSM_CONSTRUCTOR_CONFIG);
    get request(): AxiosInstance;
    get baseURL(): string;
    getOverview(): Promise<import("axios").AxiosResponse<import("./types/request").Response<import("./types/overview").Overview>, any>>;
    useDaemon(DaemonUUID: string): Deamon;
    addDaemon(data: CreateDaemonDate): Promise<Deamon>;
    useInstance(InstanceUUID: string, daemon: string | Deamon): Instance;
    addInstance(data: InstanceConfig, daemon: string | Deamon): Promise<Instance>;
    multiWorkerInstance(instance: Instance[], config: {
        method: 'start' | 'stop' | 'restart' | 'kill';
    }): Promise<import("axios").AxiosResponse<import("./types/request").Response<boolean>, any>>;
}
