import { removeDaemon, addDaemon as addDaemonApi, linkDaemon, updateDaemon } from './../apis/daemon';
export * from './../types/daemon';
export class Deamon {
    #daemonUUID;
    #request;
    constructor(request, daemonUUID) {
        this.#daemonUUID = daemonUUID;
        this.#request = request;
    }
    get daemonUUID() {
        return this.#daemonUUID;
    }
    remove = async () => {
        const result = await removeDaemon(this.#request, this.#daemonUUID);
        return result;
    };
    link = async () => {
        const result = await linkDaemon(this.#request, this.#daemonUUID);
        return result;
    };
    update = async (data) => {
        const result = await updateDaemon(this.#request, this.#daemonUUID, data);
        return result;
    };
}
export const addDaemon = async (request, data) => {
    const result = await addDaemonApi(request, data);
    if (result.status !== 200 || result.data.status !== 200)
        return undefined;
    const daemon = new Deamon(request, result.data.data);
    return daemon;
};
//# sourceMappingURL=daemon.js.map