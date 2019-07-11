import { useState, useEffect } from 'react';
import axios from 'axios';

// https://www.robinwieruch.de/react-hooks-fetch-data/

export const useDataApi = ( initialUrl: string,
                            initialData: any ): { data: any, isLoading: boolean, isError: boolean, doFetch: ( string ) => void } => {
  const [ data, setData ]: [ any, ( any ) => void ] = useState( initialData );
  const [ url, setUrl ]: [ string, ( string ) => void ] = useState(
    initialUrl );
  
  const [ isLoading, setIsLoading ]: [ boolean, ( boolean ) => void ] = useState(
    false );
  
  const [ isError, setIsError ]: [ boolean, ( boolean ) => void ] = useState(
    false );
  
  useEffect( () => {
    const fetchData = () => {
      setIsError( false );
      setIsLoading( true );
      
      axios( url ).then( res => {
        setData( res.data );
        setIsLoading( false );
      } ).catch( err => {
        setIsError( true );
        setIsLoading( false );
      } );
      
    };
    
    fetchData();
  }, [ url ] );
  
  const doFetch = ( url: string ): void => {
    setUrl( url );
  };
  
  return { data, isLoading, isError, doFetch };
};

