import { AxiosRequestConfig } from "axios";
/**
 * ## Custom Hook
 * Takes in one optional parameter. If no parameter is used then the default configuration for axios requests will be used.
 *
 * @param config  Axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return - Returns array of values. Index 0 is the request object used to make the 4 different axios requests. Index 1 is the value of the request. Index two is the error message if there was an error and a blank string if there wasn't one. Index 3 is a boolean indicating if the request is currently being made.
 */
export declare const useAxios: (config?: Config) => [UseAxiosRequests, any, string, boolean];
/**
 * ## Any
 * This is the data returned from the axios request.
 */
export declare type RequestData = any;
/**
 * ## Boolean
 * Indicates when the axios request has started and finished.
 */
export declare type IsLoading = boolean;
/**
 * ## String
 * String value of the error message if a error occurred. If no error this
 * will be a empty string.
 */
export declare type Error = string;
/**
 * ## Function
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
export declare const setAxiosDefaultConfig: (config: Config) => void;
/**
 * ## Function
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export declare const setAxiosAuthConfig: (config: Config) => void;
/**
 * ## Object
 * Returned from useAxios. Has the functions get, post, put, and del.
 */
export interface UseAxiosRequests {
    /**
     * ## Function
     * Used to make a get http request using axios. The response from the axios
     * call will be placed in index 1 of the returned array from useAxios call.
     *
     * @param url - string, either the remaining portion of the url or the url of http request.
     * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
     */
    get: (url: string, useAuth?: boolean) => void;
    /**
     * ## Function
     * Used to make a post http request using axios. The response from the axios
     * call will be placed in index 1 of the returned array from useAxios call.
     */
    post: (url: string, data: any, useAuth?: boolean) => void;
    /**
     * ## Function
     * Used to make a put http request using axios. The response from the axios
     * call will be placed in index 1 of the returned array from useAxios call.
     *
     * @param url - string, either the remaining portion of the url or the url of http request.
     * @param data - object to put to the server.
     * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
     */
    put: (url: string, data: any, useAuth?: boolean) => void;
    /**
     * ## Function
     * Call this function to make a delete http request using axios. The response
     * from the axios call will be placed in index 1 of the returned array from useAxios call.
     *
     * @param url - string, either the remaining portion of the url or the url of http request.
     * @param data - object to pass to the server if one is requried. If not use empty object.
     * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
     */
    del: (url: string, data: any, useAuth?: boolean) => void;
}
/**
 * ## AxiosRequestConfig
 * This is the configuration of a axios request. See
 * [Axios](https://www.npmjs.com/package/axios) for more information on
 * axios configuration.
 */
export interface Config extends AxiosRequestConfig {
}
