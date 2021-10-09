import axios from 'axios';

const instance = axios.create({
    timeout: 10 * 1000,
});

// instance.defaults.baseURL = "http://www.axzqzg.com/";

instance.interceptors.request.use(
    (config: any) => {
        const requestConfig = config;
        return requestConfig;
    },
    (error: any) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response: any) => response.data,
    (error: any) => Promise.reject(error),
);

const baseApi = '/api';

function getHttp(url: string, params: any) {
    return new Promise((resolve, reject) => {
        instance.get(baseApi + url, { params }).then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err);
        });
    });
}

export default class ApiPack {
    public getProduct(params: object) {
        return getHttp("/product/recommend", params);
    }

}
