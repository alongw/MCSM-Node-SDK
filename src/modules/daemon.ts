import {
    removeDaemon,
    addDaemon as addDaemonApi,
    type CreateDaemonDate
} from '@/apis/daemon'

import { AxiosInstance } from 'axios'

export * from '@/types/daemon'

export class Deamon {
    #daemonUUID: string
    #request: AxiosInstance

    constructor(request: AxiosInstance, daemonUUID: string) {
        this.#daemonUUID = daemonUUID
        this.#request = request
    }

    get daemonUUID() {
        return this.#daemonUUID
    }

    remove = async () => {
        const result = await removeDaemon(this.#request, this.#daemonUUID)
        return result
    }
}

export const addDaemon = async (request: AxiosInstance, data: CreateDaemonDate) => {
    const result = await addDaemonApi(request, data)
    if (result.status !== 200 || result.data.status !== 200) return undefined

    const daemon = new Deamon(request, result.data.data)

    return daemon
}
