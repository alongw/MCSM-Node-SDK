import type {
    Overview as Overview_Type,
    ChartInfo,
    ChartRequestData,
    ChartSystemData,
    DaemonCpuMemChart,
    DaemonInstance,
    DaemonProcessInfo,
    DaemonRemote,
    DaemonSystemInfo,
    ProcessInfo,
    RecordInfo,
    RemoteCount,
    SystemInfo,
    SystemUser
} from '@/types/overview'

export class Overview {
    version: string
    specifiedDaemonVersion: string
    process: ProcessInfo
    record: RecordInfo
    system: SystemInfo
    chart: ChartInfo
    remoteCount: RemoteCount
    remote: DaemonRemote[]

    constructor(overviewData: Overview_Type) {
        const {
            chart,
            process,
            record,
            remote,
            remoteCount,
            specifiedDaemonVersion,
            system,
            version
        } = overviewData

        this.version = version
        this.specifiedDaemonVersion = specifiedDaemonVersion
        this.process = process
        this.record = record
        this.system = system
        this.chart = chart
        this.remoteCount = remoteCount
        this.remote = remote
    }
}
