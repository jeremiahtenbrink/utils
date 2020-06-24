/**
 * ## Use Local Storage
 *
 * This hook makes setting values to local storage easy.
 *
 * @param key - Local storage key to be used for this item to be stored in
 * local storage.
 * @param initialValue - Initial value if there isn't a value in localstorage.
 *
 * @return - Returns a array. Index 0 is the value of the localStorage.
 *
 */
export declare const useLocalStorage: (key: string, initialValue?: any) => [LocalStorageValue, SetValue, RemoveValue];
/**
 * ## Object or String
 * LocalStorageValue returned from useLocalStorage custom hook.
 */
export declare type LocalStorageValue = any;
/**
 * ## Function
 * Used to set the localstorage item to a new value.
 * @param value - value: to be placed into local storage.
 * @param encrypted - encrypted: optional value used to indicate if you want the value
 * and key to be encrypted before storing them in local storage. Default is
 * set to false. You must call [setEncryptionConfig](#setencryptionconfig) in
 * order to use encryption.
 */
export declare type SetValue = (value: any, encrypted?: boolean) => void;
/**
 * ## Function
 * Call this function to remove the item and key from local storage.
 */
export declare type RemoveValue = () => void;
