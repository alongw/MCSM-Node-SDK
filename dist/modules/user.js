import { removeUser, updateUser, createUser as createUserApi, getUserList as getUserListApi } from './../apis/user';
export class User {
    #request;
    #userUUID;
    constructor(request, userUUID) {
        this.#request = request;
        this.#userUUID = userUUID;
    }
    get userUUID() {
        return this.#userUUID;
    }
    remove = async () => {
        const result = await removeUser(this.#request, [this.#userUUID]);
        return result;
    };
    update = async (config) => {
        const result = await updateUser(this.#request, this.#userUUID, config);
    };
}
export const batchDeleteUser = (request, userUUIDs) => {
    return removeUser(request, userUUIDs);
};
export const createUser = async (request, config) => {
    const result = await createUserApi(request, config);
    if (result.status !== 200 || result.data.status !== 200)
        return undefined;
    const user = new User(request, result.data.data.uuid);
    return user;
};
export const getUserList = async (request, config) => {
    const result = await getUserListApi(request, config);
    if (result.status !== 200 || result.data.status !== 200)
        return undefined;
    return {
        total: result.data.data.total,
        page: result.data.data.page,
        pageSize: result.data.data.pageSize,
        maxPage: result.data.data.maxPage,
        data: result.data.data.data.map((user) => new User(request, user.uuid))
    };
};
//# sourceMappingURL=user.js.map