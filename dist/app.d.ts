import { Deamon, type CreateDaemonDate } from './modules/daemon';
import { Instance } from './modules/instance';
import { User } from './modules/user';
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
    useUser(UserUUID: string): User;
    batchDeleteUser(user: string[] | User[] | User | string): Promise<import("axios").AxiosResponse<import("./types/request").Response<boolean>, any>>;
    createUser(config: {
        username: string;
        password: string;
        permission: 1 | 10 | -1;
    }): Promise<User>;
    getUserList(config: {
        page: number;
        pageSize: number;
        role?: 1 | 10 | -1;
        userName?: string;
    }): Promise<{
        total: number;
        page: number;
        pageSize: number;
        maxPage: number;
        data: User[];
    }>;
    useImage(daemon: string | Deamon): {
        getImageList: () => Promise<import("axios").AxiosResponse<import("./types/request").Response<import("./types/image").Image[]>, any>>;
        getContainerImageList: () => Promise<import("axios").AxiosResponse<import("./types/request").Response<import("./types/image").Container[]>, any>>;
        getNetworkList: () => Promise<import("axios").AxiosResponse<import("./types/request").Response<import("./types/image").Network[]>, any>>;
        createImage: (config: {
            name: string;
            tag: string;
            dockerFile: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/request").Response<import("./types/image").Image>, any>>;
        getBuildProgress: () => Promise<import("axios").AxiosResponse<import("./types/request").Response<Record<string, 2 | 1 | -1>>, any>>;
    };
}
