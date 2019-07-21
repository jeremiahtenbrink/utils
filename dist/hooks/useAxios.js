"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axiosConfig_1 = __importDefault(require("./axiosConfig"));
/**
 * ## Custom Hook
 * Takes in one optional parameter. If no parameter is used then the default configuration for axios requests will be used.
 *
 * @param config  Axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return - Returns array of values. Index 0 is the request object used to make the 4 different axios requests. Index 1 is the value of the request. Index two is the error message if there was an error and a blank string if there wasn't one. Index 3 is a boolean indicating if the request is currently being made.
 */
exports.useAxios = function (config) {
    if (config === void 0) { config = null; }
    var _a = react_1.useState(null), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(""), error = _b[0], setError = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var axiosRequest = config && axiosConfig_1.default.createAxiosRequest(config);
    var defaultRequest = !config;
    var get = function (url, auth) {
        if (auth === void 0) { auth = false; }
        var request = axiosConfig_1.default.getDefaultAxios();
        if (auth) {
            request = axiosConfig_1.default.getAuthAxios();
        }
        else if (!defaultRequest) {
            request = axiosRequest;
        }
        if (request) {
            setIsLoading(true);
            request.get(url).then(function (res) {
                setValue(res.data);
                setIsLoading(false);
                setError("");
            }).catch(function (err) {
                setError(err.message);
                setIsLoading(false);
            });
        }
    };
    var post = function (url, data, auth) {
        if (auth === void 0) { auth = false; }
        var request = axiosConfig_1.default.getDefaultAxios();
        if (auth) {
            request = axiosConfig_1.default.getAuthAxios();
        }
        else if (!defaultRequest) {
            request = axiosRequest;
        }
        setIsLoading(true);
        if (request) {
            request.post(url, data).then(function (res) {
                setValue(res.data);
            }).catch(function (err) {
                setError(err.message);
            }).finally(function () { return setIsLoading(false); });
        }
    };
    var put = function (url, data, auth) {
        if (auth === void 0) { auth = false; }
        var request = axiosConfig_1.default.getDefaultAxios();
        if (auth) {
            request = axiosConfig_1.default.getAuthAxios();
        }
        else if (!defaultRequest) {
            request = axiosRequest;
        }
        setIsLoading(true);
        if (request) {
            request.put(url, data).then(function (res) {
                setValue(res.data);
            }).catch(function (err) {
                setError(err.message);
            }).finally(function () { return setIsLoading(false); });
        }
    };
    var del = function (url, object, auth) {
        if (auth === void 0) { auth = false; }
        var request = axiosConfig_1.default.getDefaultAxios();
        if (auth) {
            request = axiosConfig_1.default.getAuthAxios();
        }
        else if (!defaultRequest) {
            request = axiosRequest;
        }
        setIsLoading(true);
        if (request) {
            request.delete(url, object).then(function (res) {
                setValue(res.data);
            }).catch(function (err) {
                setError(err.message);
            }).finally(function () { return setIsLoading(false); });
        }
    };
    return [
        { get: get, post: post, put: put, del: del }, value, error,
        isLoading
    ];
};
/**
 * ## Function
 * Call this function early in your application to set the default configuration on all future axios calls.
 *
 * @param config Default axios request configuration. See [Axios](https://www.npmjs.com/package/axios)
 * @return void
 */
exports.setAxiosDefaultConfig = function (config) {
    axiosConfig_1.default.setDefaultConfig(config);
};
/**
 * ## Function
 * Call this function early in your application to set the auth configuration
 * on all future axios calls.
 *
 * @param config Axios auth request configuration. See [Axios](https://www.npmjs.com/package/axios)
 */
exports.setAxiosAuthConfig = function (config) {
    axiosConfig_1.default.setAuthConfig(config);
};
//# sourceMappingURL=useAxios.js.map