import type { AxiosInstance } from 'axios'
import type { Response } from '@/types/request'
import type { CreateDaemonDate } from '@/types/daemon'

export * from '@/types/daemon'

export const removeDaemon = (request: AxiosInstance, daemonUUID: string) => {
    return request.delete<Response<boolean>>(`/service/remote_service`, {
        params: {
            uuid: daemonUUID
        }
    })
}

export const linkDaemon = (request: AxiosInstance, daemonUUID: string) => {
    return request.get<Response>(`/service/link_remote_service`, {
        params: {
            uuid: daemonUUID
        }
    })
}

export const updateDaemon = (
    request: AxiosInstance,
    daemonUUID: string,
    data: {
        ip: string
        port: number
        prefix: string
        available: boolean
        remarks: string
        apiKey: string
    }
) => {
    return request.put<Response<boolean>>(`/service/remote_service`, {
        uuid: daemonUUID,
        ...data
    })
}

export const addDaemon = (request: AxiosInstance, data: CreateDaemonDate) => {
    return request.post<Response<string>>(`/service/remote_service`, data)
}
