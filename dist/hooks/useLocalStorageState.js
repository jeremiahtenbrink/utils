"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useLocalStorageState = function (key, initialValue) {
    if (initialValue === void 0) { initialValue = null; }
    var invalidKey = typeof key !== "string" || key.length === 0;
    if (invalidKey) {
        throw TypeError("Storage key must be a non-empty string.");
    }
    var _a = react_1.useState(function () {
        var value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) ||
                JSON.stringify(initialValue));
        }
        catch (err) {
            value = initialValue;
        }
        return value;
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
};
//# sourceMappingURL=useLocalStorageState.js.map