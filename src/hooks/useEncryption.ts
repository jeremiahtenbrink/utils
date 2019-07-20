import EncryptionConfig from './encryptionConfig';
import { useEffect, useState, Dispatch, SetStateAction } from "react";

export const useEncryption = ( toEncrypt?: any ): IUseEncryption => {
  
  const [ value, setValue ] = useState( toEncrypt );
  const [ encrypted, setEncrypted ] = useState();
  
  useEffect( () => {
    if ( value ) {
      const encrypted = EncryptionConfig.encrypt( value );
      setEncrypted( encrypted );
    }
  }, [ value ] );
  
  return [ encrypted, setValue ];
  
};

export const useDecryption = ( toDecrypt?: string ): IUseDecryption => {
  const [ value, setValue ] = useState( toDecrypt );
  const [ decrypted, setDecrypted ] = useState();
  
  useEffect( () => {
    if ( value ) {
      const decryption = EncryptionConfig.decrypt( value );
      setDecrypted( decryption );
    }
  }, [ value ] );
  
  return [ decrypted, setValue ];
};


export const setEncryptionConfig = ( key: string ) => {
  
  EncryptionConfig.setCryptr( key );
};

type IUseEncryption = [ string, ( any ) => void ];
type IUseDecryption = [ string | {}, ( string ) => void ];
