export interface DockerConfig {
    containerName: string // 容器名称
    image: string // 镜像名，例如 'mcsm-ubuntu:22.04'
    memory: number // 内存大小，单位为 MB
    ports: string[] // 端口映射
    extraVolumes: string[] // 额外的挂载卷
    maxSpace: number | null // 最大空间限制，null 表示无限制
    network: string | null // 网络名或 null
    io: number | null // I/O 权限限制
    networkMode: string // 网络模式，例如 'bridge'
    networkAliases: string[] // 网络别名
    cpusetCpus: string // 限制 CPU 使用
    cpuUsage: number // CPU 使用率百分比
    workingDir: string // 工作目录
    env: string[] // 环境变量列表
}

export interface RconConfig {
    enableRcon: boolean // 是否启用 RCON
    rconPassword: string // RCON 密码
    rconPort: number // RCON 端口号
    rconIp: string // RCON IP 地址
}

export interface TerminalOption {
    haveColor: boolean // 是否支持颜色
    pty: boolean // 是否启用伪终端
}

export interface EventTask {
    autoStart: boolean // 是否自动启动
    autoRestart: boolean // 是否自动重启
    ignore: boolean // 是否忽略任务
}

export interface PingConfig {
    ip: string // Ping 的 IP
    port: number // Ping 的端口
    type: number // Ping 类型
}

export interface InstanceConfig {
    nickname: string // 实例昵称
    startCommand: string // 启动命令
    stopCommand: string // 停止命令
    cwd: string // 当前工作目录
    ie: string // 输入编码
    oe: string // 输出编码
    createDatetime: string // 创建日期
    lastDatetime: string // 上次修改日期
    type: string // 实例类型
    tag: string[] // 标签
    endTime: string // 结束时间
    fileCode: string // 文件编码
    processType: string // 进程类型
    updateCommand: string // 更新命令
    actionCommandList: string[] // 动作命令列表
    crlf: number // 换行符类型
    docker: DockerConfig // Docker 配置
    terminalOption: TerminalOption // 终端选项
    eventTask: EventTask // 事件任务
    pingConfig: PingConfig // Ping 配置
    rcon?: RconConfig // RCON 配置，可能是可选的
}

export interface InstanceInfo {
    currentPlayers: number // 当前玩家数
    fileLock: number // 文件锁状态
    maxPlayers: number // 最大玩家数
    openFrpStatus: boolean // FRP 状态
    playersChart: number[] // 玩家统计图表
    version: string // 实例版本
}

export interface ProcessInfo {
    cpu: number // CPU 使用量
    memory: number // 内存使用量
    ppid: number // 父进程 ID
    pid: number // 进程 ID
    ctime: number // 进程创建时间
    elapsed: number // 运行时长
    timestamp: number // 时间戳
}

export interface Instance {
    config: InstanceConfig // 实例配置
    info: InstanceInfo // 实例信息
    instanceUuid: string // 实例 UUID
    processInfo: ProcessInfo // 进程信息
    space: number // 占用的空间大小
    started: number // 启动次数
    status: number // 实例状态
    // 状态
    // -1 = 忙碌
    // 0  = 停止
    // 1  = 停止中
    // 2  = 启动中
    // 3  = 运行中
}
