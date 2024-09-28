export interface DockerConfig {
    containerName: string;
    image: string;
    memory: number;
    ports: string[];
    extraVolumes: string[];
    maxSpace: number | null;
    network: string | null;
    io: number | null;
    networkMode: string;
    networkAliases: string[];
    cpusetCpus: string;
    cpuUsage: number;
    workingDir: string;
    env: string[];
}
export interface RconConfig {
    enableRcon: boolean;
    rconPassword: string;
    rconPort: number;
    rconIp: string;
}
export interface TerminalOption {
    haveColor: boolean;
    pty: boolean;
}
export interface EventTask {
    autoStart: boolean;
    autoRestart: boolean;
    ignore: boolean;
}
export interface PingConfig {
    ip: string;
    port: number;
    type: number;
}
export interface InstanceConfig {
    nickname: string;
    startCommand: string;
    stopCommand: string;
    cwd: string;
    ie: string;
    oe: string;
    createDatetime: string;
    lastDatetime: string;
    type: string;
    tag: string[];
    endTime: string;
    fileCode: string;
    processType: string;
    updateCommand: string;
    actionCommandList: string[];
    crlf: number;
    docker: DockerConfig;
    terminalOption: TerminalOption;
    eventTask: EventTask;
    pingConfig: PingConfig;
    rcon?: RconConfig;
}
export interface InstanceInfo {
    currentPlayers: number;
    fileLock: number;
    maxPlayers: number;
    openFrpStatus: boolean;
    playersChart: number[];
    version: string;
}
export interface ProcessInfo {
    cpu: number;
    memory: number;
    ppid: number;
    pid: number;
    ctime: number;
    elapsed: number;
    timestamp: number;
}
export interface Instance {
    config: InstanceConfig;
    info: InstanceInfo;
    instanceUuid: string;
    processInfo: ProcessInfo;
    space: number;
    started: number;
    status: number;
}
