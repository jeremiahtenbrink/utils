import { Dispatch, SetStateAction } from "react";
/**
 * ## Custom Hook
 * Use to encrypt data. Must run [setEncryptionConfig](#setencryptionconfig)
 * first.
 *
 * @param toEncrypt - LocalStorageValue to be encrypted
 */
export declare const useEncryption: (toEncrypt?: any) => [string, Dispatch<any>];
/**
 * ## Custom Hook
 * Use this hook to decrypt data that has already been encrypted. Must run
 * [setEncryptionConfig](#setencryptionconfig) first.
 * @param toDecrypt - encrypted string to be decrypted.
 */
export declare const useDecryption: (toDecrypt?: string) => [DecryptedData, Dispatch<SetStateAction<string>>];
/**
 * ## String
 * This is the encrypted data from [useEncryption](#useencryption) custom hook.
 */
export declare type EncryptedString = string;
/**
 * ## Function
 * Call this function to set the data that you want to be encrypted.
 */
export declare type SetValueToBeEncrypted = Dispatch<SetStateAction<any>>;
/**
 * ## Array Of Values
 * This is the returned array from [useEncryption](#useencryption) custom hook.
 */
export declare type UseEncryptionReturn = [EncryptedString, SetValueToBeEncrypted];
/**
 * ## Object or a String
 * Data that has been decrypted from [useDecryption](#usedecryption) custom
 * hook.
 */
export declare type DecryptedData = Object | string;
/**
 * ## Function
 * Call this function to set the encrypted string that needs to be decrypted.
 * Returned from the [useDecryption](#usedecryption) custom hook.
 */
export declare type SetDataToBeDecrypted = Dispatch<SetStateAction<string | undefined>>;
/**
 * ## Array Of Values
 * This is the returned array from [useDecryption](#usedecryption) custom hook.
 */
export declare type UseDecryptionReturn = [DecryptedData, SetDataToBeDecrypted];
/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application. Used for
 * [useEncryption](#useencryption) and for [useDecryption](#usedecryption).
 *
 * @param key Secret key for AES encryption.
 */
export declare const setEncryptionConfig: (key: string) => void;
