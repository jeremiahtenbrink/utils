import { Dispatch, SetStateAction, useEffect, useState, } from "react";
import AxiosConfig from "./axiosConfig";
import { AxiosInstance } from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * ## Custom Hook
 * Takes in one optional parameter. If no parameter is used then the default configuration for axios requests will be used.
 *
 * @param config  Axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return - Returns array of values. Index 0 is the request object used to make the 4 different axios requests. Index 1 is the value of the request. Index two is the error message if there was an error and a blank string if there wasn't one. Index 3 is a boolean indicating if the request is currently being made.
 */

export const useAxios = ( config: AxiosRequestConfig | null = null ): [ UseAxiosRequests, any, string, boolean ] => {
  
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
  
  return [
    { get, post, put, del }, value, error,
    isLoading
  ];
};

/**
 * ## Function
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
export const setAxiosDefaultConfig = ( config: AxiosRequestConfig ): void => {
  
  AxiosConfig.setDefaultConfig( config );
};

/**
 * ## Function
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export const setAxiosAuthConfig = ( config: AxiosRequestConfig ): void => {
  AxiosConfig.setAuthConfig( config );
};

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
  get: ( url: string, useAuth?: boolean ) => void;
  /**
   * ## Function
   * Used to make a post http request using axios. The response from the axios
   * call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url - string, either the remaining portion of the url or the url of http request.
   * @param data - object to post to the server.
   * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
   */
  post: ( url: string, data: any, useAuth?: boolean ) => void;
  /**
   * ## Function
   * Used to make a put http request using axios. The response from the axios
   * call will be placed in index 1 of the returned array from useAxios call.
   *
   * @param url - string, either the remaining portion of the url or the url of http request.
   * @param data - object to put to the server.
   * @param useAuth - boolean, determines if you want to use the auth axios call or not. setAxiosAuthConfig must have already been called in your app.
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
