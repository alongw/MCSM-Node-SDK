import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { Deamon } from './../modules/daemon'

import {
    getFileList as getFileListApi,
    getFileContent as getFileContentApi,
    updateFileContent as updateFileContentApi,
    getDownloadLink as getDownloadLinkApi,
    getUploadFileUrl as getUploadFileUrlApi,
    copyFile as copyFileApi,
    moveFile as moveFileApi,
    compressFile as compressFileApi,
    decompressFile as decompressFileApi,
    deleteFile as deleteFileApi,
    touchFile as touchFileApi,
    mkdir as mkdirApi
} from './../apis/file'

export const getFileList = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        target: string // 文件（名称或目录）路径
        page: number
        page_size: number
    }
) => {
    return getFileListApi(request, InstanceUUID, Daemon.daemonUUID, config)
}

export const getFileContent = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        target: string
    }
) => {
    return getFileContentApi(request, InstanceUUID, Daemon.daemonUUID, config)
}

export const updateFileContent = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        target: string
        content: string
    }
) => {
    return updateFileContentApi(request, InstanceUUID, Daemon.daemonUUID, config)
}

export const getDownloadLink = async (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        target: string
        enableTls: boolean
    }
) => {
    const originData = await getDownloadLinkApi(
        request,
        InstanceUUID,
        Daemon.daemonUUID,
        config
    )

    const result = originData.data

    if (result.status !== 200) return originData

    // http(s)://{{Daemon Addr}}/download/{{password}}/{{fileName}}

    const fileName = config.target.split('/').pop()

    const protocol = config.enableTls ? 'https' : 'http'

    originData.data.data.url = `${protocol}://${result.data.addr}/download/${result.data.password}/${fileName}`

    return originData
}

export const getUploadFileUrl = async (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        dir: string
        enableTls: boolean
    }
) => {
    const originData = await getUploadFileUrlApi(
        request,
        InstanceUUID,
        Daemon.daemonUUID,
        config
    )

    const result = originData.data

    if (result.status !== 200) return originData

    // http(s)://{{Daemon Address}}/upload/{{password}}

    const protocol = config.enableTls ? 'https' : 'http'

    originData.data.data.url = `${protocol}://${result.data.addr}/upload/${result.data.password}`

    return originData
}

export const uploadFile = async (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        dir: string
        enableTls: boolean
        file: any
        catchHttpError: boolean
    }
) => {
    const uploadUrl = await getUploadFileUrl(request, InstanceUUID, Daemon, config)

    try {
        const result = await axios.post(uploadUrl.data.data.url, config.file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        result.data = {
            status: result.data.status || result.status,
            msg: result.data.msg || result.data.message || result.statusText,
            data: result.data.data || result.data
        }

        return result
    } catch (error) {
        if (!config.catchHttpError) return Promise.reject(error)
        return Promise.resolve({
            data: {
                status: error.response?.data?.status || error.response?.status,
                msg:
                    error.response?.data?.msg ||
                    error.response?.data?.message ||
                    error.response?.statusText,
                data: error.response?.data?.data || undefined,
                originError: error
            }
        })
    }
}

export const copyFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        fileList: {
            source: string
            target: string
        }[]
    }
) => {
    const fileList: [string, string][] = config.fileList.map(
        (item) => [item.source, item.target] as [string, string]
    )

    return copyFileApi(request, InstanceUUID, Daemon.daemonUUID, {
        fileList
    })
}

export const moveFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        fileList: {
            source: string
            target: string
        }[]
    }
) => {
    const fileList: [string, string][] = config.fileList.map(
        (item) => [item.source, item.target] as [string, string]
    )

    return moveFileApi(request, InstanceUUID, Daemon.daemonUUID, {
        fileList
    })
}

export const compressFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    Daemon: Deamon,
    config: {
        targets: string[]
        code: 'utf-8' | 'gbk' | 'big5'
        savePath: string
    }
) => {
    return compressFileApi(request, InstanceUUID, Daemon.daemonUUID, config)
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
    return decompressFileApi(request, InstanceUUID, DaemonUUID, config)
}

export const deleteFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        targets: string[] // 支持删除文件夹
    }
) => {
    return deleteFileApi(request, InstanceUUID, DaemonUUID, config)
}

export const touchFile = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        fileName: string
    }
) => {
    return touchFileApi(request, InstanceUUID, DaemonUUID, config)
}

export const mkdir = (
    request: AxiosInstance,
    InstanceUUID: string,
    DaemonUUID: string,
    config: {
        dirName: string
    }
) => {
    return mkdirApi(request, InstanceUUID, DaemonUUID, config)
}
