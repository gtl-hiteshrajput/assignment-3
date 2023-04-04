import { httpMethods } from 'constants';
import apiEndpoints from 'networkCall/apiEndPoints';
import apiController from 'networkCall/apiController';

const { get, post } = httpMethods;
const { AddFweet, GetFweets, GetFweetById } = apiEndpoints;

export const getFweets = async () => {
    return new Promise((resolve, reject) => {
        apiController(GetFweets, null, null, get)
            .then(res => {
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};

export const getFweet = async (id) => {
    return new Promise((resolve, reject) => {
        const getFweetUrl = `${GetFweetById}/${id}`
        apiController(getFweetUrl, null, null, get)
            .then(res => {
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};

export const addFweet = async (payload) => {
    return new Promise((resolve, reject) => {
        apiController(AddFweet, payload, null, post)
            .then(res => {
                resolve(res?.data || [])
            })
            .catch(err => reject(err));
    });
};