import AxiosConfig from "./axiosConfig";
import { AxiosRequestConfig } from "axios";
export declare const useAxios: (config?: AxiosRequestConfig) => [IRequest, any, string, boolean];
export declare const setAxiosDefaultConfig: (config: AxiosConfig) => void;
export declare const setAxiosAuthConfig: (config: AxiosConfig) => void;
interface IRequest {
    get: (url: string, useAuth?: boolean) => void;
    post: (url: string, useAuth?: boolean) => void;
    put: (url: string, useAuth?: boolean) => void;
    del: (url: string, useAuth?: boolean) => void;
}
export {};
