import { createImage as createImageApi, getBuildProgress as getBuildProgressApi, getContainerImageList as getContainerImageListApi, getImageList as getImageListApi, getNetwork } from './../apis/image';
export const useImage = (request, daemonUUID) => {
    const getImageList = () => {
        return getImageListApi(request, daemonUUID);
    };
    const getContainerImageList = () => {
        return getContainerImageListApi(request, daemonUUID);
    };
    const getNetworkList = () => {
        return getNetwork(request, daemonUUID);
    };
    const createImage = (config) => {
        return createImageApi(request, daemonUUID, config);
    };
    const getBuildProgress = () => {
        return getBuildProgressApi(request, daemonUUID);
    };
    return {
        getImageList,
        getContainerImageList,
        getNetworkList,
        createImage,
        getBuildProgress
    };
};
//# sourceMappingURL=image.js.map