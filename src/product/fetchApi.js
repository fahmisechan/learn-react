import axios from 'axios';

const getApi = () => {
    const promise = new Promise((resolve,reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(result => {
            resolve(result.data)
        }, err => {
            reject(err);
        })
    })
    return promise;
}

const getApiTest = () => getApi();

export const API = {
    getApiTest,
}