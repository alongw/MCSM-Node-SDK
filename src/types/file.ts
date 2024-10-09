export interface FileInfo {
    name: string
    size: number // byte
    time: string
    mode: number // Linux file permission
    type: number // 0 = Folder, 1 = File
}
