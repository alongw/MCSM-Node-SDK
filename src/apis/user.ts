import type { AxiosInstance } from 'axios'
import type { Response } from './../types/request'

import type { User } from './../types/user'
import type { Instance } from './../types/instance'

export const getUserList = (
    request: AxiosInstance,
    config: {
        page: number
        pageSize: number
        role?: 1 | 10 | -1 // 用户权限 1=用户, 10=管理员, -1=被封禁的用户
        userName?: string
    }
) => {
    return request.get<
        Response<{
            data: User[]
            total: number
            page: number
            pageSize: number
            maxPage: number
        }>
    >('/auth/search', {
        params: config
    })
}

export const createUser = (
    request: AxiosInstance,
    config: {
        username: string
        password: string
        permission: 1 | 10 | -1
    }
) => {
    return request.post<
        Response<{
            uuid: string
            userName: string
            permission: 1 | 10 | -1
        }>
    >('/auth', config)
}

export const updateUser = (
    request: AxiosInstance,
    userId: string,
    config: {
        uuid: string
        userName: string
        loginTime: string
        registerTime: string
        permission: number
        instances: Instance[]
        apiKey: string
        isInit: boolean
        secret: string
        open2FA: boolean
    }
) => {
    return request.put<Response<boolean>>('/auth', {
        uuid: userId,
        config
    })
}

export const removeUser = (request: AxiosInstance, userList: string[]) => {
    return request.delete<Response<boolean>>('/auth', {
        data: userList
    })
}
