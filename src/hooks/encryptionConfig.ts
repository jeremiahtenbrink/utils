import Cryptr from 'cryptr';

class EncryptionConfig {
  
  private static cryptr: Cryptr;
  
  static encrypt( value: string | {}): string {
    if ( typeof value === 'string' ) {
      return EncryptionConfig.cryptr.encrypt( value );
    } else {
      return EncryptionConfig.cryptr.encrypt( JSON.stringify( value ) );
    }
  }
  
  static decrypt( value: string ): {} | string {
    const decryptedValue: string = EncryptionConfig.cryptr.decrypt( value );
    if ( JSON.parse( decryptedValue ) ) {
      return JSON.parse( decryptedValue );
    } else {
      return decryptedValue;
    }
  }
  
  static setCryptr( key: string ):void {
    EncryptionConfig.cryptr = new Cryptr( key );
  }
  
}

export default EncryptionConfig;
