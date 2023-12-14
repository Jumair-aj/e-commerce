import axios from 'axios'

export const API = axios.create({
    baseURL:'https://fakestoreapi.com',
    // timeout: 30000,
    retry:1,
    retryDelay:1000,
    headers: {
        "Content-type": "application/json",
    }
})

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });
