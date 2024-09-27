// import {} from '@/types/instance'
import { Deamon } from '@/modules/daemon'

export class Instance {
    #InstanceUUID: string
    #Daemon: Deamon

    constructor(InstanceUUID: string, Daemon: Deamon) {
        this.#InstanceUUID = InstanceUUID
        this.#Daemon = Daemon
    }

    get InstanceUUID() {
        return this.#InstanceUUID
    }

    get DaemonUUID() {
        return this.#Daemon.daemonUUID
    }
}
