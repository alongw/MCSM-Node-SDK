// import {} from '@/types/instance'
import { Deamon } from '@/modules/daemon'

import { getInstanceDetail, createInstance } from '@/apis/instance'

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
}

export const addInstance = (request: AxiosInstance, data: InstanceConfig) => {
    return createInstance(request, data)
}
