import EncryptionConfig from './encryptionConfig';
import { useEffect, useState, Dispatch, SetStateAction } from "react";

/**
 * ## Custom Hook
 * Use to encrypt data. Must run [setEncryptionConfig](#setencryptionconfig)
 * first.
 *
 * @param toEncrypt - LocalStorageValue to be encrypted
 */
export const useEncryption = ( toEncrypt?: any ): UseEncryptionReturn => {
  
  const [ value, setValue ]: [ any, Dispatch<SetStateAction<any>> ] = useState(
    toEncrypt );
  const [ encrypted, setEncrypted ]: [ string, Dispatch<SetStateAction<string>> ] = useState(
    '' );
  
  useEffect( () => {
    if ( value ) {
      const encrypted = EncryptionConfig.encrypt( value );
      setEncrypted( encrypted );
    }
  }, [ value ] );
  
  return [ encrypted, setValue ];
  
};

/**
 * ## Custom Hook
 * Use this hook to decrypt data that has already been encrypted. Must run
 * [setEncryptionConfig](#setencryptionconfig) first.
 * @param toDecrypt - encrypted string to be decrypted.
 */
export const useDecryption = ( toDecrypt?: string ): UseDecryptionReturn => {
  const [ value, setValue ]: [ string | undefined, Dispatch<SetStateAction<string | undefined>> ] = useState(
    toDecrypt );
  const [ decrypted, setDecrypted ] = useState();
  
  useEffect( () => {
    if ( value ) {
      const decryption = EncryptionConfig.decrypt( value );
      setDecrypted( decryption );
    }
  }, [ value ] );
  
  return [ decrypted, setValue ];
};
/**
 * ## String
 * This is the encrypted data from [useEncryption](#useencryption) custom hook.
 */
export type EncryptedString = string;
/**
 * ## Function
 * Call this function to set the data that you want to be encrypted.
 */
export type SetValueToBeEncrypted = Dispatch<SetStateAction<any>>;

/**
 * ## Array Of Values
 * This is the returned array from [useEncryption](#useencryption) custom hook.
 */
export type UseEncryptionReturn = [ EncryptedString, SetValueToBeEncrypted ];
/**
 * ## Object or a String
 * Data that has been decrypted from [useDecryption](#usedecryption) custom
 * hook.
 */
export type DecryptedData = Object | string;
/**
 * ## Function
 * Call this function to set the encrypted string that needs to be decrypted.
 * Returned from the [useDecryption](#usedecryption) custom hook.
 */
export type SetDataToBeDecrypted = Dispatch<SetStateAction<string | undefined>>
/**
 * ## Array Of Values
 * This is the returned array from [useDecryption](#usedecryption) custom hook.
 */
export type UseDecryptionReturn = [ DecryptedData, SetDataToBeDecrypted ];


/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application. Used for
 * [useEncryption](#useencryption) and for [useDecryption](#usedecryption).
 *
 * @param key Secret key for AES encryption.
 */
export const setEncryptionConfig = ( key: string ): void => {
  
  EncryptionConfig.setCryptr( key );
};