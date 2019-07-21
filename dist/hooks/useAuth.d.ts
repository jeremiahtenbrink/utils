/**
 * ## Custom Hook
 * Sets the token to local storage. Gives easy access to get
 * and set token.
 *
 * @param key   LocalStorage key to be used to store the token.
 * @param token   Token to be stored.
 */
export declare const useAuth: (key: string, token?: string) => [authenticated, jwt];
/**
 * ## Function
 * Call this function to see if the user is authenticated or not.
 *
 * @return Return a boolean indicating if the user has been authenticated or not.
 */
export declare type authenticated = () => boolean;
/**
 * ## Object
 * Returned from useAuth hook. Has three functions, setToken, getToken and
 * logout.
 */
export interface jwt {
    /**
     * ## Function
     * This function stores the Jason Web Token to localstorage.
     *
     * @param token - Jason Web Token received from backend.
     */
    setToken: (token: string) => void;
    /**
     * ## Function
     * This function gets the Jason Web Token from local storage.
     * @return Jason Web Token in local storage.
     */
    getToken: () => string;
    /**
     * ## Function
     * This function removes the Jason Web Token from localstorage.
     */
    logOut: () => void;
}
/**
 * ## Array of values
 * Returned from useAuth. Array, index position 0 is a boolean indicating
 * rather or not the user is authenticated and index position 1 is the jwt object
 * containing the setToken, getToken or logout functions.
 */
export declare type IUseAuth = [authenticated, jwt];
