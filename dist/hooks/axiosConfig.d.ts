import { AxiosRequestConfig, AxiosInstance } from "axios";
declare class AxiosConfig {
    static axiosRequest: AxiosInstance;
    static axiosAuthRequest: AxiosInstance;
    static setDefaultConfig(config: AxiosRequestConfig): void;
    static setAuthConfig(config: AxiosRequestConfig): void;
    static getDefaultAxios(): AxiosInstance;
    static getAuthAxios(): AxiosInstance;
    static createAxiosRequest(config: AxiosRequestConfig): AxiosInstance;
}
export default AxiosConfig;
