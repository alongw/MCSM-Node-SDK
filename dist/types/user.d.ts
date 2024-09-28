export interface UserInstance {
    instanceUuid: string;
    daemonId: string;
}
export interface User {
    uuid: string;
    userName: string;
    passWord: string;
    passWordType: number;
    salt: string;
    permission: number;
    registerTime: string;
    loginTime: string;
    instances: UserInstance[];
    apiKey: string;
    isInit: boolean;
    secret: string;
    open2FA: boolean;
}
