const defaultBtnTxt = 'Click';
const fweet = 'FWEET';
const swapData = 'SwapData';
const reloadBtn = 'Reload';

const httpMethods = {
    put: 'PUT',
    post: 'POST',
    delete: 'DELETE',
    get: 'GET'
};

const errorCode = {
    ECONNABORTED: 'ECONNABORTED',
    ERR_NETWORK: 'ERR_NETWORK'
};

const status = {
    idle: 'idle',
    loading: 'loading',
    success: 'success'
};

const messageKeys = {
    axiosRequestTimeout: 'axiosRequestTimeout',
    axiosSomethingWentWrong: 'axiosSomethingWentWrong'
};

const localStorageKey = {
    userData: 'userData'
}

const mAlertSeverity = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'success'
}

export {
    defaultBtnTxt, fweet, swapData, httpMethods, reloadBtn, errorCode, messageKeys,
    status, localStorageKey, mAlertSeverity
};