export declare const useEncryption: (toEncrypt?: any) => [string, (any: any) => void];
export declare const useDecryption: (toDecrypt?: string) => [string | {}, (string: any) => void];
export declare const setEncryptionConfig: (key: string) => void;
