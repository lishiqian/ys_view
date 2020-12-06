import axios from 'axios'

export default function request(config) {
    var instence = axios.create({
        // baseURL: "http://127.0.0.1:8080/api",
        baseURL: "/api",
        timeout: 5000
    });

    //拦截响应
    instence.interceptors.response.use(res => {
        return res.data
    }, error => {
        console.log(error);
    });

    return instence(config)
}