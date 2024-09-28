import { parseConfig } from '@/utils/index';
import { newRequest } from '@/utils/request';
import { getOverview as getOverviewApi } from '@/apis/overview';
import { Deamon, addDaemon } from '@/modules/daemon';
import { Instance, addInstance, multiWorkerInstance } from '@/modules/instance';
/**
 * @class MCSM
 * @description Main class for the MCSM
 * @param {MCSM_CONSTRUCTOR_CONFIG} config - Configuration object for the MCSM
 */
export class MCSManagerClient {
    #apikey;
    #baseURL;
    #request;
    constructor(config) {
        const { api_key, panel_url, auto_catch_http_error } = parseConfig(config);
        this.#apikey = api_key;
        this.#baseURL = panel_url;
        this.#request = newRequest(this.#baseURL, this.#apikey, auto_catch_http_error);
    }
    get request() {
        return this.#request;
    }
    get baseURL() {
        return this.#baseURL;
    }
    getOverview() {
        return getOverviewApi(this.#request);
    }
    useDaemon(DaemonUUID) {
        return new Deamon(this.#request, DaemonUUID);
    }
    addDaemon(data) {
        return addDaemon(this.#request, data);
    }
    useInstance(InstanceUUID, daemon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon;
        return new Instance(this.#request, InstanceUUID, daemon);
    }
    addInstance(data, daemon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon;
        return addInstance(this.#request, data, daemon);
    }
    multiWorkerInstance(instance, config) {
        return multiWorkerInstance(this.#request, instance, config);
    }
}
//# sourceMappingURL=app.js.map