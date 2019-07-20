import EncryptionConfig from './encryptionConfig';
import { useEffect, useState, Dispatch, SetStateAction } from "react";

export const useEncryption = ( toEncrypt?: any ): UseEncryption => {
  
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

export const useDecryption = ( toDecrypt?: string ): UseDecryption => {
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

export type UseEncryption = [ string, Dispatch<SetStateAction<string>> ];
export type UseDecryption = [ string | object, Dispatch<SetStateAction<string | undefined>> ];
