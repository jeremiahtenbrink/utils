/**
 * @ignore encryptionConfig.ts
 */
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
 * @ignore
 */
export default EncryptionConfig;
