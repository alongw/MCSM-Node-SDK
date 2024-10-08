export const getImageList = (request, daemonUUID) => {
    return request.get(`/environment/image`, {
        params: {
            daemonId: daemonUUID
        }
    });
};
export const getContainerImageList = (request, daemonUUID) => {
    return request.get(`/environment/containers`, {
        params: {
            daemonId: daemonUUID
        }
    });
};
export const getNetwork = (request, daemonUUID) => {
    return request.get(`/environment/network`, {
        params: {
            daemonId: daemonUUID
        }
    });
};
export const createImage = (request, daemonUUID, config) => {
    return request.post(`/environment/image`, config, {
        params: {
            daemonId: daemonUUID
        }
    });
};
export const getBuildProgress = (request, daemonUUID) => {
    return request.get(`/environment/progress`, {
        // -1 = Failed, 1 = Building, 2 = Complete
        params: {
            daemonId: daemonUUID
        }
    });
};
//# sourceMappingURL=image.js.map