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
 * @ignore
 */
export default EncryptionConfig;
