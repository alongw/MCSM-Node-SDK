export interface SystemUser {
    uid: number;
    gid: number;
    username: string;
    homedir: string;
    shell: string | null;
}
export interface SystemInfo {
    user: SystemUser;
    time: number;
    totalmem: number;
    freemem: number;
    type: string;
    version: string;
    node: string;
    hostname: string;
    loadavg: number[];
    platform: string;
    release: string;
    uptime: number;
    cpu: number;
}
export interface ProcessInfo {
    cpu: number;
    memory: number;
    cwd: string;
}
export interface RecordInfo {
    logined: number;
    illegalAccess: number;
    banips: number;
    loginFailed: number;
}
export interface ChartSystemData {
    cpu: number;
    mem: number;
}
export interface ChartRequestData {
    value: number;
    totalInstance: number;
    runningInstance: number;
}
export interface ChartInfo {
    system: ChartSystemData[];
    request: ChartRequestData[];
}
export interface RemoteCount {
    available: number;
    total: number;
}
export interface DaemonProcessInfo {
    cpu: number;
    memory: number;
    cwd: string;
}
export interface DaemonInstance {
    running: number;
    total: number;
}
export interface DaemonSystemInfo {
    type: string;
    hostname: string;
    platform: string;
    release: string;
    uptime: number;
    cwd: string;
    loadavg: number[];
    freemem: number;
    cpuUsage: number;
    memUsage: number;
    totalmem: number;
    processCpu: number;
    processMem: number;
}
export interface DaemonCpuMemChart {
    cpu: number;
    mem: number;
}
export interface DaemonRemote {
    version: string;
    process: DaemonProcessInfo;
    instance: DaemonInstance;
    system: DaemonSystemInfo;
    cpuMemChart: DaemonCpuMemChart[];
    uuid: string;
    ip: string;
    port: string;
    prefix: string;
    available: boolean;
    remarks: string;
}
/**
 * @interface Overview
 * @description https://docs.mcsmanager.com/apis/api_dashboard.html
 */
export interface Overview {
    version: string;
    specifiedDaemonVersion: string;
    process: ProcessInfo;
    record: RecordInfo;
    system: SystemInfo;
    chart: ChartInfo;
    remoteCount: RemoteCount;
    remote: DaemonRemote[];
}
export default Overview;
