import _ from 'lodash'
import type { MCSM_CONSTRUCTOR_CONFIG } from '@/types/index'

export const parseConfig = (config: MCSM_CONSTRUCTOR_CONFIG) => {
    const newConfig: MCSM_CONSTRUCTOR_CONFIG = {
        api_key: _.trim(config.api_key),
        panel_url: _.chain(config.panel_url).trimEnd('/').value()
    }

    return newConfig
}
