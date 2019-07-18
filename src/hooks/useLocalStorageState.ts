import { useState, useEffect } from "react";

export const useLocalStorageState = ( key: string, initialValue: any = null ) => {
    const invalidKey = typeof key !== "string" || key.length === 0;
    
    if( invalidKey ){
        throw TypeError( "Storage key must be a non-empty string." );
    }
    
    const [ state, setState ] = useState( () => {
        let value;
        try{
            value = JSON.parse( window.localStorage.getItem( key ) ||
                JSON.stringify( initialValue ) );
        }catch( err ){
            value = initialValue;
        }
        return value;
    } );
    
    useEffect( () => {
        window.localStorage.setItem( key, JSON.stringify(state) );
    }, [ state ] );
    
    return [ state, setState ];
}