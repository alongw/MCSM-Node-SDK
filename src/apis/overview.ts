import type { AxiosInstance } from 'axios'
import type { Overview } from '@/types/overview'
import type { Response } from '@/types/request'

export const getOverview = (request: AxiosInstance) => {
    return request.get<Response<Overview>>('/overview')
}
