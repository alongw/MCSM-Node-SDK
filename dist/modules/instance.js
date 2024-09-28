import { getInstanceDetail, createInstance, deleteInstance, getOutput, killInstance, multiWorker, reinstallation, restartInstance, sendCommand, startInstance, stopInstance, updateInstance, updateInstanceConfig } from '@/apis/instance';
export class Instance {
    #InstanceUUID;
    #Daemon;
    #request;
    constructor(request, InstanceUUID, Daemon) {
        this.#InstanceUUID = InstanceUUID;
        this.#Daemon = Daemon;
        this.#request = request;
    }
    get InstanceUUID() {
        return this.#InstanceUUID;
    }
    get DaemonUUID() {
        return this.#Daemon.daemonUUID;
    }
    get useDaemon() {
        return this.#Daemon;
    }
    getInstanceDetail = async () => {
        const result = await getInstanceDetail(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID);
        return result;
    };
    updateInstanceConfig = async (InstanceConfig) => {
        const result = await updateInstanceConfig(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, InstanceConfig);
        return result;
    };
    deleteInstance = async (config) => {
        const result = await deleteInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, config);
        return result;
    };
    start = () => {
        return startInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID);
    };
    stop = () => {
        return stopInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID);
    };
    kill = () => {
        return killInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID);
    };
    restart = () => {
        return restartInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID);
    };
    update = (task_name) => {
        return updateInstance(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, { task_name });
    };
    send = (command) => {
        return sendCommand(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, {
            command
        });
    };
    getOutput = (size) => {
        return getOutput(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, {
            size: size === 'infinity' ? undefined : size
        });
    };
    reinstallation = (config) => {
        return reinstallation(this.#request, this.#InstanceUUID, this.#Daemon.daemonUUID, config);
    };
}
export const addInstance = async (request, data, daemon) => {
    const result = await createInstance(request, daemon.daemonUUID, data);
    if (result.status !== 200 || result.data.status !== 200)
        return undefined;
    const instance = new Instance(request, result.data.data.instanceUuid, daemon);
    return instance;
};
export const multiWorkerInstance = (request, instance, config) => {
    return multiWorker(request, instance.map((e) => {
        return {
            instanceUUID: e.InstanceUUID,
            daemonUUID: e.DaemonUUID
        };
    }), config);
};
//# sourceMappingURL=instance.js.map