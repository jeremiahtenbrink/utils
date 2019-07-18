"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var encryptionConfig_1 = __importDefault(require("./encryptionConfig"));
var react_1 = require("react");
exports.useEncryption = function (toEncrypt) {
    var _a = react_1.useState(toEncrypt), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(), encrypted = _b[0], setEncrypted = _b[1];
    react_1.useEffect(function () {
        if (value) {
            var encrypted_1 = encryptionConfig_1.default.encrypt(value);
            setEncrypted(encrypted_1);
        }
    }, [value]);
    return [encrypted, setValue];
};
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
exports.setEncryptionConfig = function (key) {
    debugger;
    encryptionConfig_1.default.setCryptr(key);
};
//# sourceMappingURL=useEncryption.js.map