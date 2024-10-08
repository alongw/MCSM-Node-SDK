import { parseConfig } from './utils/index'
import { newRequest } from './utils/request'
import { getOverview as getOverviewApi } from './apis/overview'

import { Deamon, addDaemon, type CreateDaemonDate } from './modules/daemon'
import { Instance, addInstance, multiWorkerInstance } from './modules/instance'
import { batchDeleteUser, User, createUser, getUserList } from './modules/user'
import { useImage } from './modules/image'

import type { AxiosInstance } from 'axios'
import type { MCSM_CONSTRUCTOR_CONFIG } from './types/index'
import type { InstanceConfig } from './types/instance'

export class MCSManagerClient {
    #apikey: string
    #baseURL: string
    #request: AxiosInstance
    #auto_catch_http_error: boolean

    constructor(config: MCSM_CONSTRUCTOR_CONFIG) {
        const { api_key, panel_url, auto_catch_http_error } = parseConfig(config)
        this.#apikey = api_key
        this.#baseURL = panel_url
        this.#request = newRequest(this.#baseURL, this.#apikey, auto_catch_http_error)
        this.#auto_catch_http_error = auto_catch_http_error
    }

    get request() {
        return this.#request
    }

    get baseURL() {
        return this.#baseURL
    }

    getOverview() {
        return getOverviewApi(this.#request)
    }

    useDaemon(DaemonUUID: string) {
        return new Deamon(this.#request, DaemonUUID)
    }

    addDaemon(data: CreateDaemonDate) {
        return addDaemon(this.#request, data)
    }

    useInstance(InstanceUUID: string, daemon: string | Deamon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon
        return new Instance(this.#request, InstanceUUID, daemon)
    }

    addInstance(data: InstanceConfig, daemon: string | Deamon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon
        return addInstance(this.#request, data, daemon)
    }

    multiWorkerInstance(
        instance: Instance[],
        config: {
            method: 'start' | 'stop' | 'restart' | 'kill'
        }
    ) {
        return multiWorkerInstance(this.#request, instance, config)
    }

    useUser(UserUUID: string) {
        return new User(this.#request, UserUUID)
    }

    batchDeleteUser(user: string[] | User[] | User | string) {
        if (Array.isArray(user)) {
            user = user.map((item) => (typeof item === 'string' ? item : item.userUUID))
        } else if (typeof user === 'object') {
            user = [user.userUUID]
        } else {
            user = [user]
        }

        return batchDeleteUser(this.#request, user)
    }

    createUser(config: { username: string; password: string; permission: 1 | 10 | -1 }) {
        return createUser(this.#request, config)
    }

    getUserList(config: {
        page: number
        pageSize: number
        role?: 1 | 10 | -1
        userName?: string
    }) {
        return getUserList(this.#request, config)
    }

    useImage(daemon: string | Deamon) {
        daemon = typeof daemon === 'string' ? this.useDaemon(daemon) : daemon
        return useImage(this.#request, daemon.daemonUUID)
    }
}
