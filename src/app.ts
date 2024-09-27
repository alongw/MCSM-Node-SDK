import { parseConfig } from '@/utils/index'
import { newRequest } from '@/utils/request'
import type { AxiosInstance } from 'axios'
import type { MCSM_CONSTRUCTOR_CONFIG } from '@/types/index'

/**
 * @class MCSM
 * @description Main class for the MCSM
 * @param {MCSM_CONSTRUCTOR_CONFIG} config - Configuration object for the MCSM
 */
export class MCSM {
    #apikey: string
    #baseURL: string
    request: AxiosInstance

    constructor(config: MCSM_CONSTRUCTOR_CONFIG) {
        const { api_key, panel_url } = parseConfig(config)
        this.#apikey = api_key
        this.#baseURL = panel_url
        this.request = newRequest(this.#baseURL, this.#apikey)
    }
}

// test code
const mcsm = new MCSM({
    api_key: 'ab57c1ee640d4c168df79a8d2fa8f535',
    panel_url: 'http://localhost:23333'
})
