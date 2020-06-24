import { Dispatch, SetStateAction, useState } from "react";
import EncryptionConfig from './encryptionConfig';

/**
 * ## Use Local Storage
 *
 * This hook makes setting values to local storage easy.
 *
 * @param key - Local storage key to be used for this item to be stored in
 * local storage.
 * @param initialValue - Initial value if there isn't a value in localstorage.
 *
 * @return - Returns a array. Index 0 is the value of the localStorage.
 *
 */
export const useLocalStorage = ( key: string,
                                 initialValue?: any ): [ LocalStorageValue, SetValue, RemoveValue ] => {
  
  const [ storageKey, setStorageKey ] = useState( key );
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
  
  
  const setValue = ( value: any, encrypted: boolean = false ): void => {
    
    if ( !encrypted ) {
      window.localStorage.setItem( storageKey, value );
      setStoredValue( value );
      return;
    }
    window.localStorage.setItem( encryptedKey,
      EncryptionConfig.encrypt( value ) );
    setStoredValue( value );
  };
  
  const removeValue = (): void => {
    window.localStorage.removeItem( encryptedKey );
  };
  
  return [ storedValue, setValue, removeValue ];
};
/**
 * ## Object or String
 * LocalStorageValue returned from useLocalStorage custom hook.
 */
export type LocalStorageValue = any;

/**
 * ## Function
 * Used to set the localstorage item to a new value.
 * @param value - value: to be placed into local storage.
 * @param encrypted - encrypted: optional value used to indicate if you want the value
 * and key to be encrypted before storing them in local storage. Default is
 * set to false. You must call [setEncryptionConfig](#setencryptionconfig) in
 * order to use encryption.
 */
export type SetValue = ( value: any, encrypted?: boolean ) => void;
/**
 * ## Function
 * Call this function to remove the item and key from local storage.
 */
export type RemoveValue = () => void;