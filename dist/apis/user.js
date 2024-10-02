export const getUserList = (request, config) => {
    return request.get('/auth/search', {
        params: config
    });
};
export const createUser = (request, config) => {
    return request.post('/auth', config);
};
export const updateUser = (request, userId, config) => {
    return request.put('/auth', {
        uuid: userId,
        config
    });
};
export const removeUser = (request, userList) => {
    return request.delete('/auth', {
        data: userList
    });
};
//# sourceMappingURL=user.js.map