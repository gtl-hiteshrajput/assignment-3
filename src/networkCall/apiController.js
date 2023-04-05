import axios from 'axios';
import { httpMethods, messageKeys } from 'constants';
import { HttpStatusCode } from '../utils/httpStatusCode';

const { axiosSomethingWentWrong, axiosRequestTimeout } = messageKeys;
const { BAD_GATEWAY, NOT_FOUND, INTERNAL_SERVER_ERROR, REQUEST_TIMEOUT } = HttpStatusCode;

const apiController = async (endPoint, body, headers = null, method = httpMethods.post, tradeSolutionImg = false) => {
    const config = {
        method: method.toLowerCase()
    };

    setConfig(config, endPoint, body, headers, method, tradeSolutionImg);

    return new Promise((resolve, reject) => {
        axios(config)
            .then(res => resolve(res || null))
            .catch(err => {
                if (err?.response) {
                    if ([BAD_GATEWAY, NOT_FOUND].includes(err.response?.status)) {
                        reject({
                            statusCode: err.response?.status || INTERNAL_SERVER_ERROR,
                            message: axiosSomethingWentWrong
                        });
                    }
                    else if (err.response?.data) {
                        const { statusCode = null, statusMessage = null } = err.response.data;
                        reject({
                            statusCode: statusCode || INTERNAL_SERVER_ERROR,
                            message: statusMessage || axiosSomethingWentWrong
                        });
                    }
                    resolve(err);
                }
                else if (err.code === 'ECONNABORTED')
                    reject({ statusCode: REQUEST_TIMEOUT, message: axiosRequestTimeout });
                reject({ statusCode: INTERNAL_SERVER_ERROR, message: axiosSomethingWentWrong });
            });
    });
};

const setConfig = (config, endPoint, body, headers, method, tradeSolutionImg = false) => {
    if (endPoint) config.url = endPoint;
    if (headers) config.headers = headers;
    if (body && method.toLowerCase() === httpMethods.get?.toLowerCase()) config.params = body;
    else if (body && method.toLowerCase() === httpMethods.post?.toLowerCase()) config.data = body;
    else config.data = body;
    if (tradeSolutionImg) config.responseType = 'arraybuffer';
    return config;
};

export default apiController;
