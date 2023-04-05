import { httpMethods } from 'constants';
import apiEndpoints from 'networkCall/apiEndPoints';
import apiController from 'networkCall/apiController';

const { post, get } = httpMethods;
const { GetLogin, GetUserById, PostRegister } = apiEndpoints;

export const getLogin = async (payload) => {
    return new Promise((resolve, reject) => {
        apiController(GetLogin, payload, null, post)
            .then(res => {
                resolve(res?.data)
            })
            .catch(err => reject(err));
    });
};

export const postRegister = async (payload) => {
    return new Promise((resolve, reject) => {
        apiController(PostRegister, payload, null, post)
            .then(res => {
                resolve(res?.data)
            })
            .catch(err => reject(err));
    });
};

export const getUserById = async (id) => {
    return new Promise((resolve, reject) => {
        const userInfoUrl = `${GetUserById}/${id}`
        apiController(userInfoUrl, null, null, get)
            .then(res => {
                resolve(res?.data)
            })
            .catch(err => reject(err));
    });
};