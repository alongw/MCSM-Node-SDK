import axios from 'axios';
export * from './../types/request';
export const newRequest = (baseURL, apikey, auto_catch_http_error) => {
    const request = axios.create({
        baseURL
    });
    /**
     * default request headers
     * https://docs.mcsmanager.com/apis/get_apikey.html#%E7%A4%BA%E4%BE%8B%E7%94%A8%E6%B3%95
     */
    request.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
    request.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';
    request.defaults.params = {
        apikey
    };
    request.interceptors.response.use((response) => {
        response.data = {
            status: response.data.status || response.status,
            msg: response.data.msg || response.data.message || response.statusText,
            data: response.data.data || response.data
        };
        return response;
    }, (error) => {
        if (!auto_catch_http_error)
            return Promise.reject(error);
        return Promise.resolve({
            data: {
                status: error.response?.data?.status || error.response?.status,
                msg: error.response?.data?.msg ||
                    error.response?.data?.message ||
                    error.response?.statusText,
                data: error.response?.data?.data || undefined,
                originError: error
            }
        });
    });
    return request;
};
//# sourceMappingURL=request.js.map