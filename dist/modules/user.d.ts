import { AxiosInstance } from 'axios';
import { type UpdateUserConfig } from './../apis/user';
export declare class User {
    #private;
    constructor(request: AxiosInstance, userUUID: string);
    get userUUID(): string;
    remove: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
    update: (config: UpdateUserConfig) => Promise<void>;
}
export declare const batchDeleteUser: (request: AxiosInstance, userUUIDs: string[]) => Promise<import("axios").AxiosResponse<import("../types/request").Response<boolean>, any>>;
export declare const createUser: (request: AxiosInstance, config: {
    username: string;
    password: string;
    permission: 1 | 10 | -1;
}) => Promise<User>;
export declare const getUserList: (request: AxiosInstance, config: {
    page: number;
    pageSize: number;
    role?: 1 | 10 | -1;
    userName?: string;
}) => Promise<{
    total: number;
    page: number;
    pageSize: number;
    maxPage: number;
    data: User[];
}>;
