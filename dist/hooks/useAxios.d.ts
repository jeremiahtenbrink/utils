import AxiosConfig from "./axiosConfig";
import { AxiosRequestConfig } from "axios";
/**
 * useAxios custom hook. Takes in one optional parameter.
 *
 * @param config  Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export declare const useAxios: (config?: AxiosRequestConfig) => [IRequest, any, string, boolean];
/**
 * ## setAxiosDefaultConfig
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
export declare const setAxiosDefaultConfig: (config: AxiosConfig) => void;
/**
 * ## setAxiosAuthConfig
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export declare const setAxiosAuthConfig: (config: AxiosConfig) => void;
interface IRequest {
    get: (url: string, useAuth?: boolean) => void;
    post: (url: string, useAuth?: boolean) => void;
    put: (url: string, useAuth?: boolean) => void;
    del: (url: string, useAuth?: boolean) => void;
}
export {};
