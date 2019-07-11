"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
// https://www.robinwieruch.de/react-hooks-fetch-data/
exports.useDataApi = function (initialUrl, initialData) {
    var _a = react_1.useState(initialData), data = _a[0], setData = _a[1];
    var _b = react_1.useState(initialUrl), url = _b[0], setUrl = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(false), isError = _d[0], setIsError = _d[1];
    react_1.useEffect(function () {
        var fetchData = function () {
            setIsError(false);
            setIsLoading(true);
            axios_1.default(url).then(function (res) {
                setData(res.data);
                setIsLoading(false);
            }).catch(function (err) {
                setIsError(true);
                setIsLoading(false);
            });
        };
        fetchData();
    }, [url]);
    var doFetch = function (url) {
        setUrl(url);
    };
    return { data: data, isLoading: isLoading, isError: isError, doFetch: doFetch };
};
//# sourceMappingURL=useDataApi.js.map