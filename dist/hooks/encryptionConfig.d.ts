/**
 * @ignore
 */
declare class EncryptionConfig {
    private static cryptr;
    static encrypt(value: string | {}): string;
    static decrypt(value: string): {} | string;
    static setCryptr(key: string): void;
}
/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application.
 *
 * @param key Secret key for AES encryption.
 */
export declare const setEncryptionConfig: (key: string) => void;
export default EncryptionConfig;
