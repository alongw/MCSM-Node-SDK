import { parseConfig } from '@/utils/index'
import type { MCSM_CONSTRUCTOR_CONFIG } from '@/types/index'

/**
 * @class MCSM
 * @description Main class for the MCSM
 * @param {MCSM_CONSTRUCTOR_CONFIG} config - Configuration object for the MCSM
 */
export class MCSM {
    #apikey: string
    #baseURL: string

    constructor(config: MCSM_CONSTRUCTOR_CONFIG) {
        const { api_key, panel_url } = parseConfig(config)
        this.#apikey = api_key
        this.#baseURL = panel_url
    }
}

// test code
