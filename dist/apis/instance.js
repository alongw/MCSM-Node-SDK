/**
 * Instance API
 * https://docs.mcsmanager.com/apis/api_instance.html
 */
export const getInstanceDetail = (request, instanceUUID, daemonUUID) => {
    return request.get(`/instance`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const createInstance = (request, daemonId, config) => {
    return request.post(`/instance`, config, {
        params: {
            daemonId: daemonId
        }
    });
};
export const updateInstanceConfig = (request, instanceUUID, daemonUUID, config) => {
    return request.put(`/instance`, config, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const deleteInstance = (request, instanceUUIDList, daemonUUID, config) => {
    if (typeof instanceUUIDList === 'string') {
        instanceUUIDList = [instanceUUIDList];
    }
    return request.delete(`/instance`, {
        params: {
            daemonId: daemonUUID
        },
        data: {
            uuids: instanceUUIDList,
            deleteFile: config.deleteFile
        }
    });
};
export const startInstance = (request, instanceUUID, daemonUUID) => {
    return request.get(`/protected_instance/open`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const stopInstance = (request, instanceUUID, daemonUUID) => {
    return request.get('/protected_instance/stop', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const restartInstance = (request, instanceUUID, daemonUUID) => {
    return request.get('/protected_instance/restart', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const killInstance = (request, instanceUUID, daemonUUID) => {
    return request.get('/protected_instance/kill', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
export const multiWorker = (request, instance, config) => {
    return request.post(`/protected_instance/multi_${config.method}`, {}, {
        params: instance.map((e) => {
            return {
                daemonId: e.daemonUUID,
                instanceUuid: e.instanceUUID
            };
        })
    });
};
export const updateInstance = (request, instanceUUID, daemonUUID, config) => {
    return request.get('/protected_instance/asynchronous', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            task_name: config.task_name
        }
    });
};
export const sendCommand = (request, instanceUUID, daemonUUID, config) => {
    return request.get('/protected_instance/command', {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            command: config.command
        }
    });
};
export const getOutput = (request, instanceUUID, daemonUUID, config) => {
    return request.get(`/protected_instance/output`, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID,
            size: config?.size
        }
    });
};
export const reinstallation = (request, instanceUUID, daemonUUID, config) => {
    return request.post('/protected_instance/install_instance', config, {
        params: {
            daemonId: daemonUUID,
            uuid: instanceUUID
        }
    });
};
//# sourceMappingURL=instance.js.map