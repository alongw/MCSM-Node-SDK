import type { AxiosInstance } from 'axios';
export declare const useImage: (request: AxiosInstance, daemonUUID: string) => {
    getImageList: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<import("../types/image").Image[]>, any>>;
    getContainerImageList: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<import("../types/image").Container[]>, any>>;
    getNetworkList: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<import("../types/image").Network[]>, any>>;
    createImage: (config: {
        name: string;
        tag: string;
        dockerFile: string;
    }) => Promise<import("axios").AxiosResponse<import("../types/request").Response<import("../types/image").Image>, any>>;
    getBuildProgress: () => Promise<import("axios").AxiosResponse<import("../types/request").Response<Record<string, 2 | 1 | -1>>, any>>;
};
