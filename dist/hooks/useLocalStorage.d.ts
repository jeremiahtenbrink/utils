/**
 * ## Custom Hook
 * This hook makes setting values to local storage easy.
 * @param key - Local storage key to be used for this item to be stored in
 * local storage.
 * @param initialValue - Initial value if there isn't a value in localstorage.
 *
 * @return - Returns a array. Index 0 is the value of the localStorage.
 * Index 1 is a function used to change the value of the item in local storage.
 * Index 2 is a function used to remove the item from local storage.
 */
export declare const useLocalStorage: (key: string, initialValue?: any) => [any, SetValue, RemoveValue];
/**
 * ## Function
 * Used to set the localstorage item to a new value.
 * @param value - Value to be placed into local storage.
 * @param encrypted - optional value used to indicate if you want he value
 * and key to be encrypted before storing them in local storage. Default is
 * set to true.
 */
export declare type SetValue = (value: any, encrypted?: boolean) => void;
/**
 * ## Function
 * Call this function to remove the item and key from local storage.
 */
export declare type RemoveValue = () => void;
