import type { Instance } from './instance'

export interface UserInstance {
    instanceUuid: string // 实例的 UUID
    daemonId: string // 对应的守护进程 ID
}

export interface User {
    uuid: string // 用户的 UUID
    userName: string // 用户名
    passWord: string // 密码
    passWordType: number // 密码类型，1 代表某种加密方式
    salt: string // 加密时的盐值
    permission: number // 权限，1=用户, 10=管理员, -1=被封禁的用户
    registerTime: string // 注册时间
    loginTime: string // 登录时间
    instances: UserInstance[] // 用户拥有的实例列表
    apiKey: string // API 密钥
    isInit: boolean // 是否是初始化状态
    secret: string // 保密字段
    open2FA: boolean // 是否开启双重验证
}

export interface UpdateUserConfig {
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
