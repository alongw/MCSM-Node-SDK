import {} from '@/types/instance'

export class Instance {
    #InstanceUUID: string
    #DaemonUUID: string

    constructor(InstanceUUID: string, DaemonUUID: string) {
        this.#InstanceUUID = InstanceUUID
        this.#DaemonUUID = DaemonUUID
    }

    get InstanceUUID() {
        return this.#InstanceUUID
    }

    get DaemonUUID() {
        return this.#DaemonUUID
    }
}
