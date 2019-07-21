"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = __importDefault(require("jwt-decode"));
/**
 * ## Custom Hook
 * Sets the token to local storage. Gives easy access to get
 * and set token.
 *
 * @param key   LocalStorage key to be used to store the token.
 * @param token   Token to be stored.
 */
exports.useAuth = function (key, token) {
    if (token === void 0) { token = null; }
    var setToken = function (someToken) {
        localStorage.setItem(key, someToken);
    };
    var getToken = function () {
        return localStorage.getItem(key);
    };
    var isAuthenticated = function () {
        var token = getToken();
        var decoded = jwt_decode_1.default(token);
        if (Date.now() / 1000 > decoded.exp) {
            localStorage.removeItem(key);
            return false;
        }
        else {
            return true;
        }
    };
    var logOut = function () {
        localStorage.removeItem(key);
    };
    return [isAuthenticated, { setToken: setToken, getToken: getToken, logOut: logOut }];
};
//# sourceMappingURL=useAuth.js.map