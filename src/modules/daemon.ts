import { removeDaemon } from '@/apis/daemon'

import { AxiosInstance } from 'axios'

export class Deamon {
    #daemonUUID: string
    #request: AxiosInstance

    constructor(daemonUUID: string, request: AxiosInstance) {
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
