import type { AxiosInstance } from 'axios';
import type { Response } from './../types/request';
import type { Image, Container, Network } from './../types/image';
export declare const getImageList: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<Image[]>, any>>;
export declare const getContainerImageList: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<Container[]>, any>>;
export declare const getNetwork: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<Network[]>, any>>;
export declare const createImage: (request: AxiosInstance, daemonUUID: string, config: {
    name: string;
    tag: string;
    dockerFile: string;
}) => Promise<import("axios").AxiosResponse<Response<Image>, any>>;
export declare const getBuildProgress: (request: AxiosInstance, daemonUUID: string) => Promise<import("axios").AxiosResponse<Response<Record<string, 2 | 1 | -1>>, any>>;
