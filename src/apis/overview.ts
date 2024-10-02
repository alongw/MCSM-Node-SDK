import type { AxiosInstance } from 'axios'
import type { Response } from './../types/request'
import type { Overview } from './../types/overview'

export const getOverview = (request: AxiosInstance) => {
    return request.get<Response<Overview>>('/overview')
}
