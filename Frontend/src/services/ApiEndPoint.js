import axios from 'axios';

const instance = axios.create({
    // changed baseURL to backend port 4000 (was 5000) so preflights and requests go to correct server
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json' 
    },
    withCredentials: true
});

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
// keep previous export name 'delet' to minimize other file changes
export const delet = (url) => instance.delete(url);

instance.interceptors.request.use(function (config) {
    console.log('Request Config:', config);
    return config;
}, function (error) {
    console.error('Request Error:', error);
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    console.log('Apis Response', response);
    return response;
}, function (error) {
    console.log('Api Error', error.message);
    return Promise.reject(error);
});
