"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cryptr_1 = __importDefault(require("cryptr"));
var EncryptionConfig = /** @class */ (function () {
    function EncryptionConfig() {
    }
    EncryptionConfig.encrypt = function (value) {
        if (typeof value === 'string') {
            return EncryptionConfig.cryptr.encrypt(value);
        }
        else {
            return EncryptionConfig.cryptr.encrypt(JSON.stringify(value));
        }
    };
    EncryptionConfig.decrypt = function (value) {
        var decryptedValue = EncryptionConfig.cryptr.decrypt(value);
        if (JSON.parse(decryptedValue)) {
            return JSON.parse(decryptedValue);
        }
        else {
            return decryptedValue;
        }
    };
    EncryptionConfig.setCryptr = function (key) {
        EncryptionConfig.cryptr = new cryptr_1.default(key);
    };
    return EncryptionConfig;
}());
exports.default = EncryptionConfig;
//# sourceMappingURL=encryptionConfig.js.map