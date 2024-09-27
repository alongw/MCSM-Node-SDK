export class Deamon {
    #daemonUUID: string

    constructor(daemonUUID: string) {
        this.#daemonUUID = daemonUUID
    }

    get daemonUUID() {
        return this.#daemonUUID
    }

    remove = async () => {
        // remove daemon
    }
}
