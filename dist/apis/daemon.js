export * from '@/types/daemon';
export const removeDaemon = (request, daemonUUID) => {
    return request.delete(`/service/remote_service`, {
        params: {
            uuid: daemonUUID
        }
    });
};
export const linkDaemon = (request, daemonUUID) => {
    return request.get(`/service/link_remote_service`, {
        params: {
            uuid: daemonUUID
        }
    });
};
export const updateDaemon = (request, daemonUUID, data) => {
    return request.put(`/service/remote_service`, {
        ...data
    }, {
        params: {
            uuid: daemonUUID
        }
    });
};
export const addDaemon = (request, data) => {
    return request.post(`/service/remote_service`, data);
};
//# sourceMappingURL=daemon.js.map