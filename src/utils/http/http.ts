import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import { store } from "../../store";

const http: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000
})

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // this is not a component, can't 'useSelector'. There is a method in store to get state
    const { token } = store.getState().authSlice
    // if there is a token, add to header
    if (token) {
        //Authorization is specifically used to carry authentication info
        // Bearer represents a type of authentication, followed by token
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})


http.interceptors.response.use((response: AxiosResponse) => {
    const res = response.data
    if (res.code != 200) {
        message.error(res.code + ":" + res.message)
        return Promise.reject(new Error(res.message))
    }
    return response.data
})

export default http