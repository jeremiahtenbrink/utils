import { Dispatch, SetStateAction, useEffect, useState, } from "react";
import AxiosConfig from "./axiosConfig";
import axios, { AxiosInstance } from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * useAxios custom hook. Takes in one optional parameter.
 *
 * @param config  Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */

export const useAxios = ( config: AxiosRequestConfig | null = null ): [ IRequest, any, string, boolean ] => {
  
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
 * ## setAxiosDefaultConfig
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
export const setAxiosDefaultConfig = ( config: AxiosConfig ): void => {
  
  AxiosConfig.setDefaultConfig( config );
};

/**
 * ## setAxiosAuthConfig
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
export const setAxiosAuthConfig = ( config: AxiosConfig ): void => {
  AxiosConfig.setAuthConfig( config );
};

export interface IRequest {
  
  get: ( url: string, useAuth?: boolean ) => void;
  post: ( url: string, useAuth?: boolean ) => void;
  put: ( url: string, useAuth?: boolean ) => void;
  del: ( url: string, useAuth?: boolean ) => void;
}