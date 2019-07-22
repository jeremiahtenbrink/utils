import { AxiosRequestConfig, AxiosInstance } from "axios";
/**
 * @ignore
 */
declare class AxiosConfig {
    static axiosRequest: AxiosInstance;
    static axiosAuthRequest: AxiosInstance;
    static setDefaultConfig(config: AxiosRequestConfig): void;
    static setAuthConfig(config: AxiosRequestConfig): void;
    static getDefaultAxios(): AxiosInstance;
    static getAuthAxios(): AxiosInstance;
    static createAxiosRequest(config: AxiosRequestConfig): AxiosInstance;
}
/**
 * @ignore
 */
export default AxiosConfig;
