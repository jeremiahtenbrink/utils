import decode from 'jwt-decode';
import { useLocalStorage } from "./useLocalStorage";

/**
 * ## Custom Hook
 * Sets the token to local storage. Gives easy access to get
 * and set token.
 *
 * @param key   LocalStorage key to be used to store the token.
 * @param initalValue  token inital value. Default is null;
 * them to local storage. Default is true. Must run
 * [setEncryptionConfig](/modules/_useencryption_.html#setencryptionconfig) first.
 */

export const useAuth = ( key: string,
                         initalValue: string | null = null ): UseAuthReturn => {
  
  const [ token, setTokenInLocalStorage, removeTokenFromLocalStorage ] = useLocalStorage(
    key, initalValue );
  
  
  const setToken = ( someToken: string,
                     useEncryption: boolean = true ): void => {
    setTokenInLocalStorage( someToken, useEncryption );
  };
  
  const getToken = (): string => {
    return token;
  };
  
  
  const isAuthenticated = (): boolean => {
    if ( token ) {
      const decoded: DecodedToken = decode( token );
      if ( Date.now() / 1000 > decoded.exp ) {
        removeTokenFromLocalStorage();
        return false;
      } else {
        return true;
      }
    }
    return false;
  };
  
  const logOut = () => {
    removeTokenFromLocalStorage();
  };
  
  return [ isAuthenticated, { setToken, getToken, logOut } ];
};

/**
 * ## Function
 * Call this function to see if the user is authenticated or not.
 *
 * @returns Returns a boolean indicating if the user has been authenticated
 * or not.
 */
export type Authenticated = () => boolean;

/**
 * ## Object
 * Returned from [useAuth](#useauth) hook. Has three functions,
 * setToken,
 * getToken and logout.
 */
export interface JwtFunctions {
  /**
   * ## Function
   * This function stores the Jason Web Token to localstorage.
   *
   * @param token - Jason Web Token received from backend.
   * @param useEncryption - Encrypt the token before storing it into local
   * storage. Default is false, If true you must call
   * [setEncryptionConfig](/modules/_useencryption_.html#setencryptionconfig) first.
   */
  setToken: ( token: string, useEncryption: boolean ) => void
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
 * @ignore
 */
type DecodedToken = { exp: number; };

/**
 * ## Array of values
 * Returned from useAuth custom hook.
 * Index 0 is a function that will return a boolean value indicating if the
 * user has been authenticated.
 * Index 1 is a object that contains three functions, getToken, logOut, and
 * setToken.
 */
export type UseAuthReturn = [ Authenticated, JwtFunctions ]