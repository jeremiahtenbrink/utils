"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var useLocalStorage_1 = require("./useLocalStorage");
/**
 * ## Custom Hook
 * Sets the token to local storage. Gives easy access to get
 * and set token.
 *
 * @param key   LocalStorage key to be used to store the token.
 * @param initialValue  token initial value. Default is null;
 * them to local storage. Default is true. Must run
 *
 *  [setEncryptionConfig](/useful-hooks/modules/_useencryption_.html#setencryptionconfig) first.
 */
exports.useAuth = function (key, initalValue) {
    if (initalValue === void 0) { initalValue = null; }
    var _a = useLocalStorage_1.useLocalStorage(key, initalValue), token = _a[0], setTokenInLocalStorage = _a[1], removeTokenFromLocalStorage = _a[2];
    var setToken = function (someToken, useEncryption) {
        if (useEncryption === void 0) { useEncryption = true; }
        setTokenInLocalStorage(someToken, useEncryption);
    };
    var getToken = function () {
        return token;
    };
    var isAuthenticated = function () {
        if (token) {
            var decoded = jwt_decode_1.default(token);
            if (Date.now() / 1000 > decoded.exp) {
                removeTokenFromLocalStorage();
                return false;
            }
            else {
                return true;
            }
        }
        return false;
    };
    var logOut = function () {
        removeTokenFromLocalStorage();
    };
    return [isAuthenticated, { setToken: setToken, getToken: getToken, logOut: logOut }];
};
//# sourceMappingURL=useAuth.js.map