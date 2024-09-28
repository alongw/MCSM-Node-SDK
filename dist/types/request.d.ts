export interface Response<T extends any = any> {
    status: number;
    msg: string;
    data: T;
}
