import { Dispatch, SetStateAction } from "react";
/**
 * Use Encryption Hook
 * Use to encrypt data. Must run [setEncryptionConfig](#setencryptionconfig)
 * first.
 *
 * @param toEncrypt - LocalStorageValue to be encrypted
 * @return {UseEncryptionReturn}
 */
export declare const useEncryption: (toEncrypt?: any) => UseEncryptionReturn;
/**
 * Use Decryption Hook
 * Use this hook to decrypt data that has already been encrypted. Must run
 * [setEncryptionConfig](#setencryptionconfig) first.
 * @param {string} toDecrypt - encrypted string to be decrypted.
 */
export declare const useDecryption: (toDecrypt?: string) => UseDecryptionReturn;
/**
 * @typedef {String} EncryptedString
 * This is the encrypted data from [useEncryption](#useencryption) custom hook.
 */
export declare type EncryptedString = string;
/**
 * @typedef {Dispatch<SetStateAction<any>>} SetValueToBeEncrypted
 * SetValueToBeEncrypted
 * Call this function to set the data that you want to be encrypted.
 */
export declare type SetValueToBeEncrypted = Dispatch<SetStateAction<any>>;
/**
 * @typedef {[EncryptedString, SetValueToBeEncrypted]} UseEncryptionReturn
 * Array Of Values
 * This is the returned array from [useEncryption](#useencryption) custom hook.
 */
export declare type UseEncryptionReturn = [EncryptedString, SetValueToBeEncrypted];
/**
 * @typedef {Object | string} DecryptedData
 * Data that has been decrypted from [useDecryption](#usedecryption) custom
 * hook.
 */
export declare type DecryptedData = Object | string;
/**
 * @typedef {Dispatch<SetStateAction<string | undefined>>} SetDataToBeDecrypted
 * Call this function to set the encrypted string that needs to be decrypted.
 * Returned from the [useDecryption](#usedecryption) custom hook.
 */
export declare type SetDataToBeDecrypted = Dispatch<SetStateAction<string | undefined>>;
/**
 * @typedef {Dispatch<SetStateAction<string | undefined>>} SetDataToBeDecrypted
 * This is the returned array from [useDecryption](#usedecryption) custom hook.
 */
export declare type UseDecryptionReturn = [DecryptedData, SetDataToBeDecrypted];
/**
 * @typedef {(key: string) => void} setEncryptionConfig
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption throughout your application. Used for
 * [useEncryption](#useencryption) and for [useDecryption](#usedecryption).
 *
 * @param key Secret key for AES encryption.
 */
export declare const setEncryptionConfig: (key: string) => void;
