"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cryptr_1 = __importDefault(require("cryptr"));
/**
 * @ignore
 */
var EncryptionConfig = /** @class */ (function () {
    function EncryptionConfig() {
    }
    EncryptionConfig.encrypt = function (value) {
        if (typeof value === "undefined" || typeof value === null) {
            return '';
        }
        if (typeof value === 'string') {
            return EncryptionConfig.cryptr.encrypt(value);
        }
        else {
            return EncryptionConfig.cryptr.encrypt(JSON.stringify(value));
        }
    };
    EncryptionConfig.decrypt = function (value) {
        if (typeof value === "undefined" || typeof value === null) {
            return '';
        }
        try {
            var decryptedValue = EncryptionConfig.cryptr.decrypt(value);
            try {
                return JSON.parse(decryptedValue);
            }
            catch (_a) {
                return decryptedValue;
            }
        }
        catch (_b) {
            return value;
        }
    };
    EncryptionConfig.setCryptr = function (key) {
        EncryptionConfig.cryptr = new cryptr_1.default(key);
    };
    return EncryptionConfig;
}());
/**
 * ## Function
 * Sets the cryptr configuration using the secret key provided.
 * Set this up early in our application to use useEncryption and
 * useDecryption through out your application.
 *
 * @param key Secret key for AES encryption.
 */
exports.setEncryptionConfig = function (key) {
    EncryptionConfig.setCryptr(key);
};
exports.default = EncryptionConfig;
//# sourceMappingURL=encryptionConfig.js.map