import { status } from 'constants';
import FLoader from 'components/FLoader';

const { idle, loading, success } = status;

export const setLoaderComponent = (status) => {
    if ([idle, loading].includes(status)) {
        return <FLoader />;
    }
    else if (status === success) {
        return (<></>);
    }
};

export const handleError = (param) => (param ? true : false);

export const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageData = (key) => {
    const response = localStorage.getItem(key);
    if (response) return JSON.parse(response);
    return {};
};

export const clearLocalStorageData = () => {
    localStorage.clear();
};