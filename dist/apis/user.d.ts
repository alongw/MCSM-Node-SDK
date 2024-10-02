import type { AxiosInstance } from 'axios';
import type { Response } from './../types/request';
import type { User } from './../types/user';
import type { Instance } from './../types/instance';
export declare const getUserList: (request: AxiosInstance, config: {
    page: number;
    pageSize: number;
    role?: 1 | 10 | -1;
    userName?: string;
}) => Promise<import("axios").AxiosResponse<Response<{
    data: User[];
    total: number;
    page: number;
    pageSize: number;
    maxPage: number;
}>, any>>;
export declare const createUser: (request: AxiosInstance, config: {
    username: string;
    password: string;
    permission: 1 | 10 | -1;
}) => Promise<import("axios").AxiosResponse<Response<{
    uuid: string;
    userName: string;
    permission: 1 | 10 | -1;
}>, any>>;
export declare const updateUser: (request: AxiosInstance, userId: string, config: {
    uuid: string;
    userName: string;
    loginTime: string;
    registerTime: string;
    permission: number;
    instances: Instance[];
    apiKey: string;
    isInit: boolean;
    secret: string;
    open2FA: boolean;
}) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
export declare const removeUser: (request: AxiosInstance, userList: string[]) => Promise<import("axios").AxiosResponse<Response<boolean>, any>>;
