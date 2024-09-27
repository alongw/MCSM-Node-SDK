import { parseConfig } from '@/utils/index'
import { newRequest } from '@/utils/request'
import { getOverview as getOverviewApi } from '@/apis/overview'

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
    request: AxiosInstance

    constructor(config: MCSM_CONSTRUCTOR_CONFIG) {
        const { api_key, panel_url, auto_catch_http_error } = parseConfig(config)
        this.#apikey = api_key
        this.#baseURL = panel_url
        this.request = newRequest(this.#baseURL, this.#apikey, auto_catch_http_error)
    }

    async getOverview() {
        const result = await getOverviewApi(this.request)
        return result
    }
}

// test code
const mcsm = new MCSManagerClient({
    api_key: 'ab57c1ee640d4c168df79a8d2fa8f535',
    panel_url: 'http://localhost:23333/api',
    auto_catch_http_error: false
})
const result = await mcsm.getOverview()
console.log(result.data)
