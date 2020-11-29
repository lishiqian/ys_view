import axios from 'axios'

export default function request(config) {
    var instence = axios.create({
        baseURL: "http://localhost:8080/api",
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