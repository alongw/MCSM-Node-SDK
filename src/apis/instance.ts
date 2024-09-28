/**
 * Instance API
 * https://docs.mcsmanager.com/apis/api_instance.html
 */

import type { AxiosInstance } from 'axios'
import type { Response } from '@/types/request'
import type { Instance, InstanceConfig } from '@/types/instance'

export const getInstanceDetail = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<Response<Instance>>(`/instance`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const createInstance = (
    request: AxiosInstance,
    daemonId: string,
    config: InstanceConfig
) => {
    return request.post<
        Response<{
            instanceUuid: string
            config: InstanceConfig
        }>
    >(`/instance`, config, {
        params: {
            daemonId: daemonId
        }
    })
}

export const updateInstanceConfig = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string,
    config: InstanceConfig
) => {
    return request.put<
        Response<{
            instanceUuid: string
        }>
    >(`/instance`, config, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const deleteInstance = (
    request: AxiosInstance,
    instanceUUIDList: string[] | string,
    daemonUUID: string,
    config: {
        deleteFile: boolean
    }
) => {
    if (typeof instanceUUIDList === 'string') {
        instanceUUIDList = [instanceUUIDList]
    }
    return request.delete<Response<boolean>>(`/instance`, {
        params: {
            daemonId: daemonUUID
        },
        data: {
            uuids: instanceUUIDList,
            deleteFile: config.deleteFile
        }
    })
}

export const startInstance = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<
        Response<{
            instanceUuid: string
        }>
    >(`/protected_instance/open`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const stopInstance = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<
        Response<{
            instanceUuid: string
        }>
    >('/protected_instance/stop', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const restartInstance = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<
        Response<{
            instanceUuid: string
        }>
    >('/protected_instance/restart', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const killInstance = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<
        Response<{
            instanceUuid: string
        }>
    >('/protected_instance/kill', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}

export const multiWorker = (
    request: AxiosInstance,
    instance: {
        instanceUUID: string
        daemonUUID: string
    }[],
    config: {
        method: 'start' | 'stop' | 'restart' | 'kill'
    }
) => {
    return request.post<Response<boolean>>(
        `/protected_instance/multi_${config.method}`,
        {},
        {
            params: instance.map((e) => {
                return {
                    daemonId: e.daemonUUID,
                    instanceUuid: e.instanceUUID
                }
            })
        }
    )
}

export const updateInstance = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string,
    config: {
        task_name: string
    }
) => {
    return request.get<Response<boolean>>('/protected_instance/asynchronous', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            task_name: config.task_name
        }
    })
}

export const sendCommand = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string,
    config: {
        command: string
    }
) => {
    return request.get<
        Response<{
            instanceUuid: string
        }>
    >('/protected_instance/command', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            command: config.command
        }
    })
}

export const getOutput = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string,
    config?: {
        size: number
    }
) => {
    return request.get<Response<string>>(`/protected_instance/output`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            size: config?.size
        }
    })
}

export const reinstallation = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string,
    config: {
        targetUrl: string
        title: string
        description: string
    }
) => {
    return request.post<Response<boolean>>(
        '/protected_instance/install_instance',
        config,
        {
            params: {
                daemonId: daemonUUID,
                uuid: instanceUUID
            }
        }
    )
}
