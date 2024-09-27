import type { AxiosInstance } from 'axios'
import type { Response } from '@/types/request'
import type { Instance } from '@/types/instance'

export const getInstanceDetail = (
    request: AxiosInstance,
    instanceUUID: string,
    daemonUUID: string
) => {
    return request.get<Response<Instance>>(`/instance`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    })
}
