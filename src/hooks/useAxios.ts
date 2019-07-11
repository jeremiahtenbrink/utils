import { useEffect, useState } from "react";
import AxiosConfig from "./axiosConfig";
import { AxiosInstance, AxiosRequestConfig } from "axios";

export const useAxios = ( config: AxiosRequestConfig | null = null ): [ IRequest, any, string, boolean ] => {
  
  const [ value, setValue ]: [ any, ( any ) => void ] = useState( null );
  const [ error, setError ]: [ string, ( string ) => void ] = useState( "" );
  
  const [ isLoading, setIsLoading ]: [ boolean, ( boolean ) => void ] = useState(
    false );
  
  const [ axiosRequest, setAxiosRequest ]: [ null | AxiosInstance, ( AxiosInstance ) => void ] = useState(
    null );
  
  const [ axiosAuthRequest, setAxiosAuthRequest ]: [ null | AxiosInstance, ( AxiosInstance ) => void ] = useState(
    null );
  
  useEffect( () => {
    if ( config ) {
      setAxiosRequest( AxiosConfig.createAxiosRequest( config ) );
    } else {
      setAxiosRequest( AxiosConfig.getDefaultAxios() );
    }
    setAxiosAuthRequest( AxiosConfig.getAuthAxios() );
  }, [] );
  
  const get = ( url: string, auth: boolean = false ): void => {
    
    let request = axiosRequest;
    if ( auth ) {
      request = axiosAuthRequest;
    }
    
    setIsLoading( true );
    request.get( url ).then( res => {
      setValue( res.data );
      setIsLoading( false );
      setError( "" );
    } ).catch( err => {
      setError( err.message );
      setIsLoading( false );
    } );
  };
  
  const post = ( url: string, data: any, auth: boolean = false ): void => {
    
    let request = axiosRequest;
    if ( auth ) {
      request = axiosAuthRequest;
    }
    
    setIsLoading( true );
    request.post( url, data ).then( res => {
      setValue( res.data );
    } ).catch( err => {
      setError( err.message );
    } ).finally( () => setIsLoading( false ) );
  };
  
  const put = ( url: string, data: any, auth: boolean = false ): void => {
    
    let request = axiosRequest;
    if ( auth ) {
      request = axiosAuthRequest;
    }
    
    setIsLoading( true );
    request.put( url, data ).then( res => {
      setValue( res.data );
    } ).catch( err => {
      setError( err.message );
    } ).finally( () => setIsLoading( false ) );
  };
  
  const del = ( url: string, object: any, auth: boolean = false ): void => {
    
    let request = axiosRequest;
    if ( auth ) {
      request = axiosAuthRequest;
    }
    
    setIsLoading( true );
    request.delete( url, object ).then( res => {
      setValue( res.data );
    } ).catch( err => {
      setError( err.message );
    } ).finally( () => setIsLoading( false ) );
  };
  
  const setDefaultConfig = ( config: AxiosRequestConfig ): void => {
    AxiosConfig.setDefaultConfig( config );
    setAxiosRequest( AxiosConfig.getDefaultAxios() );
  };
  
  const setAuthConfig = ( config: AxiosRequestConfig ): void => {
    AxiosConfig.setAuthConfig( config );
    setAxiosAuthRequest( AxiosConfig.getDefaultAxios() );
  };
  
  return [
    { get, post, put, del, setDefaultConfig, setAuthConfig }, value, error,
    isLoading
  ];
};

interface IRequest {
  get: ( string, boolean? ) => void;
  post: ( string, any, boolean? ) => void;
  put: ( string, any, boolean? ) => void;
  del: ( string, any, boolean? ) => void;
  setDefaultConfig: ( AxiosRequestConfig ) => void;
  setAuthConfig: ( AxiosRequestConfig ) => void;
}