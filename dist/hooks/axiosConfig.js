"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var defaultConfig = {
    timeout: 1000,
};
var AxiosConfig = /** @class */ (function () {
    function AxiosConfig() {
    }
    AxiosConfig.setDefaultConfig = function (config) {
        AxiosConfig.axiosRequest = axios_1.default.create(config);
    };
    AxiosConfig.setAuthConfig = function (config) {
        AxiosConfig.axiosAuthRequest = axios_1.default.create(config);
    };
    AxiosConfig.getDefaultAxios = function () {
        return AxiosConfig.axiosRequest;
    };
    AxiosConfig.getAuthAxios = function () {
        return AxiosConfig.axiosAuthRequest;
    };
    AxiosConfig.createAxiosRequest = function (config) {
        return axios_1.default.create(config);
    };
    AxiosConfig.axiosRequest = axios_1.default.create(defaultConfig);
    AxiosConfig.axiosAuthRequest = axios_1.default.create(defaultConfig);
    return AxiosConfig;
}());
exports.default = AxiosConfig;
//# sourceMappingURL=axiosConfig.js.map