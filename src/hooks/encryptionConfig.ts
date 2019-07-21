import Cryptr from 'cryptr';

/**
 * @ignore
 */
class EncryptionConfig {
  
  private static cryptr: Cryptr;
  
  static encrypt( value: string | {} ): string {
    
    if ( typeof value === "undefined" || typeof value === null ) {
      return '';
    }
    if ( typeof value === 'string' ) {
      return EncryptionConfig.cryptr.encrypt( value );
    } else {
      return EncryptionConfig.cryptr.encrypt( JSON.stringify( value ) );
    }
  }
  
  static decrypt( value: string ): {} | string {
    
    if ( typeof value === "undefined" || typeof value === null ) {
      return '';
    }
    try {
      const decryptedValue: string = EncryptionConfig.cryptr.decrypt( value );
      
      try {
        return JSON.parse( decryptedValue );
      } catch {
        return decryptedValue;
      }
      
    } catch {
      return value;
    }
    
  }
  
  static setCryptr( key: string ): void {
    EncryptionConfig.cryptr = new Cryptr( key );
  }
  
}

/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application.
 *
 * @param key Secret key for AES encryption.
 */
export const setEncryptionConfig = ( key: string ): void => {
  
  EncryptionConfig.setCryptr( key );
};

export default EncryptionConfig;
