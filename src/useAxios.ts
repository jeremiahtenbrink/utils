import { Dispatch, SetStateAction, useState, } from "react";
import AxiosConfig from "./axiosConfig";
import { AxiosInstance } from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * ## Custom Hook
 * Takes in one optional parameter. If no parameter is passed in then the
 * default configuration for axios will be used.
 *
 * @param config `config` - Axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return {UseAxiosReturn}
 */

export const useAxios = ( config: Config | null = null ): UseAxiosReturn => {
  
  const [ value, setValue ]: [ any, ( value: any ) => void ] = useState( null );
  const [ error, setError ]: [ string, ( error: string ) => void ] = useState(
    "" );
  
  const [ isLoading, setIsLoading ]: [ boolean, Dispatch<SetStateAction<boolean>> ] = useState<boolean>(
    false );
  
  const axiosRequest = config && AxiosConfig.createAxiosRequest( config );
  const defaultRequest = !config;
  
  const get = ( url: string, auth: boolean = false ): void => {
    
    let request = AxiosConfig.getDefaultAxios();
    if ( auth ) {
      request = AxiosConfig.getAuthAxios();
    } else if ( !defaultRequest ) {
      request = axiosRequest as AxiosInstance;
    }
    
    if ( request ) {
      setIsLoading( true );
      request.get( url ).then( ( res: AxiosResponse ) => {
        setValue( res.data );
        setIsLoading( false );
        setError( "" );
      } ).catch( ( err: AxiosError ) => {
        setError( err.message );
        setIsLoading( false );
      } );
    }
  };
  
  const post = ( url: string, data: any, auth: boolean = false ): void => {
    
    let request = AxiosConfig.getDefaultAxios();
    if ( auth ) {
      request = AxiosConfig.getAuthAxios();
    } else if ( !defaultRequest ) {
      request = axiosRequest as AxiosInstance;
    }
    
    setIsLoading( true );
    if ( request ) {
      request.post( url, data ).then( res => {
        setValue( res.data );
      } ).catch( err => {
        setError( err.message );
      } ).finally( () => setIsLoading( false ) );
    }
  };
  
  const put = ( url: string, data: any, auth: boolean = false ): void => {
    
    let request = AxiosConfig.getDefaultAxios();
    if ( auth ) {
      request = AxiosConfig.getAuthAxios();
    } else if ( !defaultRequest ) {
      request = axiosRequest as AxiosInstance;
    }
    
    setIsLoading( true );
    if ( request ) {
      request.put( url, data ).then( res => {
        setValue( res.data );
      } ).catch( err => {
        setError( err.message );
      } ).finally( () => setIsLoading( false ) );
    }
  };
  
  const del = ( url: string, object: any, auth: boolean = false ): void => {
    
    let request = AxiosConfig.getDefaultAxios();
    if ( auth ) {
      request = AxiosConfig.getAuthAxios();
    } else if ( !defaultRequest ) {
      request = axiosRequest as AxiosInstance;
    }
    
    setIsLoading( true );
    if ( request ) {
      request.delete( url, object ).then( res => {
        setValue( res.data );
      } ).catch( err => {
        setError( err.message );
      } ).finally( () => setIsLoading( false ) );
    }
  };
  
  
  return {
    requests: { get, post, put, del },
    value,
    error,
    isLoading
  };
};


export type UseAxiosReturn = {
  requests: useAxiosRequests,
  value: AxiosResponse,
  error: string,
  isLoading: boolean
}


/**
 * ## Function
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
export const setAxiosDefaultConfig = ( config: Config ): void => {
  AxiosConfig.setDefaultConfig( config );
};

/**
 * ## Function
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export const setAxiosAuthConfig = ( config: Config ): void => {
  AxiosConfig.setAuthConfig( config );
};

/**
 * ## Object
 * Returned from useAxios. Has the functions get, post, put, and del.
 */
export interface useAxiosRequests {
  /**
   * ## Function
   * Used to make a get http request using axios. The response from the axios
   * call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url - string, either the remaining portion of the url or the url of http request.
   * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
   */
  get: ( url: string, useAuth?: boolean ) => void;
  /**
   * ## Function
   * Used to make a post http request using axios. The response from the axios
   * call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url - Either the url or a part of the url of a http request.
   * @param data object to post to the server.
   * @param useAuth boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
   */
  post: ( url: string, data: any, useAuth?: boolean ) => void;
  /**
   * ## Function
   * Used to make a put http request using axios. The response from the axios
   * call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url `url:` - Either the remaining portion of the url or the url
   * of http request.
   * @param data `data:` - object to put to the server.
   * @param useAuth `useAuth:` - determines if you want to use the auth
   * axios call or not. setAxiosAuthConfig must have already been called in your app.
   */
  put: ( url: string, data: any, useAuth?: boolean ) => void;
  /**
   * ## Function
   * Call this function to make a delete http request using axios. The response
   * from the axios call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url - string, either the remaining portion of the url or the url of http request.
   * @param data - object to pass to the server if one is requried. If not use empty object.
   * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
   */
  del: ( url: string, data: any, useAuth?: boolean ) => void;
}

/**
 * ## AxiosRequestConfig
 * This is the configuration of a axios request. See
 * [Axios](https://www.npmjs.com/package/axios) for more information on
 * axios configuration.
 */
export interface Config extends AxiosRequestConfig {
}
