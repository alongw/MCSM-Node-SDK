export interface REQUEST_TYPE<T extends any> {
    status: number
    msg: string
    data: T
}
