import { parseConfig } from '@/utils/index'
import { newRequest } from '@/utils/request'
import { getOverview as getOverviewApi } from '@/apis/overview'

import { Deamon, addDaemon, type CreateDaemonDate } from '@/modules/daemon'
import { Instance } from '@/modules/instance'

import type { AxiosInstance } from 'axios'
import type { MCSM_CONSTRUCTOR_CONFIG } from '@/types/index'

/**
 * @class MCSM
 * @description Main class for the MCSM
 * @param {MCSM_CONSTRUCTOR_CONFIG} config - Configuration object for the MCSM
 */
export class MCSManagerClient {
    #apikey: string
    #baseURL: string
    #request: AxiosInstance

    constructor(config: MCSM_CONSTRUCTOR_CONFIG) {
        const { api_key, panel_url, auto_catch_http_error } = parseConfig(config)
        this.#apikey = api_key
        this.#baseURL = panel_url
        this.#request = newRequest(this.#baseURL, this.#apikey, auto_catch_http_error)
    }

    get request() {
        return this.#request
    }

    get baseURL() {
        return this.#baseURL
    }

    getOverview() {
        return getOverviewApi(this.#request)
    }

    useDaemon(DaemonUUID: string) {
        return new Deamon(this.#request, DaemonUUID)
    }

    addDaemon(data: CreateDaemonDate) {
        return addDaemon(this.#request, data)
    }

    useInstance(InstanceUUID: string, daemon: string | Deamon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon
        return new Instance(this.#request, InstanceUUID, daemon)
    }
}

// test code
const mcsm = new MCSManagerClient({
    api_key: 'ab57c1ee640d4c168df79a8d2fa8f535',
    panel_url: 'http://localhost:23333/api',
    auto_catch_http_error: true
})
