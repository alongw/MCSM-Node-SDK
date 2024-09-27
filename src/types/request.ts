export interface Result<T extends any = any> {
    status: number
    msg: string
    data: T
}
