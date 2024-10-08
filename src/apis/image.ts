import type { AxiosInstance } from 'axios'
import type { Response } from './../types/request'

import type { Image, Container, Network } from './../types/image'

export const getImageList = (request: AxiosInstance, daemonUUID: string) => {
    return request.get<Response<Image[]>>(`/environment/image`, {
        params: {
            daemonId: daemonUUID
        }
    })
}

export const getContainerImageList = (request: AxiosInstance, daemonUUID: string) => {
    return request.get<Response<Container[]>>(`/environment/containers`, {
        params: {
            daemonId: daemonUUID
        }
    })
}

export const getNetwork = (request: AxiosInstance, daemonUUID: string) => {
    return request.get<Response<Network[]>>(`/environment/network`, {
        params: {
            daemonId: daemonUUID
        }
    })
}

export const createImage = (
    request: AxiosInstance,
    daemonUUID: string,
    config: {
        name: string
        tag: string
        dockerFile: string
    }
) => {
    return request.post<Response<Image>>(`/environment/image`, config, {
        params: {
            daemonId: daemonUUID
        }
    })
}

export const getBuildProgress = (request: AxiosInstance, daemonUUID: string) => {
    return request.get<Response<Record<string, -1 | 1 | 2>>>(`/environment/progress`, {
        // -1 = Failed, 1 = Building, 2 = Complete
        params: {
            daemonId: daemonUUID
        }
    })
}
