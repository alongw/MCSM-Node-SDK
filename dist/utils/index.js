import _ from 'lodash';
export const parseConfig = (config) => {
    const newConfig = {
        api_key: _.trim(config.api_key),
        panel_url: _.chain(config.panel_url).trim().trimEnd('/').value(),
        auto_catch_http_error: config.auto_catch_http_error || false
    };
    return newConfig;
};
//# sourceMappingURL=index.js.map