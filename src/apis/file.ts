import type { AxiosInstance } from 'axios'

import type { Response } from './../types/request'
import type { FileInfo } from './../types/file'

export const getFileList = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        target: string
        page: number
        page_size: number
    }
) => {
    return request.get<
        Response<{
            page: number
            pageSize: number
            total: number
            absolutePath: string
            items: FileInfo[]
        }>
    >('/files/list', {
        params: {
            daemonId: DaemonUUID,
            uuid: InstanceUUID,
            ...config
        }
    })
}

export const getFileContent = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        target: string
    }
) => {
    return request.put<Response<string>>(
        '/files',
        {
            ...config
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const updateFileContent = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        target: string
        content: string
    }
) => {
    return request.put<Response<boolean>>(
        '/files',
        {
            target: config.target,
            text: config.content
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const getDownloadLink = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        target: string // 路径+名字, 示例: /backup/world.zip
    }
) => {
    return request.post<
        Response<{
            password: string
            addr: string
            url: string | null
        }>
    >(
        '/files/download',
        {},
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID,
                file_name: config.target
            }
        }
    )
}

export const getUploadFileUrl = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        dir: string
    }
) => {
    return request.post<
        Response<{
            password: string
            addr: string
            url: string | null
        }>
    >(
        '/files/upload',
        {},
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID,
                upload_dir: config.dir
            }
        }
    )
}

export const copyFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        fileList: [string, string][]
    }
) => {
    return request.post<Response<boolean>>(
        '/files/copy',
        {
            targets: config.fileList
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const moveFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        fileList: [string, string][]
    }
) => {
    return request.post<Response<boolean>>(
        '/files/move',
        {
            targets: config.fileList
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const compressFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        targets: string[]
        code: 'utf-8' | 'gbk' | 'big5'
        savePath: string
    }
) => {
    return request.post<Response<boolean>>(
        '/files/compress',
        {
            type: 1,
            ...config
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const decompressFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        target: string
        code: 'utf-8' | 'gbk' | 'big5'
        savePath: string
    }
) => {
    return request.post<Response<boolean>>(
        '/files/compress',
        {
            type: 2,
            ...config
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const deleteFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        targets: string[] // 支持删除文件夹
    }
) => {
    return request.delete<Response<boolean>>('/files', {
        params: {
            daemonId: DaemonUUID,
            uuid: InstanceUUID
        },
        data: {
            ...config
        }
    })
}

export const touchFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        fileName: string
    }
) => {
    return request.post<Response<boolean>>(
        '/files/touch',
        {
            target: config.fileName
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}

export const mkdir = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        dirName: string
    }
) => {
    return request.post<Response<boolean>>(
        '/files/mkdir',
        {
            target: config.dirName
        },
        {
            params: {
                daemonId: DaemonUUID,
                uuid: InstanceUUID
            }
        }
    )
}
