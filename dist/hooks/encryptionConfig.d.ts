/**
 * @ignore
 */
declare class EncryptionConfig {
    private static cryptr;
    static encrypt(value: string | {}): string;
    static decrypt(value: string): {} | string;
    static setCryptr(key: string): void;
}
export declare const setEncryptionConfig: (key: string) => void;
export default EncryptionConfig;
