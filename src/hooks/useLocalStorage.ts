import { Dispatch, SetStateAction, useState } from "react";
import EncryptionConfig from './encryptionConfig';

const useLocalStorage = ( key: string,
                          initialValue?: any ): [ any, SetValue, RemoveValue ] => {
  
  const [ encryptedKey, setEncryptedKey ]: [ string, Dispatch<SetStateAction<string>> ] = useState(
    () => EncryptionConfig.encrypt( key ) );
  
  const [ storedValue, setStoredValue ]: [ any, Dispatch<SetStateAction<any>> ] = useState(
    () => {
      
      for ( let i = 0; i < localStorage.length; i++ ) {
        let keyFromStorage: string | null = localStorage.key( i );
        
        if ( !keyFromStorage ) {
          break;
        }
        let decryptedKeyFromStorage = EncryptionConfig.decrypt(
          keyFromStorage );
        if ( decryptedKeyFromStorage === key ) {
          setEncryptedKey( localStorage.key( i ) as string );
          return EncryptionConfig.decrypt(
            localStorage.getItem( localStorage.key( i ) as string ) as string );
        }
      }
      return initialValue;
    } );
  
  const setValue = ( value: any ): void => {
    
    window.localStorage.setItem( encryptedKey,
      EncryptionConfig.encrypt( value ) );
    setStoredValue( value );
  };
  
  const removeValue = (): void => {
    
    window.localStorage.removeItem( encryptedKey );
  };
  
  return [ storedValue, setValue, removeValue ];
};

type SetValue = ( value: any ) => void;
type RemoveValue = () => void;
export default useLocalStorage;