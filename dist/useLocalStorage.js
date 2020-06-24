"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
var react_1 = require("react");
var encryptionConfig_1 = __importDefault(require("./encryptionConfig"));
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
exports.useLocalStorage = function (key, initialValue) {
    var _a = react_1.useState(key), storageKey = _a[0], setStorageKey = _a[1];
    var _b = react_1.useState(function () { return encryptionConfig_1.default.encrypt(key); }), encryptedKey = _b[0], setEncryptedKey = _b[1];
    var _c = react_1.useState(function () {
        for (var i = 0; i < localStorage.length; i++) {
            var keyFromStorage = localStorage.key(i);
            if (!keyFromStorage) {
                break;
            }
            var decryptedKeyFromStorage = encryptionConfig_1.default.decrypt(keyFromStorage);
            if (decryptedKeyFromStorage === key) {
                setEncryptedKey(localStorage.key(i));
                return encryptionConfig_1.default.decrypt(localStorage.getItem(localStorage.key(i)));
            }
        }
        return initialValue;
    }), storedValue = _c[0], setStoredValue = _c[1];
    var setValue = function (value, encrypted) {
        if (encrypted === void 0) { encrypted = false; }
        if (!encrypted) {
            window.localStorage.setItem(storageKey, value);
            setStoredValue(value);
            return;
        }
        window.localStorage.setItem(encryptedKey, encryptionConfig_1.default.encrypt(value));
        setStoredValue(value);
    };
    var removeValue = function () {
        window.localStorage.removeItem(encryptedKey);
    };
    return [storedValue, setValue, removeValue];
};
//# sourceMappingURL=useLocalStorage.js.map