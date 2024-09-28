// import {} from '@/types/instance'
import { Deamon } from '@/modules/daemon'

import {
    getInstanceDetail,
    createInstance,
    deleteInstance,
    getOutput,
    killInstance,
    multiWorker,
    reinstallation,
    restartInstance,
    sendCommand,
    startInstance,
    stopInstance,
    updateInstance,
    updateInstanceConfig
} from '@/apis/instance'

import type { AxiosInstance } from 'axios'
import type { InstanceConfig } from '@/types/instance'

export class Instance {
    #InstanceUUID: string
    #Daemon: Deamon
    #request: AxiosInstance

    constructor(request: AxiosInstance, InstanceUUID: string, Daemon: Deamon) {
        this.#InstanceUUID = InstanceUUID
        this.#Daemon = Daemon
        this.#request = request
    }

    get InstanceUUID() {
        return this.#InstanceUUID
    }

    get DaemonUUID() {
        return this.#Daemon.daemonUUID
    }

    get useDaemon() {
        return this.#Daemon
    }

    getInstanceDetail = async () => {
        const result = await getInstanceDetail(
            this.#request,
            this.#InstanceUUID,
            this.#Daemon.daemonUUID
        )
        return result
    }

    updateInstanceConfig = async (InstanceConfig: InstanceConfig) => {
        const result = await updateInstanceConfig(
            this.#request,
            this.#InstanceUUID,
            this.#Daemon.daemonUUID,
            InstanceConfig
        )
        return result
    }

    deleteInstance = async (config: { deleteFile: boolean }) => {
        const result = await deleteInstance(
            this.#request,
            this.#InstanceUUID,
            this.#Daemon.daemonUUID,
            config
        )
        return result
    }

    start = () => {
        return startInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID)
    }

    stop = () => {
        return stopInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID)
    }

    kill = () => {
        return killInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID)
    }

    restart = () => {
        return restartInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID)
    }

    update = (task_name: string) => {
        return updateInstance(
            this.#request,
            this.#InstanceUUID,
            this.#Daemon.daemonUUID,
            { task_name }
        )
    }

    send = (command: string) => {
        return sendCommand(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, {
            command
        })
    }

    getOutput = (size: number | 'infinity') => {
        return getOutput(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, {
            size: size === 'infinity' ? undefined : size
        })
    }

    reinstallation = (config: {
        targetUrl: string
        title: string
        description: string
    }) => {
        return reinstallation(
            this.#request,
            this.#InstanceUUID,
            this.#Daemon.daemonUUID,
            config
        )
    }
}

export const addInstance = (request: AxiosInstance, data: InstanceConfig) => {
    return createInstance(request, data)
}
