import axios from 'axios';
const globalAPI = 'https://jsonplaceholder.typicode.com/';

const getApi = (globalAPI) => {
    const promise = new Promise((resolve,reject) => {
        axios.get(`${globalAPI}posts/1`).then(result => {
            resolve(result.data)
        }, err => {
            reject(err);
        })
    })
    return promise;
}

const postApi = (globalAPI,data) => {
    const promise = new Promise((resolve,reject) => {
        axios.post(`${globalAPI}posts`,data).then(result => {
            resolve(result.data);
        },err => {
            reject(err);
        })
    })
    return promise;
}

const putApi = (globalAPI,id,data) => {
    const promise = new Promise((resolve,reject) => {
        axios.put(`${globalAPI}posts/${id}`,data).then(result => {
            resolve(result.data)
        },err => {
            reject(err)
        })
    })
    return promise;
}

const deleteApi = (globalAPI,id) => {
    const promise = new Promise((resolve,reject) => {
        axios.delete(`${globalAPI}posts/${id}`).then(result => {
            resolve(result.data);
        }, err => {
            reject(err);
        })
    })
    return promise;
}

const getApiTest = () => getApi(globalAPI);

const postApiTest = (data) => postApi(globalAPI,data);

const putApiTest = (id,data) => putApi(globalAPI,id,data);

const deleteApiTest = (id) => deleteApi(globalAPI,id);

export const API = {
    getApiTest,
    postApiTest,
    putApiTest,
    deleteApiTest
}