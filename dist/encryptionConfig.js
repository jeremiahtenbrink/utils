"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @ignore encryptionConfig.ts
 */
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
 * @ignore
 */
exports.default = EncryptionConfig;
//# sourceMappingURL=encryptionConfig.js.map