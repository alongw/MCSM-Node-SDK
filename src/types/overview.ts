export interface SystemUser {
    uid: number // 用户 ID
    gid: number // 用户组 ID
    username: string // 用户名
    homedir: string // 用户主目录
    shell: string | null // 用户 shell
}

export interface SystemInfo {
    user: SystemUser
    time: number // 时间戳
    totalmem: number // 总内存
    freemem: number // 可用内存
    type: string // 操作系统类型
    version: string // 操作系统版本
    node: string // Node.js 版本
    hostname: string // 主机名
    loadavg: number[] // 系统负载
    platform: string // 平台
    release: string // 系统版本号
    uptime: number // 系统运行时间
    cpu: number // CPU 使用率
}

export interface ProcessInfo {
    cpu: number // CPU 使用率
    memory: number // 内存使用量
    cwd: string // 当前工作目录
}

export interface RecordInfo {
    logined: number // 登录次数
    illegalAccess: number // 非法访问次数
    banips: number // 被禁止的 IP 数量
    loginFailed: number // 登录失败次数
}

export interface ChartSystemData {
    cpu: number // CPU 使用率
    mem: number // 内存使用率
}

export interface ChartRequestData {
    value: number // 请求数
    totalInstance: number // 总实例数
    runningInstance: number // 运行中的实例数
}

export interface ChartInfo {
    system: ChartSystemData[]
    request: ChartRequestData[]
}

export interface RemoteCount {
    available: number // 可用数量
    total: number // 总数量
}

export interface DaemonProcessInfo {
    cpu: number // CPU 使用量
    memory: number // 内存使用量
    cwd: string // 当前工作目录
}

export interface DaemonInstance {
    running: number // 运行中的实例数
    total: number // 实例总数
}

export interface DaemonSystemInfo {
    type: string // 操作系统类型
    hostname: string // 主机名
    platform: string // 平台
    release: string // 系统版本号
    uptime: number // 系统运行时间
    cwd: string // 当前工作目录
    loadavg: number[] // 系统负载
    freemem: number // 空闲内存
    cpuUsage: number // CPU 使用率
    memUsage: number // 内存使用率
    totalmem: number // 总内存
    processCpu: number // 进程 CPU 使用率
    processMem: number // 进程内存使用量
}

export interface DaemonCpuMemChart {
    cpu: number // CPU 使用率
    mem: number // 内存使用率
}

export interface DaemonRemote {
    version: string // Daemon 版本
    process: DaemonProcessInfo // 进程信息
    instance: DaemonInstance // 实例信息
    system: DaemonSystemInfo // 系统信息
    cpuMemChart: DaemonCpuMemChart[] // CPU 和内存使用图表
    uuid: string // UUID
    ip: string // IP 地址
    port: string // 端口
    prefix: string // 前缀
    available: boolean // 是否可用
    remarks: string // 备注
}

/**
 * @interface Overview
 * @description https://docs.mcsmanager.com/apis/api_dashboard.html
 */
export interface Overview {
    version: string // 面板版本
    specifiedDaemonVersion: string // 指定的 Daemon 版本
    process: ProcessInfo // 进程信息
    record: RecordInfo // 记录信息
    system: SystemInfo // 系统信息
    chart: ChartInfo // 图表数据
    remoteCount: RemoteCount // 远程节点计数
    remote: DaemonRemote[] // Daemon 列表
}

export default Overview
