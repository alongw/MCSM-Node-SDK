import axios, { type AxiosResponse } from 'axios'

export * from '@/types/request'

import type { Result } from '@/types/request'

export const newRequest = (baseURL: string, apikey: string) => {
    const request = axios.create({
        baseURL
    })

    /**
     * default request headers
     * https://docs.mcsmanager.com/apis/get_apikey.html#%E7%A4%BA%E4%BE%8B%E7%94%A8%E6%B3%95
     */
    request.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
    request.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

    request.defaults.params = {
        apikey
    }

    request.interceptors.response.use(
        (response: AxiosResponse): AxiosResponse<Result> => {
            response.data = {
                status: response.data.status || response.status,
                msg: response.data.msg || response.data.message || response.statusText,
                data: response.data.data || response.data
            }
            return response
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return request
}
