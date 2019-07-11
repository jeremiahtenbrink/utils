import { AxiosRequestConfig } from "axios";
export declare const useAxios: (config?: AxiosRequestConfig) => [IRequest, any, string, boolean];
interface IRequest {
    get: (string: any, boolean?: any) => void;
    post: (string: any, any: any, boolean?: any) => void;
    put: (string: any, any: any, boolean?: any) => void;
    del: (string: any, any: any, boolean?: any) => void;
    setDefaultConfig: (AxiosRequestConfig: any) => void;
    setAuthConfig: (AxiosRequestConfig: any) => void;
}
export {};
