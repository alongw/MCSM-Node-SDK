import _ from 'lodash'
import type { MCSM_CONSTRUCTOR_CONFIG } from '@/types/index'

export const parseConfig = (config: MCSM_CONSTRUCTOR_CONFIG) => {
    const newConfig: MCSM_CONSTRUCTOR_CONFIG = {
        api_key: _.trim(config.api_key),
        panel_url: _.chain(config.panel_url).trim().trimEnd('/').value(),
        auto_catch_http_error: config.auto_catch_http_error || false
    }

    return newConfig
}
