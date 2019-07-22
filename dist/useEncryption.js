"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var encryptionConfig_1 = __importDefault(require("./encryptionConfig"));
var react_1 = require("react");
/**
 * ## Custom Hook
 * Use to encrypt data. Must run [setEncryptionConfig](#setencryptionconfig)
 * first.
 *
 * @param toEncrypt - LocalStorageValue to be encrypted
 */
exports.useEncryption = function (toEncrypt) {
    var _a = react_1.useState(toEncrypt), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(''), encrypted = _b[0], setEncrypted = _b[1];
    react_1.useEffect(function () {
        if (value) {
            var encrypted_1 = encryptionConfig_1.default.encrypt(value);
            setEncrypted(encrypted_1);
        }
    }, [value]);
    return [encrypted, setValue];
};
/**
 * ## Custom Hook
 * Use this hook to decrypt data that has already been encrypted. Must run
 * [setEncryptionConfig](#setencryptionconfig) first.
 * @param toDecrypt - encrypted string to be decrypted.
 */
exports.useDecryption = function (toDecrypt) {
    var _a = react_1.useState(toDecrypt), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(), decrypted = _b[0], setDecrypted = _b[1];
    react_1.useEffect(function () {
        if (value) {
            var decryption = encryptionConfig_1.default.decrypt(value);
            setDecrypted(decryption);
        }
    }, [value]);
    return [decrypted, setValue];
};
/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application. Used for
 * [useEncryption](#useencryption) and for [useDecryption](#usedecryption).
 *
 * @param key Secret key for AES encryption.
 */
exports.setEncryptionConfig = function (key) {
    encryptionConfig_1.default.setCryptr(key);
};
//# sourceMappingURL=useEncryption.js.map